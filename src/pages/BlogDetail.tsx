import { useParams } from "react-router-dom"; // Untuk baca slug dari URL
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts"; // Kita ambil data blog dari file tadi
import ReactMarkdown from "react-markdown"; // Untuk menampilkan konten markdown

const BlogDetail = () => {
  const { slug } = useParams(); // Misalnya: "optimizing-shrimp-growth-nutrition"
  const post = blogPosts.find((p) => p.slug === slug); // Cari blog berdasarkan slug

  if (!post) return <div>Blog tidak ditemukan</div>;

  return (
    <Layout title={post.title} description={post.summary}>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-2">{post.category} • {post.readTime}</p>
        <p className="text-sm text-muted-foreground mb-6">{post.date}</p>

        {/* Ini bagian isi blog yang akan ditampilkan */}
        <ReactMarkdown className="prose">
          {post.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export default BlogDetail;