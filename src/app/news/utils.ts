import { getNotionPages } from "@/src/lib/notion";

type NewsMetadata = {
  slug: string;
  title: string;
  publishedAt: string;
};

export async function getNews(): Promise<NewsMetadata[]> {
  const news = await getNotionPages(process.env.NOTION_NEWS_DB_ID);

  return news.results.map((page: any): NewsMetadata => ({
    slug: page.properties.Slug?.rich_text?.[0]?.plain_text ?? "",
    title: page.properties.Title?.title?.[0]?.plain_text ?? "",
    publishedAt: page.properties.Date?.date?.start ?? "",
  }));
}



export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
