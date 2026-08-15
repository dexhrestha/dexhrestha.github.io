import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import { getPageContent, notion } from '@/src/lib/notion'

export const revalidate = 60

export const metadata = {
  title: 'Projects',
  description: 'My projects',
}

export default async function Page() {
  const projectsPageId = process.env.NOTION_PROJECTS_PAGE

  if (!projectsPageId) {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Projects
        </h1>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Projects coming soon.
        </p>
      </section>
    )
  }

  const content = await getPageContent(projectsPageId)
  const notionRenderer = new NotionRenderer({ client: notion })

  notionRenderer.use(hljsPlugin({}))
  notionRenderer.use(bookmarkPlugin(undefined))

  const html = await notionRenderer.render(...content)

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div
        className="projects-content prose prose-neutral max-w-3xl text-base leading-7"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  )
}
