import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const pakanBenurImages = [
    "Algamac.png", "Aqua plus mysis 1.png", "Aqua Plus PL 150 1.png", "Aqua plus zoea1.png", "Artemac No 0.png",
    "Artemia Crystal.png", "Artemia GoldenWest.png", "Artemia Mackay.png", "Artemia Sanders.png",
    "Eguchi BP.png", "Elbazin 1 box.png", "Epac No 0.png", "ET-600 (1 Bag).png", "Frippak 1 CAR.png",
    "Frippak 2 CD.png", "Frippak PL + 150.png", "Frippak PL + 300.png", "Japonicus 0.png", "Lansy MPL FINAL.png",
    "Lansy PL.png", "Lansy ZM.png", "LHF 2.png", "Mackay Spirulina.png", "Micro feed no 3.png",
    "RDN Ultra diet 0.png", "Rotemia.png", "rotofier.png", "Sanocare.png"
  ];

  const pakanIkanImages = [
    "Artemia Crystal.png", "Artemia GoldenWest.png", "Artemia Mackay.png", "Artemia Sanders.png",
    "Eguchi BP.png", "Elbazin 1 box.png", "LHF 2.png", "Otohime A.png", "Otohime B1.png", "Otohime B2.png",
    "Otohime C1.png", "Otohime S1.png", "Otohime S2.png", "Rotemia.png", "rotofier.png", "Sanocare.png"
  ];

  interface ProductCarouselProps {
  images: string[];
  folder: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, folder }) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

  return (
    <div className="relative">
      <div ref={prevRef} className="absolute top-1/2 -translate-y-1/2 -left-12 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
        <ArrowLeft className="text-sky-600 w-6 h-6" />
      </div>
      <div ref={nextRef} className="absolute top-1/2 -translate-y-1/2 -right-12 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
        <ArrowRight className="text-sky-600 w-6 h-6" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={2}
        className="pb-12"
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <img src={`/${folder}/${img}`} alt={img.replace(".png", "")} className="rounded-xl shadow-md w-full h-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

  return (
    <Layout
      title="Our Products - Gizi Laut Premium Aquaculture Feed"
      description="Maksimalkan pertumbuhan, kesehatan, dan keberlanjutan budidaya Anda dengan solusi pakan - pakan berkualitas pilihan kami"
      keywords="pakan benur, pakan benih ikan, shrimp feed, fish feed, aquaculture nutrition, marine feed"
    >
      {/* Hero Section */}
      <section className="bg-gradient-wave py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean">
              Produk Berkualitas Akuakultur
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Maksimalkan pertumbuhan, kesehatan, dan keberlanjutan budidaya Anda dengan solusi pakan - pakan berkualitas pilihan kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="ocean" onClick={() => scrollToSection("pakan-benur")} className="text-lg px-8 py-4">
                Pakan Benur
              </Button>
              <Button size="lg" variant="wave" onClick={() => scrollToSection("pakan-benih-ikan")} className="text-lg px-8 py-4">
                Pakan Benih Ikan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pakan Benur */}
      <section id="pakan-benur" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">Pakan Benur</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium nutrition for shrimp fry (benur) designed for optimal early-stage development
            </p>
          </div>
          <ProductCarousel images={pakanBenurImages} folder="Pakan Benur" />
        </div>
      </section>

      {/* Pakan Benih Ikan */}
      <section id="pakan-benih-ikan" className="py-16 lg:py-24 bg-gradient-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">Pakan Benih Ikan</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-quality fish fry feed formulated for healthy growth and development
            </p>
          </div>
          <ProductCarousel images={pakanIkanImages} folder="Pakan Ikan" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Butuh Solusi Pakan yang Tepat?
            </h2>
            <p className="text-xl text-white/90">
              Hubungi Kami untuk Solusi Nutrisi Khusus sesuai Kebutuhan Akuakultur Anda
            </p>
            <Link to="/contact">
              <Button size="lg" variant="coral" className="text-lg px-8 py-4 mt-4">
                Hubungi WhatsApp Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
