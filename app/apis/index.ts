import { createClient } from "microcms-js-sdk";
import { GetBlogContentApi, GetBlogsApi, ScrapboxObject } from "./types";

/**
 * Get BlogIndex from CMS
 */
export async function getBlogs() {
  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN || "",
    apiKey: process.env.MICRO_CMS_API_KEY || "",
  });

  const response = await client.get<Promise<GetBlogsApi>>({
    endpoint: process.env.MICRO_CMS_API_ENDPOINT || "",
    queries: { fields: "id,title,publishedAt" },
  });

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return response.contents;
}

/**
 * Get BlogContent from CMS
 */
export async function getBlogContent({ id }: { id: string }) {
  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN || "",
    apiKey: process.env.MICRO_CMS_API_KEY || "",
  });

  const response = await client.get<Promise<GetBlogContentApi>>({
    endpoint: process.env.MICRO_CMS_API_ENDPOINT || "",
    queries: { ids: id },
  });

  // if (!response.contents.length) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  // TODO CMSのAPI仕様で配列になってしまう
  return response.contents[0] || { title: "", content: "", publishedAt: "" };
}

/**
 * Get ScrapBoxList
 */
export async function getScrapBox() {
  const response = await fetch("https://scrapbox.io/api/pages/hyuga-tsukui");

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch scrapbox data");
  }

  const scrapboxObject = (await response.json()) as ScrapboxObject;

  return scrapboxObject;
}
