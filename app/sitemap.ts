import type { MetadataRoute } from "next";

const baseUrl = "https://noor-restaurant-dubai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/gallery", "/private-dining", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
