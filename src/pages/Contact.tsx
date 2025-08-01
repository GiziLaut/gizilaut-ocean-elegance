import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout
      title="Contact Us - Gizi Laut Customer Support & Sales"
      description="Get in touch with Gizi Laut for aquaculture feed inquiries, product information, and expert consultation. Available on WhatsApp, Shopee, Tokopedia, and email."
      keywords="contact gizi laut, aquaculture feed inquiry, fish feed sales, shrimp feed contact, customer support"
    >
      {/* Hero Section */}
      <section className="bg-gradient-wave py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient-ocean">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our aquaculture nutrition experts for product inquiries, 
              consultations, and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred method to connect with us for fast and reliable customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* WhatsApp */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-green-600">WhatsApp</CardTitle>
                  <CardDescription>
                    Quick messaging and voice calls
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Get instant support and product information
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=6282329653189&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    +62 823-2965-3189
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-blue-600">Email</CardTitle>
                  <CardDescription>
                    Professional inquiries and detailed questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Send us detailed product inquiries
                  </p>
                  <a href="mailto:info@gizilaut.com?subject=Product%20Inquiry&body=Hello%20Gizi%20Laut%20team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20aquaculture%20products.%0A%0APlease%20provide%20information%20about%3A%0A-%20Product%20catalog%0A-%20Pricing%0A-%20Availability%0A%0AThank%20you%21">
                    <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Email
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    gizilaut.id@gmail.com
                  </p>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <img src="/Instagram_icon" alt="Instagram" className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-pink-600">Shopee</CardTitle>
                  <CardDescription>
                    Social media account
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Kunjungi dan follow social media kami
                  </p>
                  <a 
                    href="https://www.instagram.com/gizilaut.id?igsh=cmkxZ3VtcWt2NG55" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-pink-500 text-pink-600 hover:bg-pink-50">
                      <img src="/Instagram_icon" alt="Instagram" className="w-4 h-4 mr-2" />
                      Visit Account
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Official Gizi Laut Account
                  </p>
                </CardContent>
              </Card>

              {/* Tiktok */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-black-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <img src="/tiktok_icon.png" alt="TikTok" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-xl text-black-700">TikTok</CardTitle>
                  <CardDescription>
                    Social media account
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Kunjungi dan follow social media kami
                  </p>
                  <a 
                    href="https://www.tiktok.com/@gizilaut.id?_t=ZS-8yVhEKoWGk3&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-black-600 text-blck-700 hover:bg-gray-100">
                      <img src="/tiktok_icon.png" alt="TikTok" className="w-6 h-6 mr-4" />
                      Visit Account
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Official Gizi Laut Store
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       {/* Market Place */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Jelajahi Toko Online Kami Sekarang!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hubungi kami melalui platform online shop Gizi Laut pilihan Anda, untuk layanan pelanggan cepat dan terpercaya!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Shopee */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <img src="/shopee_icon.png" alt="Shopee" className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-orange-600">Shopee</CardTitle>
                  <CardDescription>
                    Browse and purchase online
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Shop our products with secure payment
                  </p>
                  <a 
                    href="https://shopee.co.id/gizilaut" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                      <img src="/shopee_icon.png" alt="Shopee" className="w-4 h-4 mr-2" />
                      Visit Store
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Official Gizi Laut Store
                  </p>
                </CardContent>
              </Card>

              {/* Tokopedia */}
              <Card className="group hover:shadow-deep transition-all duration-300 border-0 shadow-ocean">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-wave">
                    <img src="/tokopedia_icon.png" alt="Tokopedia" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-xl text-green-700">Tokopedia</CardTitle>
                  <CardDescription>
                    Trusted marketplace platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Shop with buyer protection guarantee
                  </p>
                  <a 
                    href="https://tk.tokopedia.com/ZSSBR3dUT/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                      <img src="/tokopedia_icon.png" alt="Tokopedia" className="w-6 h-6 mr-4" />
                      Visit Store
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Official Gizi Laut Store
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Response Time */}
      <section className="py-16 lg:py-24 bg-gradient-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Business Information
              </h2>
              <p className="text-lg text-muted-foreground">
                Important details about our service hours and response times
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-ocean">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      *All times are in Western Indonesia Time (WIB)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-ocean">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">WhatsApp</span>
                    <span className="font-medium">Within 1 hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Marketplace</span>
                    <span className="font-medium">Within 4 hours</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      *Response times during business hours only
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-ocean">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common inquiries
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border shadow-wave">
                <CardHeader>
                  <CardTitle className="text-lg">What are your minimum order quantities?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer flexible ordering options starting from 1kg for sample orders. 
                    For commercial quantities, we recommend 25kg or more for better pricing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border shadow-wave">
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide delivery services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide delivery throughout Indonesia. Shipping costs and times 
                    vary by location. Contact us for specific delivery quotes to your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="border shadow-wave">
                <CardHeader>
                  <CardTitle className="text-lg">Can I get technical support for feeding programs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! Our aquaculture specialists provide free consultation on feeding 
                    programs, growth optimization, and farm management best practices.
                  </p>
                </CardContent>
              </Card>
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
              <a 
                href="https://api.whatsapp.com/send/?phone=6282329653189&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="coral" className="text-lg px-8 py-4">
                  WhatsApp Sekarang
                </Button>
              </a>
              <a href="mailto:gizilaut.id@gmail.com">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;