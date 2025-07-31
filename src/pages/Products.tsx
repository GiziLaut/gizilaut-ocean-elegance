import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Products = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout
      title="Our Products - Gizi Laut Premium Aquaculture Feed"
      description="Discover our premium aquaculture feed products including Pakan Benur for shrimp and Pakan Benih Ikan for fish. Quality nutrition for optimal growth."
      keywords="pakan benur, pakan benih ikan, shrimp feed, fish feed, aquaculture nutrition, marine feed"
    >
      {/* Hero Section */}
      <section className="bg-gradient-wave py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean">
              Premium Aquaculture Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our specialized nutrition solutions are designed to maximize growth, health, and sustainability 
              in your aquaculture operations.
            </p>
            
            {/* Product Category Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                variant="ocean" 
                onClick={() => scrollToSection('pakan-benur')}
                className="text-lg px-8 py-4"
              >
                Pakan Benur
              </Button>
              <Button 
                size="lg" 
                variant="wave" 
                onClick={() => scrollToSection('pakan-benih-ikan')}
                className="text-lg px-8 py-4"
              >
                Pakan Benih Ikan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pakan Benur Section */}
      <section id="pakan-benur" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Pakan Benur
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium nutrition for shrimp fry (benur) designed for optimal early-stage development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image Placeholder */}
              <div className="relative">
                <div className="aspect-square bg-gradient-ocean rounded-2xl shadow-deep flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Pakan Benur</h3>
                    <p className="text-white/80">Premium Shrimp Feed</p>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Product Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>High protein content for rapid growth</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Essential amino acids for healthy development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Vitamins and minerals for immunity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Easy digestibility for young shrimp</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Water-stable formula</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Available Sizes</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border shadow-wave">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-primary">1 kg</div>
                        <div className="text-sm text-muted-foreground">Small scale</div>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-wave">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-primary">25 kg</div>
                        <div className="text-sm text-muted-foreground">Commercial</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="lg" variant="ocean" className="w-full sm:w-auto">
                    Get Quote for Pakan Benur
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pakan Benih Ikan Section */}
      <section id="pakan-benih-ikan" className="py-16 lg:py-24 bg-gradient-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Pakan Benih Ikan
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                High-quality fish fry feed formulated for healthy growth and development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Details */}
              <div className="space-y-6 lg:order-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Product Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Balanced nutrition for fish fry</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced with growth promoters</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimal protein-to-fat ratio</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Micro-pelleted for easy consumption</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Disease resistance support</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Available Sizes</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border shadow-wave">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-primary">1 kg</div>
                        <div className="text-sm text-muted-foreground">Small scale</div>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-wave">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-semibold text-primary">25 kg</div>
                        <div className="text-sm text-muted-foreground">Commercial</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="lg" variant="wave" className="w-full sm:w-auto">
                    Get Quote for Pakan Benih Ikan
                  </Button>
                </Link>
              </div>

              {/* Product Image Placeholder */}
              <div className="relative lg:order-1">
                <div className="aspect-square bg-gradient-depth rounded-2xl shadow-deep flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Pakan Benih Ikan</h3>
                    <p className="text-white/80">Premium Fish Feed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-white/90">
              Contact us for custom nutrition solutions tailored to your specific aquaculture needs
            </p>
            <Link to="/contact">
              <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;