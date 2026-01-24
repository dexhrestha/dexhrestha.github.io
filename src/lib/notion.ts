// import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";

// // Initialize Notion client
// const notion = new Client({
//   auth: process.env.NOTION_API_KEY,
// });
// // Create the notion-to-md converter
// const n2m = new NotionToMarkdown({ notionClient: notion });
// /**
//  * Retrieves a Notion page and converts it to markdown format
//  * @param id The Notion page ID to retrieve
//  * @returns A promise that resolves to the markdown string representation of the page
//  */
// export async function getPageMarkdown(id: string): Promise<string> {
//   const mdblocks = await n2m.pageToMarkdown(id);
//   const markdown = n2m.toMarkdownString(mdblocks)["parent"];
//   return markdown;
// }