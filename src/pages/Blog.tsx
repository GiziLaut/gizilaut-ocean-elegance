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
    date: "2024-7-10",
    summary:
      "Indonesia kembali dipercaya sebagai tuan rumah ajang akbar Asian Pacific Aquaculture (APA) 2024",
    slug: "asian-pacific-aquaculture-2024-indonesia",
    category: "Konferensi",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Panduan Lengkap Budidaya Udang Vaname untuk Pemula",
    date: "2025-10-29",
    summary: 
      "Langkah memulai budidaya udang vaname dari skala kecil: persiapan kolam, sterilisasi, planktonisasi...",
    slug: "panduan-budidaya-udang-vaname-pemula",
    category: "Farming",
    readTime: "6 min read",
  },
  {
    id: 9,
    title: "Uji Bolitas dan PCR: Standar Kualitas Benur Udang",
    date: "2025-10-29",
    summary: 
      "Pentingnya uji bolitas dan PCR untuk memastikan benur udang sehat, bebas patogen, dan siap tebar.",
    slug: "uji-bolitas-pcr-benur-udang",
    category: "Quality Control",
    readTime: "5 min read",
  },
  {
    id: 10,
    title: "Artemia: Dari Danau Asin hingga Hatchery Anda",
    date: "2025-10-29",
    summary: 
      "Mengenal asal-usul Artemia dari danau hipersalin, siklus hidup, manfaat untuk pembenihan.",
    slug: "artemia-danau-asin-hatchery",
    category: "Live Feed",
    readTime: "5 min read",
  },
  {
    id: 11,
    title: "Teknologi RAS: Sistem Air Tertutup",
    date: "2025-11-3",
    summary: 
      "Recirculating Aquaculture System merupakan teknologi modern yang membuat air kolam bisa dipakai ulang terus-menerus.",
    slug: "recirculating-aquaculture-system",
    category: "Technology",
    readTime: "3-4 min read",
  },
  {
    id: 12,
    title: "Teknologi Bioflok: Rahasia Kolam Ikan yang Hemat",
    date: "2025-11-5",
    summary: 
      "Bioflok adalah sistem budidaya ikan modern yang memanfaatkan mikroorganisme.",
    slug: "apa-itu-bioflok",
    category: "Technology",
    readTime: "3-4 min read",
  },
  {
    id: 13,
    title: "Rahasia Telur Ajaib Artemia: Bisa Tidur Bertahun-tahun!",
    date: "2025-11-15",
    summary: 
      "Telur Artemia disebut cyst, yaitu bentuk telur khusus yang punya lapisan luar super keras.",
    slug: "telur-artemia-cyst",
    category: "Live Feed",
    readTime: "2-3 min read",
  },
  {
    id: 14,
    title: "Mengenal Zoea, Mysis, dan PL: Tahapan Penting dalam Hidup Udang",
    date: "2025-11-18",
    summary: 
      "Pernah dengar istilah Zoea, Mysis, atau PL di dunia udang? Istilah-istilah ini adalah sebutan untuk fase larva udang,",
    slug: "fase-benur",
    category: "Growth",
    readTime: "3-4 min read",
  },
  {
    id: 15,
    title: "Rahasia di Balik Ganti Baju Udang: Mengenal Proses Molting",
    date: "2025-12-20",
    summary: 
      "Beginilah cara udang bertumbuh, Proses ini disebut molting atau moulting.",
    slug: "apa-itu-molting",
    category: "Growth",
    readTime: "5 min read",
  },
  {
    id: 16,
    title: "Ketika Udang Harus Kehilangan Mata Demi Telur: Realitas Ablasi",
    date: "2025-12-22",
    summary: 
      "Ablasi adalah metode yang telah dipraktikkan secara rutin di hampir setiap fasilitas pembenihan udang.",
    slug: "apa-itu-ablasi",
    category: "Growth",
    readTime: "5 min read",
  },
  {
    id: 17,
    title: "Artemia Standar vs SEP-Art Artemia",
    date: "2026-5-20",
    summary: 
      "Mengenal perbedaan Artemia standar dan SEP-Art Artemia, termasuk cara kerja, keunggulan, dan brand yang umum digunakan di hatchery.",
    slug: "artemia-standar-vs-separt-artemia",
    category: "Live Feed",
    readTime: "5 min read",
  },
  {
    id: 18,
    title: "Artemia Standar: Contoh Artemia Crystal O.S.I",
    date: "2026-5-30",
    summary: 
      "Penjelasan singkat tentang Artemia standar dengan contoh Artemia Crystal dari O.S.I Amerika sebagai pakan hidup untuk larva udang dan ikan.",
    slug: "artemia-crystal-untuk-benur",
    category: "Live Feed",
    readTime: "5 min read",
  },
  {
    id: 19,
    title: "Artemia SEP-Art: Contoh Artemia EG INVE",
    date: "2026-5-30",
    summary: 
      "Mengenal Artemia SEP-Art dengan contoh Artemia EG INVE sebagai pilihan Artemia berkualitas tinggi dengan pemanenan lebih bersih dan efisien untuk hatchery.",
    slug: "artemia-separt-eg-inve",
    category: "Live Feed",
    readTime: "5 min read",
  },
  {
    id: 20,
    title: "Udang Vaname Diam di Dasar: Normal atau Tanda Masalah?",
    date: "2026-7-3",
    summary: 
      "Udang vaname yang berada di dasar kolam bukan berarti selalu sakit. Perilaku tersebut merupakan bagian dari kebiasaan alaminya.",
    slug: "perilaku-udang-vaname",
    category: "Manajemen Tambak",
    readTime: "5 min read",
  },
  {
    id: 21,
    title: "Kenapa Ikan Tetap Butuh Oksigen?",
    date: "2026-7-15",
    summary: 
      "Ikan memang hidup di dalam air, tetapi tetap membutuhkan oksigen untuk bernapas.",
    slug: "kebutuhan-oksigen-pada-ikan",
    category: "Growth",
    readTime: "5 min read",
  },
  {
    id: 22,
    title: "Hujan Deras dan Ikan Megap: Mengapa Ini Bisa Terjadi?",
    date: "2026-7-20",
    summary: 
      "Hujan deras bukan selalu menjadi penyebab langsung ikan mengalami kematian.",
    slug: "ikan-megap-saat-hujan",
    category: "Growth",
    readTime: "5 min read",
  },
  {
    id: 23,
    title: "Hubungan Antara Ikan dan Kesehatan Jantung",
    date: "2026-7-21",
    summary: 
      "Makan ikan secara rutin bukan jaminan seseorang bebas dari penyakit jantung?",
    slug: "makan-ikan-jaga-kesehatan-jantung",
    category: "Kesehatan & Penyakit",
    readTime: "3-4 min read",
  },
  {
    id: 24,
    title: "Pakan Berjamur: Masalah yang Sering Terlambat Disadari",
    date: "2026-7-23",
    summary: 
      "Pakan yang berjamur bukan hanya menurunkan kualitas nutrisi, tetapi juga berpotensi membawa risiko",
    slug: "pakan-ikan-berjamur",
    category: "Growth",
    readTime: "3-4 min read",
  },
  {
    id: 25,
    title: "Plankton Bloom: Sahabat yang Bisa Berubah Menjadi Ancaman",
    date: "2026-7-24",
    summary: 
      "Plankton merupakan bagian penting dari ekosistem budidaya. Tapi ada hal-hal yang perlu di perhatikan",
    slug: "plankton-bloom",
    category: "Growth",
    readTime: "5 min read",
  },
  {
    id: 26,
    title: "Ikan yang Cocok untuk Aquascape: Bukan Sekadar Cantik, tetapi Juga Serasi",
    date: "2026-7-29",
    summary: 
      "Aquascape yang indah bukan hanya ditentukan oleh desain hardscape atau tanaman yang rimbun",
    slug: "aquascape",
    category: "Growth",
    readTime: "3-4 min read",
  },
  {
    id: 27,
    title: "Cahaya Berlebih di Akuarium: Indah Dilihat, Belum Tentu Baik untuk Ekosistem",
    date: "2026-7-30",
    summary: 
      "Pencahayaan merupakan salah satu faktor penting dalam menjaga keseimbangan akuarium.",
    slug: "pencahayaan-aquarium",
    category: "Growth",
    readTime: "3-4 min read",
  },
  {
    id: 28,
    title: "Cara Mendapatkan Hatching Artemia yang Cepat dan Stabil",
    date: "2026-7-31",
    summary: 
      "Keberhasilan hatching artemia bergantung pada kombinasi berbagai faktor, mulai dari kualitas cyst, suhu, salinitas, pH, aerasi, hingga kualitas air selama proses penetasan.",
    slug: "hatching-artemia",
    category: "Growth",
    readTime: "4-5 min read",
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
      title="Blog - Gizi Laut Tips dan Berita seputar Aquaculture"
      description="Read expert insights, tips, and guides on aquaculture nutrition, fish farming, shrimp farming, and sustainable marine farming practices from Gizi Laut specialists."
      keywords="aquaculture blog, fish farming tips, shrimp farming guide, marine nutrition insights, sustainable aquaculture"
      canonical="https://gizilaut.com/blog/"
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
                  <Link to={`/blog/${post.slug}/`}>
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