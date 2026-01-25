import "server-only"; // very important 

import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";


// Initialize Notion client
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Create the notion-to-md converter
const n2m = new NotionToMarkdown({ notionClient: notion });
/**
 * Retrieves a Notion page and converts it to markdown format
 * @param id The Notion page ID to retrieve
 * @returns A promise that resolves to the markdown string representation of the page
 */

export const getNotionPages = cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
  })
})


export const getPageContent = cache((pageId:string)=>{
  return notion.blocks.children
  .list({block_id:pageId})
  .then((res)=>res.results as  BlockObjectResponse[]);
});

export const getPageBySlug = cache((slug:string)=>{
  return notion.databases.query({
    database_id:process.env.NOTION_DATABASE_ID,
    filter:{
      property:"Slug",
      rich_text:{
        equals:slug,
      }
    }
  }).then((res)=> res.results[0] as PageObjectResponse | undefined)
});

export async function getPageMarkdown(id: string): Promise<string> {
  console.log(id);
    const mdblocks = await n2m.pageToMarkdown(id);

  const markdown = n2m.toMarkdownString(mdblocks)["parent"];
  return markdown;
}