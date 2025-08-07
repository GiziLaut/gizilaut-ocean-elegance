import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout title="Blog tidak ditemukan">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog tidak ditemukan</h1>
          <p className="text-gray-500">
            Maaf, blog yang kamu cari tidak tersedia.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={post.title} description={post.summary}>
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        {/* Meta Info */}
        <p className="text-sm text-muted-foreground mb-6">
          {post.category} • {post.readTime} • {post.date}
        </p>

        {/* Optional Featured Image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-xl mb-8 shadow-md"
          />
        )}

        {/* Blog Content */}
        <article className="prose prose-blue lg:prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
};

export default BlogDetail;