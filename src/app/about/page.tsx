 import { getPageContent, notion } from '@/src/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import Image from 'next/image';

export const revalidate = 60;  
 

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
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src="/images/profile.jpg"
          alt="Portrait of Dipesh Shrestha"
          width={220}
          height={220}
          className="aspect-square shrink-0 rounded-2xl object-cover ring-1 ring-black/10 dark:ring-white/15"
        />
        <div
          className="about-content prose prose-neutral min-w-0 max-w-3xl text-base leading-7"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  )
}
