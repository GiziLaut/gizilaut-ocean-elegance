// src/pages/blog/[slug].tsx
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

import { blogPosts } from "@/data/blogPosts";
import Layout from "@/components/Layout";

// Domain untuk canonical & og:image (ubah jika pakai non-www)
const SITE_URL = "https://gizilaut.com";

// Format tanggal ke Indonesia
function toDateID(d: string) {
  try {
    return new Date(d).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout title="Blog tidak ditemukan" description="Halaman blog tidak ditemukan">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog tidak ditemukan</h1>
          <p className="text-gray-500">Maaf, blog yang kamu cari tidak tersedia.</p>
        </div>
      </Layout>
    );
  }

  // Meta & SEO
  const title = `${post.title} | Gizi Laut`;
  const description = (post.summary || post.title).slice(0, 155);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  // Pastikan og:image absolut; fallback ke logo jika kosong
  const imageAbs =
    post.image && post.image.length > 0
      ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`)
      : `${SITE_URL}/favicon.ico`;

  // Tanggal publish/modified
  const datePublished = post.date;
  const dateModified = (post as any).updatedAt || (post as any).dateModified || post.date;

  // JSON-LD BlogPosting
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: [imageAbs],
    author: [{ "@type": "Organization", name: "Gizi Laut" }],
    publisher: {
      "@type": "Organization",
      name: "Gizi Laut",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <Layout
      title={title}
      description={description}
      canonical={canonicalUrl}
      keywords={`gizi laut, blog, ${post.category || "akuakultur"}, ${post.slug}`}
    >
      <Helmet>
        {/* Open Graph / Twitter */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageAbs} />
        <meta property="og:site_name" content="Gizi Laut" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageAbs} />

        {/* JSON‑LD */}
        <script type="application/ld+json">{JSON.stringify(blogStructuredData)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <p className="text-sm text-gray-500 mb-6">
          {post.category ? `${post.category} • ` : ""}
          {post.readTime ? `${post.readTime} • ` : ""}
          {toDateID(post.date)}
        </p>

        {post.image && (
          <img
            src={post.image} // UI tetap pakai path relatif dari public
            alt={post.title}
            className="w-full h-auto rounded-xl mb-8 shadow-md"
            loading="eager"
          />
        )}

        <article className="prose lg:prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}
