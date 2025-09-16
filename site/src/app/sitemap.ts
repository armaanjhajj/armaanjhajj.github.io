import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://armaanjhajj.com";
  const urls = ["/", "/about/", "/projects/", "/weblog/", "/contact/"];
  return urls.map((u) => ({ url: base + u, changeFrequency: "weekly", priority: 0.7 }));
}


