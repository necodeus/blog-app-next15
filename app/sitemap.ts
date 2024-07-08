import { MetadataRoute } from "next";

async function getSitemap() {
  const url = `${process.env.API_BASE_URL}/sitemap`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 1,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { sitemap } = await getSitemap();

  const items = sitemap.map((item: any) => ({
    url: `https://blog.necodeo.com${item.path}`,
    lastModified: new Date(item.updated_at),
    changeFrequency: item.change_frequency,
    priority: item.priority,
  }));

  return items;
}
