export async function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://stackria.com/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
