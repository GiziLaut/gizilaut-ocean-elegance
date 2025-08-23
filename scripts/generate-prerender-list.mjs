import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const staticRoutes = ["/", "/products", "/about", "/blog", "/contact"];

// Extract slug tanpa regex rumit
function extractSlugsFromBlogPosts(source) {
const normalized = source.replace(/[\u00A0\u2007\u202F]/g, " ");
const lines = normalized.split(/\r?\n/);
const slugs = new Set();

for (let raw of lines) {
if (raw.indexOf("slug") === -1) continue;

const afterSlug = raw.split("slug")[1] || "";
const afterColon = afterSlug.split(":")[1] || "";

let v = (afterColon || "").trim();
if (v.endsWith(",")) v = v.slice(0, -1).trim();
if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
  v = v.slice(1, -1).trim();
}

if (v && v.indexOf("slug:") === -1) slugs.add(v);
}

return Array.from(slugs);
}

function main() {
const blogPostsPath = path.join(projectRoot, "src", "data", "blogPosts.ts");
const pkgPath = path.join(projectRoot, "package.json");

const blogSource = fs.readFileSync(blogPostsPath, "utf-8");
const slugs = extractSlugsFromBlogPosts(blogSource);

const include = staticRoutes.concat(slugs.map((s) => "/blog/" + s));

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
if (!pkg.reactSnap) pkg.reactSnap = {};
pkg.reactSnap.source = pkg.reactSnap.source || "dist";
pkg.reactSnap.publicPath = pkg.reactSnap.publicPath || "/";
pkg.reactSnap.inlineCss = pkg.reactSnap.inlineCss ?? true;
pkg.reactSnap.puppeteerArgs = pkg.reactSnap.puppeteerArgs || ["--no-sandbox"];
pkg.reactSnap.include = include;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log("[react-snap] include routes:", include);
}

main();