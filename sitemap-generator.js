import fs from 'fs';

const baseUrl = 'https://rahul-s-portfolio-tau.vercel.app';
const paths = [
  '/',        // Home
  '/gallery', // Gallery
  // add more pages if needed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('✅ sitemap.xml generated successfully!');
