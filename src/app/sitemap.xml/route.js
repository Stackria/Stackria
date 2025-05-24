export async function GET() {
  const baseUrl = 'https://stackria.com';

  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/services/custom-software-development',
    '/services/mvp-development',
    '/services/mern-development',
    '/services/e-commerce-development',
    '/services/seo',
    '/services/web-care',
  ];

  const urls = staticPaths
    .map((path) => {
      return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
