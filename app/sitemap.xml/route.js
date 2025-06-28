// app/sitemap.xml/route.js

import { getProjectSlugs } from '@/lib/get-project-slugs';
import { getMDXPage } from '@/lib/get-mdx-page';

export async function GET() {
  // Fetch all slugs from filesystem
  const slugs = getProjectSlugs();

  // Build URLs for projects
  const projectUrls = [];

  for (const slug of slugs) {
    const { frontmatter } = await getMDXPage({
      type: 'projects',
      slug,
    });

    // Optionally skip drafts or "In Progress" projects
    if (frontmatter.status === 'Draft') {
      continue;
    }

    projectUrls.push({
      loc: `https://www.leepaulisonjr.com/projects/${slug}`,
      lastmod: new Date(frontmatter.date).toISOString().split('T')[0],
    });
  }

  // Add static pages
  const staticUrls = [
    {
      loc: 'https://www.leepaulisonjr.com/',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.leepaulisonjr.com/about',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.leepaulisonjr.com/contact',
      lastmod: new Date().toISOString(),
    },
  ];

  const allUrls = [...staticUrls, ...projectUrls];

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
