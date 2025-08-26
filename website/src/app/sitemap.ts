import { MetadataRoute } from "next";
import { base_url } from "~/lib/utils";
import { getPostURLs } from "~/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getPostURLs();
  const posts = urls.map((url: string) => {
    return {
      url: `${base_url}${url}`,
      lastModified: new Date(),
    };
  });

  const pages = ["", "/cafe", "/music"].map((url) => {
    return {
      url: `${base_url}${url}`,
      lastModified: new Date(),
    };
  });

  return [...posts, ...pages];
}
