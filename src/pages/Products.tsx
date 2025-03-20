
import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X } from "lucide-react";

// Sample products data (expanded)
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
  },
  {
    id: '5',
    title: 'Stone-Ground Whole Wheat Flour',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1604329756574-bda1f2cada5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Heritage Mill',
    location: 'Kansas',
    category: 'Grains & Flour',
    organic: true
  },
  {
    id: '6',
    title: 'Seasonal Mixed Berries',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1563746924237-f81801eebce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Berry Good Farm',
    location: 'Oregon',
    category: 'Fruits',
    organic: true
  },
  {
    id: '7',
    title: 'Artisanal Goat Cheese',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Mountain Meadow Dairy',
    location: 'Vermont',
    category: 'Dairy & Eggs',
    organic: false
  },
  {
    id: '8',
    title: 'Cold-Pressed Olive Oil',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    farmer: 'Mediterranean Grove',
    location: 'California',
    category: 'Oils & Vinegars',
    organic: true
  }
];

const categories = [
  'All Categories',
  'Vegetables',
  'Fruits',
  'Dairy & Eggs',
  'Meat',
  'Grains & Flour',
  'Honey & Preserves',
  'Oils & Vinegars'
];

const locations = [
  'All Locations',
  'California',
  'Florida',
  'Vermont',
  'Montana',
  'Kansas',
  'Oregon'
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [organicOnly, setOrganicOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    // Search term filter
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price range filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Category filter
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    
    // Location filter
    const matchesLocation = selectedLocation === 'All Locations' || product.location === selectedLocation;
    
    // Organic filter
    const matchesOrganic = organicOnly ? product.organic : true;
    
    return matchesSearch && matchesPrice && matchesCategory && matchesLocation && matchesOrganic;
  });
  
  const resetFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 20]);
    setSelectedCategory('All Categories');
    setSelectedLocation('All Locations');
    setOrganicOnly(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <FadeIn>
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-display font-medium mb-2">Farm Products</h1>
              <p className="text-muted-foreground">
                Discover fresh, sustainably grown products from local farmers across the country
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products, farmers..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:hidden">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters {showFilters ? 'Hide' : 'Show'}
                </Button>
              </div>
            </div>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <FadeIn delay={0.1} className="hidden md:block w-full md:w-64 space-y-6">
              <div className="bg-card rounded-lg border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <Label className="mb-2 block">Price Range</Label>
                    <Slider
                      defaultValue={[0, 20]}
                      max={20}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Category</Label>
                    <select
                      className="input-field"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Location</Label>
                    <select
                      className="input-field"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="organic" 
                      checked={organicOnly} 
                      onCheckedChange={() => setOrganicOnly(!organicOnly)} 
                    />
                    <Label htmlFor="organic">Organic products only</Label>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Filters - Mobile */}
            {showFilters && (
              <FadeIn className="md:hidden w-full space-y-4">
                <div className="bg-card rounded-lg border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Filters</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Price Range</Label>
                      <Slider
                        defaultValue={[0, 20]}
                        max={20}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Category</Label>
                      <select
                        className="input-field"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Location</Label>
                      <select
                        className="input-field"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="organic-mobile" 
                        checked={organicOnly} 
                        onCheckedChange={() => setOrganicOnly(!organicOnly)} 
                      />
                      <Label htmlFor="organic-mobile">Organic products only</Label>
                    </div>
                    
                    <Button className="w-full" onClick={() => setShowFilters(false)}>
                      Apply Filters
                    </Button>
                    <Button variant="outline" className="w-full" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </FadeIn>
            )}
            
            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <FadeIn key={product.id} delay={0.05 * index}>
                      <ProductCard {...product} />
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <FadeIn>
                  <div className="text-center py-16 bg-muted rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search term.
                    </p>
                    <Button variant="outline" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
