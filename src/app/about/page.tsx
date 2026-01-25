 import { getPageContent, notion } from '@/src/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
 

export const metadata = {
  title: 'About',
  description: 'About me',
}
const NOTION_ABOUT_PAGE = process.env.NOTION_ABOUT_PAGE;

if (!NOTION_ABOUT_PAGE) {
  throw new Error('Missing NOTION_ABOUT_PAGE environment variable')
}


export default async function Page() {
    const content = await getPageContent(NOTION_ABOUT_PAGE!);

    const notionRenderer = new NotionRenderer({
      client:notion,
    })

    notionRenderer.use(hljsPlugin({}));
    notionRenderer.use(bookmarkPlugin(undefined));

    const html = await notionRenderer.render(...content);

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About me</h1>
      {/* <p className="text-base text-gray-700 leading-relaxed mb-4"> */}
           <div
        className="text-xl max-w-3xl leading-10 prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: html }}
      />
 
      {/* </p> */}
    </section>
  )
}
