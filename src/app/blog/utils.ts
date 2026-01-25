import { getNotionPages } from '@/src/lib/notion'
import fs from 'fs'
import path from 'path'

type BlogPostForSitemap = {
  slug: string
  publishedAt: string
  title: string
}

// ---- MDX helpers (unchanged) ----
// NOTE: Metadata type must exist somewhere in your project.
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match?.[1] ?? ''
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n').filter(Boolean)

  const metadata: any = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim()] = value
  })

  return { metadata, content }
}


// ---- Notion helpers (new) ----
function getPlainTextFromTitle(prop: any): string | null {
  // Notion "title" property
  return prop?.title?.[0]?.plain_text ?? null
}

function getPlainTextFromRichText(prop: any): string | null {
  // Notion "rich_text" property
  return prop?.rich_text?.[0]?.plain_text ?? null
}

function getDateStart(prop: any): string | null {
  // Notion "date" property
  return prop?.date?.start ?? null
}

export async function getBlogPosts(): Promise<BlogPostForSitemap[]> {
  const res = await getNotionPages(process.env.NOTION_BLOGS_DB_ID)

  return res.results
    .map((page: any) => {
      const slug =
        getPlainTextFromRichText(page.properties?.Slug) ??
        getPlainTextFromTitle(page.properties?.Slug)

      const publishedAt = getDateStart(page.properties?.['Published Date'])

      const title = getPlainTextFromTitle(page.properties?.Title)

      // If any required fields are missing, drop the page
      if (!slug || !publishedAt || !title) return null

      return { slug, publishedAt, title }
    })
    .filter((post): post is BlogPostForSitemap => post !== null)
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  const normalized = date.includes('T') ? date : `${date}T00:00:00`
  const targetDate = new Date(normalized)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) formattedDate = `${yearsAgo}y ago`
  else if (monthsAgo > 0) formattedDate = `${monthsAgo}mo ago`
  else if (daysAgo > 0) formattedDate = `${daysAgo}d ago`
  else formattedDate = 'Today'

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate
}