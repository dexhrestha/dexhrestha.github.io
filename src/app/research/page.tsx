 import { getPageContent, notion } from '@/src/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
 

export const metadata = {
  title: 'Research',
  description: 'My research interest',
}

const NOTION_RESEARCH_PAGE = process.env.NOTION_RESEARCH_PAGE;

if (!NOTION_RESEARCH_PAGE) {
  throw new Error('Missing NOTION_RESEARCH_PAGE environment variable')
}
export default async function Page() {
      const content = await getPageContent(NOTION_RESEARCH_PAGE!);

    const notionRenderer = new NotionRenderer({
      client:notion,
    })

    notionRenderer.use(hljsPlugin({}));
    notionRenderer.use(bookmarkPlugin(undefined));

    const html = await notionRenderer.render(...content);

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Research</h1>
      {/* <p className="text-base text-gray-700 leading-relaxed mb-4"> */}
           <div
        className="text-xl max-w-3xl leading-10 prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: html }}
      />
 
      {/* </p> */}
    </section>
  )
}
