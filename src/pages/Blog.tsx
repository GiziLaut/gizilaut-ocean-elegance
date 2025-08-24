import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Blog posts data - easily extensible for future posts
const blogPosts = [
  {
    id: 1,
    title: "Cara Memaksimalkan Pertumbuhan Benur dengan Nutrisi yang Tepat",
    date: "2025-08-01",
    summary:
      "Kenali pentingnya nutrisi di tahap awal budidaya udang untuk hasil panen yang maksimal dan pertumbuhan benur yang lebih cepat.",
    slug: "cara-memaksimalkan-pertumbuhan-benur",
    category: "Budidaya Udang",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Panduan Memberi Pakan Benih Ikan dengan Benar",
    date: "2024-01-10",
    summary:
      "Panduan lengkap memberi pakan benih ikan dengan nutrisi yang tepat di waktu yang tepat untuk pertumbuhan optimal.",
    slug: "panduan-pakan-benih-ikan",
    category: "Budidaya Ikan",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Akuakultur Berkelanjutan: Masa Depan Budidaya Laut",
    date: "2024-01-05",
    summary:
      "Mengenal praktik akuakultur yang ramah lingkungan untuk keberlanjutan jangka panjang.",
    slug: "akuakultur-berkelanjutan",
    category: "Keberlanjutan",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Manajemen Kualitas Air dalam Akuakultur",
    date: "2023-12-28",
    summary:
      "Memahami pentingnya kualitas air dalam kesuksesan budidaya dan bagaimana nutrisi turut berpengaruh.",
    slug: "manajemen-kualitas-air",
    category: "Manajemen Tambak",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "3 Rekomendasi Pakan Benur agar Tumbuh Optimal",
    date: "2025-08-09",
    summary: "Panduan memilih pakan benur terbaik untuk budidaya Benur F1, Benur Windu dan Vannamei Lokal.",
    slug: "rekomendasi-pakan-benur-terbaik",
    category: "Nutrition",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Penyakit Umum dalam Budidaya dan Cara Pencegahannya",
    date: "2023-12-15",
    summary:
      "Kenali penyakit umum pada ikan dan udang serta bagaimana nutrisi dapat membantu mencegahnya.",
    slug: "penyakit-dalam-budidaya",
    category: "Kesehatan & Penyakit",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Indonesia Jadi Tuan Rumah APA 2024",
    date: "2023-12-15",
    summary:
      "Indonesia kembali dipercaya sebagai tuan rumah ajang akbar Asian Pacific Aquaculture (APA) 2024",
    slug: "asian-pacific-aquaculture-2024-indonesia",
    category: "Konferensi",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Penyakit Umum dalam Budidaya dan Cara Pencegahannya",
    date: "2023-12-15",
    summary:
      "Kenali penyakit umum pada ikan dan udang serta bagaimana nutrisi dapat membantu mencegahnya.",
    slug: "penyakit-dalam-budidaya",
    category: "Kesehatan & Penyakit",
    readTime: "9 min read",
  },
  {
    id: 9,
    title: "Penyakit Umum dalam Budidaya dan Cara Pencegahannya",
    date: "2023-12-15",
    summary:
      "Kenali penyakit umum pada ikan dan udang serta bagaimana nutrisi dapat membantu mencegahnya.",
    slug: "penyakit-dalam-budidaya",
    category: "Kesehatan & Penyakit",
    readTime: "9 min read",
  },
  {
    id: 10,
    title: "Gizi laut",
    date: "2024-12-15",
    summary:
      "testing aja dulu.",
    slug: "test2",
    category: "Kesehatan & Penyakit",
    readTime: "1 min read",
  },
];

const categories = [
  "Semua",
  "Budidaya Udang",
  "Budidaya Ikan",
  "Keberlanjutan",
  "Manajemen Tambak",
  "Nutrisi",
  "Kesehatan & Penyakit",
];

useEffect(() => {
if (typeof document === "undefined") return; // guard untuk prerender/SSR
const href = "https://gizilaut.com/blog";
let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
if (!link) {
link = document.createElement("link");
link.rel = "canonical";
document.head.appendChild(link);
}
link.href = href;
}, []);

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout
      title="Blog - Gizi Laut Aquaculture Insights & Tips"
      description="Read expert insights, tips, and guides on aquaculture nutrition, fish farming, shrimp farming, and sustainable marine farming practices from Gizi Laut specialists."
      keywords="aquaculture blog, fish farming tips, shrimp farming guide, marine nutrition insights, sustainable aquaculture"
    >
      {/* Hero Section */}
      <section className="bg-gradient-wave py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean leading-[1.3] pb-2">
              Inovasi & Wawasan Budidaya
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pengetahuan, Tips, dan Praktik Terbaik Budidaya Akuakultur
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Semua" ? "wave" : "ghost"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="h-full flex flex-col justify-between group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean"
              >
                <div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{post.category}</span>
                      <span className="text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>
                  </CardContent>
                </div>
                <CardContent>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="wave" className="w-full group-hover:scale-105 transition-transform">
                      Baca Selengkapnya
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 lg:py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Butuh Saran Pakan Yang Tepat?
            </h2>
            <p className="text-xl text-white/90">
              Kami selalu siap memberi saran personal untuk kebutuhan pakan benur dan ikan Anda, demi kesuksesan budidaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link to="/contact">
                <Button size="lg" variant="ocean" className="text-lg px-8 py-4">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;