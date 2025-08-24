import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// Domain kanonis (tanpa www)
const SITE_URL = "https://gizilaut.com";

// Util: tanggal YYYY-MM-DD
function todayISO() {
const d = new Date();
return d.toISOString().slice(0, 10);
}

// Ambil {slug, date} dari src/data/blogPosts.ts
function extractPairs(source) {
// slug: "nilai" atau 'nilai'
const slugRegex = /slug:\s*"'["']/g;
// date: "YYYY-MM-DD" atau 'YYYY-MM-DD'
const dateRegex = /date:\s*"'["']/g;

const slugs = [];
const dates = [];
let m;

while ((m = slugRegex.exec(source)) !== null) {
slugs.push(m); // ambil grup 1 = isi di dalam kutip
}
while ((m = dateRegex.exec(source)) !== null) {
dates.push(m); // ambil grup 1 = tanggal
}

const fallback = todayISO();
const pairs = [];
for (let i = 0; i < slugs.length; i++) {
const slug = slugs[i];
const date = dates[i] || fallback;
pairs.push({ slug, date });
}
return pairs;
}

// Bangun XML (tanpa template literal kompleks)
function buildXml(urls) {
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const u of urls) {
xml += ' <url>\n';
xml += ' <loc>' + u.loc + '</loc>\n';
if (u.lastmod) xml += ' <lastmod>' + u.lastmod + '</lastmod>\n';
xml += ' </url>\n';
}
xml += '</urlset>\n';
return xml;
}

function main() {
const blogPostsPath = path.join(projectRoot, "src", "data", "blogPosts.ts");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const src = fs.readFileSync(blogPostsPath, "utf-8");
const pairs = extractPairs(src);

// Susun URL dasar
const urls = [
{ loc: SITE_URL + "/", lastmod: todayISO() },
{ loc: SITE_URL + "/products", lastmod: todayISO() },
{ loc: SITE_URL + "/about", lastmod: todayISO() },
{ loc: SITE_URL + "/blog", lastmod: todayISO() },
{ loc: SITE_URL + "/contact", lastmod: todayISO() }
];

// Tambahkan artikel blog
for (let i = 0; i < pairs.length; i++) {
const p = pairs[i];
urls.push({ loc: joinUrl(SITE_URL, "blog/" + p.slug), lastmod: toISODate(p.date) });
}

const xml = buildXml(urls);

if (!fs.existsSync(publicDir)) {
fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(sitemapPath, xml, "utf-8");
console.log("[sitemap] generated:", sitemapPath, "with", urls.length, "URLs");
}

function toISODate(d) {
try {
const x = new Date(d);
return isNaN(x.getTime()) ? todayISO() : x.toISOString().slice(0, 10);
} catch {
return todayISO();
}
}

function joinUrl(base, p) {
if (p.startsWith("/")) return base + p;
return base + "/" + p;
}

main();