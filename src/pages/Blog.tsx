import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

// Blog posts data - easily extensible for future posts
const blogPosts = [
  {
    id: 1,
    title: "Optimizing Shrimp Growth with Proper Nutrition",
    date: "2024-01-15",
    summary: "Learn how proper nutrition during the early stages can dramatically improve your shrimp farming success rates and overall yield.",
    slug: "optimizing-shrimp-growth-nutrition",
    category: "Shrimp Farming",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Fish Fry Feeding Guidelines: Best Practices",
    date: "2024-01-10",
    summary: "Comprehensive guide to feeding fish fry with the right nutrients at the right time for maximum growth and survival rates.",
    slug: "fish-fry-feeding-guidelines",
    category: "Fish Farming",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Sustainable Aquaculture: The Future of Marine Farming",
    date: "2024-01-05",
    summary: "Explore sustainable practices in aquaculture that benefit both farmers and the environment while maintaining profitability.",
    slug: "sustainable-aquaculture-future",
    category: "Sustainability",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Water Quality Management in Aquaculture",
    date: "2023-12-28",
    summary: "Understanding the critical role of water quality in aquaculture success and how nutrition affects the aquatic environment.",
    slug: "water-quality-management-aquaculture",
    category: "Farm Management",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Choosing the Right Feed for Different Growth Stages",
    date: "2023-12-20",
    summary: "A detailed guide on selecting appropriate feed formulations for various life stages of aquatic species.",
    slug: "choosing-right-feed-growth-stages",
    category: "Nutrition",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Common Diseases in Aquaculture and Prevention",
    date: "2023-12-15",
    summary: "Learn about common diseases affecting farmed fish and shrimp, and how proper nutrition can boost immunity and prevent outbreaks.",
    slug: "common-diseases-aquaculture-prevention",
    category: "Health & Disease",
    readTime: "9 min read"
  }
];

const categories = ["All", "Shrimp Farming", "Fish Farming", "Sustainability", "Farm Management", "Nutrition", "Health & Disease"];

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
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

      {/* Category Filter - For future implementation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "wave" : "ghost"}
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
              <Card key={post.id} className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
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
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="wave" className="w-full group-hover:scale-105 transition-transform">
                      Read More
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