import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ictaca2025.cahcet.edu.in"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#call-for-papers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#important-dates`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#registration`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#committee`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#guidelines`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#venue`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
  ]
}

