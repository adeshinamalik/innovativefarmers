
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  farmer: string;
  location: string;
  category: string;
  organic?: boolean;
  className?: string;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  farmer,
  location,
  category,
  organic = false,
  className,
}: ProductCardProps) {
  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden border border-border bg-card hover-lift", 
        className
      )}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {organic && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-farm-500 text-white">
              Organic
            </span>
          </div>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
        
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {farmer}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-medium text-lg">${price.toFixed(2)}</span>
          <Button size="sm" variant="outline" className="h-8">
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
}
