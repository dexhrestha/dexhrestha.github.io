import {  getPageBySlug, getPageContent, getPageMarkdown } from "@/src/lib/notion";
import Markdown from "markdown-to-jsx";
import "@/src/styles/markdown.css"; // load css file
import { notFound } from "next/navigation";
import { notion } from "@/src/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Post } from "../post";
export const revalidate = 60;  

 export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>,
}) {
  const { slug} = await params;
  
  // Fetch and convert Notion page content to markdown
  // Uses the utility function we created earlier
  console.log(slug);
  const post = await getPageBySlug(process.env.NOTION_BLOGS_DB_ID!,slug);

  if (!post) notFound();


  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client:notion,
  })

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...content);

  console.log("Post",post);


  return (
    <main>
      <Post
        title ={(post.properties.Title as any).title[0].plain_text}
        publishedAt={(post.properties['Published Date'] as any).date.start}
        author={(post.properties.Author as any).people[0]}
        bannerImage={(post.properties.BannerImage as any).url}
        bannerImageWidth={(post.properties.BannerImageWidth as any).number}
        bannerImageHeight={(post.properties.BannerImageHeight as any).number}
        content={html}
      /> 
    </main>
  );
}