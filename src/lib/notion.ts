import "server-only"; // very important 

import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { NotionToMarkdown } from "notion-to-md";
 

// const NOTION_BLOGS_DB_ID = process.env.NOTION_BLOGS_DB_ID
// if (!NOTION_BLOGS_DB_ID) {
//   throw new Error('Missing NOTION_BLOGS_DB_ID environment variable')
// }

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
export const getNotionPages = async (databaseId: string) => {
  return notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      select: { equals: "Published" },
    },
  });
};

export const getDailyQuote = async (databaseId: string) => {
  return notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Today",
      checkbox: { equals: true },
    },
  });
};

export const getPageContent = async (pageId: string) => {
  const res = await notion.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
};

export const getPageBySlug = async (databaseId: string, slug: string) => {
  const res = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return res.results[0] as PageObjectResponse | undefined;
};

export async function getPageMarkdown(id: string): Promise<string> {
  console.log(id);
    const mdblocks = await n2m.pageToMarkdown(id);

  const markdown = n2m.toMarkdownString(mdblocks)["parent"];
  return markdown;
}