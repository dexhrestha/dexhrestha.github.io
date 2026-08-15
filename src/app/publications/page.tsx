import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { notion } from '@/src/lib/notion'

export const revalidate = 60

export const metadata = {
  title: 'Publications',
  description: 'My publications',
}

function getText(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]

  if (property?.type === 'title') {
    return property.title.map((item) => item.plain_text).join('')
  }

  if (property?.type === 'rich_text') {
    return property.rich_text.map((item) => item.plain_text).join('')
  }

  return ''
}

function getAuthors(page: PageObjectResponse) {
  const authorLine = getText(page, 'Author line')
  if (authorLine) return authorLine

  const property = page.properties.Authors
  return property?.type === 'multi_select'
    ? property.multi_select.map((author) => author.name).join(', ')
    : ''
}

function getNumber(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]
  return property?.type === 'number' ? property.number : null
}

function getSelect(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]
  return property?.type === 'select' ? property.select?.name ?? '' : ''
}

function getUrl(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]
  return property?.type === 'url' ? property.url : null
}

function FormattedAuthors({ authors }: { authors: string }) {
  return authors.split(/(Shrestha,?\s+D\.?)/g).map((part, index) =>
    /^Shrestha,?\s+D\.?$/.test(part) ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    )
  )
}

function PublicationEntry({ publication }: { publication: PageObjectResponse }) {
  const authors = getAuthors(publication)
  const year = getNumber(publication, 'Year')
  const title = getText(publication, 'Name')
  const venue = getText(publication, 'Venue')
  const url = getUrl(publication, 'URL')

  return (
    <p>
      <FormattedAuthors authors={authors} />
      {year ? ` (${year}).` : authors ? '.' : ''}{' '}
      <em>{title}{title && '.'}</em>
      {venue && ` ${venue}`}
      {url && (
        <a
          className="block w-fit text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} publication`}
        >
          View publication ↗
        </a>
      )}
    </p>
  )
}

export default async function Page() {
  const databaseId = process.env.NOTION_PUBLICATION_DB_ID

  if (!databaseId) {
    throw new Error('Missing NOTION_PUBLICATION_DB_ID environment variable')
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
    sorts: [{ property: 'Order', direction: 'ascending' }],
  })

  const publications = response.results.filter(
    (result): result is PageObjectResponse => 'properties' in result
  )
  const articles = publications.filter(
    (publication) => getSelect(publication, 'Category') !== 'Conference Presentation'
  )
  const presentations = publications.filter(
    (publication) => getSelect(publication, 'Category') === 'Conference Presentation'
  )

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Publications
      </h1>

      {articles.length > 0 ? (
        <div className="space-y-6 text-base leading-7 text-neutral-800 dark:text-neutral-200">
          {articles.map((publication) => (
            <PublicationEntry key={publication.id} publication={publication} />
          ))}
        </div>
      ) : (
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
          No publications yet.
        </p>
      )}

      {presentations.length > 0 && (
        <>
          <h2 className="mb-4 mt-10 text-xl font-semibold tracking-tight">
            Conference Presentation
          </h2>
          <div className="space-y-6 text-base leading-7 text-neutral-800 dark:text-neutral-200">
            {presentations.map((publication) => (
              <PublicationEntry key={publication.id} publication={publication} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
