import { getDailyQuote } from '@/src/lib/notion'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
export const revalidate = 60;

export async function Quote() {
    console.log("PAGE REGENERATED AT:", new Date().toISOString());

  const quote = await getDailyQuote(process.env.NOTION_QUOTES_DB_ID!)
  const item = quote?.results?.[0]
  if (!item || item.object !== 'page') return null

  const page = item as PageObjectResponse

  // Narrowing Name to TitleProperty
  const nameProp = page.properties['Name']
  const text =
    nameProp && nameProp.type === 'title' && nameProp.title.length > 0
      ? nameProp.title[0].plain_text
      : '—'

  // Narrowing Author to SelectProperty
  const authorProp = page.properties['Author']
  const author =
    authorProp && authorProp.type === 'select' && authorProp.select
      ? authorProp.select.name
      : 'Unknown'

  return (
    <section className="max-w-2xl mx-auto py-8">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
        Thought of the Day
      </p>
      <blockquote className="relative border-l-4 border-gray-300 pl-6">
        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed italic">
          “{text}”
        </p>
        <footer className="mt-3 text-sm text-gray-500 tracking-wide">
          — {author}
        </footer>
      </blockquote>
    </section>
  )
}
