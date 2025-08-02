import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout
      title="About Us - Gizi Laut Aquaculture Nutrition Specialists"
      description="Learn about Gizi Laut, your trusted partner in aquaculture nutrition. We provide premium feed solutions for sustainable marine farming with expert knowledge and quality products."
      keywords="about gizi laut, aquaculture nutrition company, marine farming specialists, fish feed company, shrimp feed experts"
    >
      {/* Hero Section */}
      <section className="bg-gradient-wave py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean leading-[1.3] pb-2">
              Tentang Gizi Laut
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mitra Andalan Anda dalam Menyediakan Solusi Pakan Akuakultur dan Budidaya Laut Berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Who We Are */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gradient-ocean">Gizi Laut hadir sebagai teman seperjuangan para hatchery di Indonesia.</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Kami percaya bahwa pertumbuhan benur dan ikan yang sehat dimulai dari satu hal paling dasar: gizi yang tepat.
                    Dengan menyediakan pakan benur dan pakan ikan berkualitas tinggi dan harga yang bersaing, 
                    kami ingin membantu Anda menghasilkan udang dan ikan terbaik—dari awal yang kecil hingga panen yang besar.  
                  </p>
                  <p className="text-lg leading-relaxed">
                    Produk kami lengkap, pelayanan kami tanggap, dan visi kami jelas:
                    menjadi penyedia pakan benur dan ikan terbesar di Indonesia.
                    Di tengah industri yang menuntut ketepatan dan ketahanan, Gizi Laut bukan sekadar penjual—kami rekan seperjalanan Anda. 
                    Karena kami pun sedang bertumbuh, sama seperti Anda.
                  </p>
                </div>
              </div>

              {/* What We Offer */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gradient-ocean">Penawaran Kami</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Produk Pakan Premium</h3>
                    <p className="text-muted-foreground">
                      Kami menyediakan berbagai pilihan pakan premium untuk beragam spesies dan fase pertumbuhan akuakultur, 
                      termasuk jajaran produk unggulan kami: Pakan Benur untuk benur udang dan Pakan Benih Ikan untuk benih ikan.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Saran Pakan</h3>
                    <p className="text-muted-foreground">
                      Tim Gizi Laut kami siap memberikan saran personal terkait pemilihan pakan yang tepat dan strategi pemberiannya, 
                      yang dapat disesuaikan dengan ukuran benih ikan serta benur yang sedang Anda budidayakan, sesuai kebutuhan Anda.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Kualitas Pakan</h3>
                    <p className="text-muted-foreground">
                      EKami sangat percaya pada kualitas pakan yang kami jual. Setiap jenis pakan telah teruji ketat di pembenihan seluruh Indonesia, 
                      memastikan nilai gizi dan keamanan optimal.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Kemudahan Akses & Pilihan Pakan Lengkap</h3>
                    <p className="text-muted-foreground">
                      kami menyediakan berbagai jenis pakan dari berbagai merek terkemuka, memudahkan anda untuk menemukan semua 
                      kebutuhan pakan benur dan benih ikan di satu tempat baik online atau offline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Advantage */}
              <div className="bg-gradient-wave rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gradient-ocean text-center">Daya Saing Kami</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Formula Pakan</h3>
                      <p className="text-muted-foreground">
                        Kami memilih pakan yang dikembangkan dengan ilmu nutrisi akuakultur terkini dan formulasi teruji, 
                        yang memberikan hasil nyata di kondisi budidaya riil.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Hasil Baik</h3>
                      <p className="text-muted-foreground">
                        Frekuensi pemesanan kembali dari pelanggan kami adalah bukti kecocokan dan efektivitas pakan yang kami sediakan. 
                        Anda bebas memilih pakan yang paling sesuai dengan kebutuhan budidaya anda.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Keahlian Lokal</h3>
                      <p className="text-muted-foreground">
                        Pemahaman kami tentang kondisi akuakultur Indonesia dan kebutuhan nutrisi spesifik spesies, 
                        mendukung kesuksesan budidaya lokal yang optimal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gradient-ocean">Misi Kami</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Memberdayakan setiap pembudidaya akuakultur, dari skala kecil hingga besar, 
                    dengan menyediakan akses mudah terhadap solusi nutrisi pakan premium yang kompetitif, 
                    untuk meningkatkan produktivitas budidaya serta mendorong praktik berkelanjutan.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gradient-ocean">Visi Kami</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Menjadi distributor nutrisi akuakultur terdepan dan terbesar di Indonesia, 
                    yang menjadi jembatan bagi setiap pembudidaya untuk mendapatkan pakan berkualitas dengan harga terbaik, 
                    demi keberlanjutan dan kesuksesan budidaya nasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Siap untuk Mulai?
            </h2>
            <p className="text-xl text-white/90">
              Hubungi kami sekarang untuk informasi produk, harga dan pengiriman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                  Lihat Produk
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  WhatsApp Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;