// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = 'https://www.mustafah.dev'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/projects',
    '/services',
    '/process'
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))

  try {
    const response = await fetch(BASE_URL + '/projects')
    const projects = await response.json()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dynamicRoutes = projects.map((post: any) => ({
      url: `${BASE_URL}/blog/${post.id}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    return [...staticRoutes, ...dynamicRoutes]
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap dynamique", error)
    return staticRoutes
  }
}