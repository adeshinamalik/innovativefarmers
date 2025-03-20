
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FadeIn } from './animations/FadeIn';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yMCAyMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTMyIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px] opacity-50" />
      
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              Grow Better, Together
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with farmers, experts, and enthusiasts to share knowledge, access resources, 
              and revolutionize your agricultural practices.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="text-base">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3} direction="up" distance={30}>
          <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sustainable farming" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 p-4 md:p-6 bg-background border border-border rounded-lg shadow-lg">
              <p className="font-medium text-sm md:text-base">Join <span className="text-primary font-semibold">2,500+</span> farmers already on our platform</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
