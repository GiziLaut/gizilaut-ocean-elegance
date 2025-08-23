import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const SITE_URL = "https://www.gizilaut.com"; // ubah jika pakai non-www

function extractPairs(source) {
const slugRegex = /slug:\s*["'](.*?)["']/g;
const dateRegex = /date:\s*["'](\d{4}-\d{2}-\d{2})["']/g;
const slugs = [];
const dates = [];
let m;
while ((m = slugRegex.exec(source)) !== null) slugs.push(m);
while ((m = dateRegex.exec(source)) !== null) dates.push(m);
return slugs.map(function (s, i) {
return { slug: s, date: dates[i] || dates || "2024-01-01" };
});
}

function todayISO() {
return new Date().toISOString().slice(0, 10);
}

function main() {
const blogPostsPath = path.join(projectRoot, "src", "data", "blogPosts.ts");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const src = fs.readFileSync(blogPostsPath, "utf-8");
const pairs = extractPairs(src);

const urls = [
{ loc: SITE_URL + "/", lastmod: todayISO() },
{ loc: SITE_URL + "/products", lastmod: todayISO() },
{ loc: SITE_URL + "/about", lastmod: todayISO() },
{ loc: SITE_URL + "/blog", lastmod: todayISO() },
{ loc: SITE_URL + "/contact", lastmod: todayISO() }
].concat(
pairs.map(function (p) {
return { loc: SITE_URL + "/blog/" + p.slug, lastmod: p.date };
})
);

// Bangun XML tanpa template literal
let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
xml += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\\\">\\n";
xml += urls
.map(function (u) {
return (
" <url>\n" +
" <loc>" + u.loc + "</loc>\n" +
" <lastmod>" + u.lastmod + "</lastmod>\n" +
" </url>"
);
})
.join("\n");
xml += "\n</urlset>\n";

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(sitemapPath, xml);
console.log("[sitemap] generated:", sitemapPath);
}
main();

