import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string; // ← baru: dukung canonical
}

const Layout = ({
  children,
  title = "Gizi Laut - Premium Aquaculture Nutrition Solutions",
  description = "Gizi Laut provides premium aquaculture nutrition solutions including specialized feed for shrimp and fish farming. Quality nutrition for sustainable marine farming.",
  keywords = "aquaculture, fish feed, shrimp feed, marine nutrition, pakan ikan, pakan udang, gizi laut",
  canonical, // ← baru
}: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Gizi Laut" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gizi Laut" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gizi Laut",
            description: description,
            url: "https://gizilaut.com",
            logo: "https://gizilaut.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-823-2965-3189",
              contactType: "Customer Service",
              availableLanguage: ["Indonesian", "English"],
            },
            sameAs: ["https://wa.me/6281234567890"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
