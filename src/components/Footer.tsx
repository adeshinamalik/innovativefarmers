
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div>
              <Link to="/" className="flex items-center gap-2 font-display font-semibold text-xl mb-6">
                <div className="w-8 h-8 rounded-full bg-farm-500 flex items-center justify-center text-white">IF</div>
                <span>Farm Forum</span>
              </Link>
              <p className="text-muted-foreground mb-6">
                Connecting farmers, experts, and enthusiasts to share knowledge 
                and promote modern agricultural practices.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-display font-medium text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/forum" className="text-muted-foreground hover:text-foreground transition-colors">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-display font-medium text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">
                    123 Farm Road, Countryside, CA 98765
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    (123) 456-7890
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    info@farmforum.com
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="font-display font-medium text-lg mb-6">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for updates on farming practices, 
                new products, and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Innovative Farm Forum. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
