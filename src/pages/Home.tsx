import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-ocean text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Solusi Nutrisi
              <span className="block text-white/90">Premium untuk Pembenihan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Kami menyediakan pakan spesialis untuk budidaya udang dan ikan, dengan nutrisi berkualitas
              tinggi yang dirancang khusus untuk mendukung pertumbuhan optimal
              dan keberlanjutan usaha akuakultur di laut Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                  Lihat Produk Kami
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-divider"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
              Produk Premium Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nutrisi Khusus Akuakultur yang Dirancang untuk tumbuh kembang & kesehatan maksimal pembenihan Anda!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
              <CardHeader className="text-center pb-4">
                <img
                  src="/Udang Gizi Laut Transparent.png"
                  alt="Pakan Benur"
                  className="w-21 h-21 object-cover rounded-full mx-auto mb-4 animate-float"
                />
                <CardTitle className="text-2xl text-gradient-ocean">Pakan Benur</CardTitle>
                <CardDescription className="text-base">
                  Nutrisi Terbaik Benur Fondasi Tumbuh Kembang Optimal Sejak Dini.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Nutrisi Formulasi Khusus Untuk Maksimalkan Tumbuh Kembang Larva & Post-Larva Udang!
                </p>
                <Link to="/products#pakan-benur">
                  <Button variant="wave" className="w-full">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
              <CardHeader className="text-center pb-4">
                <img
                  src="/ikan Gizi Laut Transparent.png"
                  alt="Pakan Benih Ikan"
                  className="w-21 h-21 object-cover rounded-full mx-auto mb-4 animate-float"
                />
                <CardTitle className="text-2xl text-gradient-ocean">Pakan Benih Ikan</CardTitle>
                <CardDescription className="text-base">
                  Pakan Benih Ikan Berkualitas serta Rahasia pertumbuhan cepat dan benih sehat!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Solusi Nutrisi Lengkap Untuk tumbuh kembang optimal benih dan juvenil ikan Anda!
                </p>
                <Link to="/products#pakan-benih-ikan">
                  <Button variant="wave" className="w-full">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artikel terbaru (internal links kuat dari homepage) */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-4">Artikel terbaru</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <Link to="/blog/cara-memaksimalkan-pertumbuhan-benur/" className="text-primary hover:underline">
                Cara Memaksimalkan Pertumbuhan Benur dengan Nutrisi yang Tepat
              </Link>
            </li>
            <li>
              <Link to="/blog/rekomendasi-pakan-benur-terbaik/" className="text-primary hover:underline">
                3 Rekomendasi Pakan Benur agar Tumbuh Optimal
              </Link>
            </li>
            <li>
              <Link to="/blog/panduan-pakan-benih-ikan/" className="text-primary hover:underline">
                Panduan Memberi Pakan Benih Ikan dengan Benar
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 overflow-visible scroll-mt-24 bg-gradient-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean leading-[1.3] pb-2">
              Mengapa Gizi Laut?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami Menyediakan solusi nutrisi akuakultur terbaik untuk setiap kebutuhan Anda!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full mx-auto flex items-center justify-center shadow-ocean">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Kualitas Premium</h3>
              <p className="text-muted-foreground">
                Pakan kami merupakan pakan dengan kualitas premium yang di tujukan untuk benur udang dan benih ikan.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full mx-auto flex items-center justify-center shadow-ocean">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Pertumbuhan Cepat</h3>
              <p className="text-muted-foreground">
                Formula teruji ilmiah serta Mendorong pertumbuhan cepat, sehat, dan optimal!
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full mx-auto flex items-center justify-center shadow-ocean">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Berkelanjutan</h3>
              <p className="text-muted-foreground">
                Kami berkomitmen pada pakan dan nutrisi yang ramah lingkungan, demi akuakultur yang lestari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Siap Tingkatkan Kesuksesan Akuakultur Anda?
            </h2>
            <p className="text-xl text-white/90">
              Ingin tahu lebih banyak tentang solusi nutrisi premium kami? Yuk, segera hubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                  Hubungi Kami
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Lihat Produk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
