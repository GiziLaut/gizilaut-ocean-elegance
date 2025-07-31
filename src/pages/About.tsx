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
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean">
              About Gizi Laut
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner in aquaculture nutrition and sustainable marine farming solutions
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
                <h2 className="text-3xl font-bold text-gradient-ocean">Who We Are</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Gizi Laut is a premier aquaculture nutrition company dedicated to providing high-quality 
                    feed solutions for the marine farming industry. Founded with a passion for sustainable 
                    aquaculture, we specialize in developing and manufacturing premium nutrition products 
                    that promote healthy growth and optimal development in aquatic species.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our company name "Gizi Laut" translates to "Marine Nutrition," reflecting our core mission 
                    to deliver exceptional nutritional solutions specifically designed for the unique needs of 
                    marine life in farming environments.
                  </p>
                </div>
              </div>

              {/* What We Offer */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gradient-ocean">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Premium Feed Products</h3>
                    <p className="text-muted-foreground">
                      We manufacture specialized feeds for different aquaculture species and growth stages, 
                      including our flagship products: Pakan Benur for shrimp fry and Pakan Benih Ikan for fish fry.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Expert Consultation</h3>
                    <p className="text-muted-foreground">
                      Our team of aquaculture nutrition specialists provides expert guidance on feed selection, 
                      feeding strategies, and farm optimization to maximize your productivity.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Every batch of our feed undergoes rigorous quality control testing to ensure consistent 
                      nutritional value and safety for your aquatic livestock.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Sustainable Solutions</h3>
                    <p className="text-muted-foreground">
                      We are committed to environmentally responsible production methods that support 
                      sustainable aquaculture practices and marine ecosystem health.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Advantage */}
              <div className="bg-gradient-wave rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gradient-ocean text-center">Our Competitive Advantage</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Scientific Formulation</h3>
                      <p className="text-muted-foreground">
                        Our feeds are developed using cutting-edge nutritional science and tested formulations 
                        that deliver proven results in real farming conditions.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Rapid Results</h3>
                      <p className="text-muted-foreground">
                        Farmers using our products report faster growth rates, better feed conversion ratios, 
                        and improved overall health in their aquatic livestock.
                      </p>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center shadow-ocean">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Local Expertise</h3>
                      <p className="text-muted-foreground">
                        Deep understanding of Indonesian aquaculture conditions and species-specific 
                        nutritional requirements for optimal local farming success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gradient-ocean">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower aquaculture farmers with premium nutrition solutions that enhance productivity, 
                    promote sustainable farming practices, and contribute to food security while protecting 
                    our marine ecosystems.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gradient-ocean">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the leading aquaculture nutrition company in Indonesia, recognized for innovation, 
                    quality, and our commitment to sustainable marine farming that benefits both farmers and 
                    the environment.
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
              Partner With Us
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of successful aquaculture farmers who trust Gizi Laut for their nutrition needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                  View Our Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Get In Touch
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