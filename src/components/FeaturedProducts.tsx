
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { FadeIn } from './animations/FadeIn';

// Sample products data
const products = [
  {
    id: '1',
    title: 'Organic Farm-Fresh Eggs',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Green Valley Farm',
    location: 'California',
    category: 'Dairy & Eggs',
    organic: true
  },
  {
    id: '2',
    title: 'Sweet Heirloom Tomatoes',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1594057687713-5fd14eed1c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Sunshine Acres',
    location: 'Florida',
    category: 'Vegetables',
    organic: true
  },
  {
    id: '3',
    title: 'Fresh Local Honey',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Wildflower Apiaries',
    location: 'Vermont',
    category: 'Honey & Preserves',
    organic: true
  },
  {
    id: '4',
    title: 'Premium Grass-Fed Beef',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Highland Pastures',
    location: 'Montana',
    category: 'Meat',
    organic: false
  }
];

export function FeaturedProducts() {
  return (
    <section className="section bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Discover fresh, sustainably grown products from local farmers</p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="hidden md:flex">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={0.1 * index}>
              <ProductCard {...product} />
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center md:hidden">
            <Link to="/products">
              <Button variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
