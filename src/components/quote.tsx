import { getDailyQuote } from '@/src/lib/notion'

export const metadata = {
  title: 'Publications',
  description: 'My publications',
}

export async function Quote() {
  const quote = await getDailyQuote(process.env.NOTION_QUOTES_DB_ID!)

  const item = quote?.results?.[0]
  const text = item?.properties?.Name?.title?.[0]?.plain_text ?? '—'
  const author = item?.properties?.Author?.select?.name ?? 'Unknown'

  return (
    <section className="max-w-2xl mx-auto py-8">
     <p className="text-sm text-gray-400 mb-2">
  Today’s quote
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
