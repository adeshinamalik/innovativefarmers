
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Community Forum",
    description: "Connect with farmers and experts to discuss challenges, share solutions, and learn from others' experiences.",
    icon: MessageCircle,
    color: "bg-farm-100 text-farm-600",
  },
  {
    title: "Knowledge Hub",
    description: "Access a comprehensive library of resources, guides, and best practices for sustainable farming.",
    icon: BookOpen,
    color: "bg-farm-100 text-farm-600",
  },
  {
    title: "Expert Network",
    description: "Connect with agricultural specialists, researchers, and successful farmers for personalized advice.",
    icon: Users,
    color: "bg-farm-100 text-farm-600",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="section">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-subtitle">
                  Our platform offers unique features designed to support and enhance your agricultural journey
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={0.1 * index}>
                  <div className="p-6 rounded-lg border border-border bg-card hover-lift">
                    <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Link to="/forum" className="inline-flex items-center text-primary hover:text-primary/80">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        
        <section className="section bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className="section-title text-primary-foreground">Join Our Growing Community</h2>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    Connect with thousands of farmers, experts, and enthusiasts who are 
                    revolutionizing agriculture through knowledge sharing and collaboration.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Access to exclusive resources and tools",
                      "Connect with experienced farmers and mentors",
                      "Participate in virtual workshops and events",
                      "Stay updated with the latest agricultural trends"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button variant="secondary" size="lg" className="text-primary">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn direction="right" className="hidden md:block">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-xl border border-primary-foreground/20">
                    <img 
                      src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Farmers Community" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-6 bg-card text-card-foreground rounded-lg shadow-lg border border-border max-w-xs">
                    <div className="flex items-center mb-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                            style={{ zIndex: 3 - i }}
                          >
                            <img 
                              src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                              alt="User" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <span className="ml-3 text-sm font-medium">Join 500+ active discussions</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      "This platform has transformed how I approach farming. The community support is invaluable!"
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
