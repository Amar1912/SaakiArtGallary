import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Grid, LayoutGrid, Eye } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductLightbox from '../components/ProductLightbox';

export default function Creations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Keep state sync with url category filters
  useEffect(() => {
    const categoryInUrl = searchParams.get('category');
    if (categoryInUrl) {
      setActiveCategory(categoryInUrl);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    if (key === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', key);
    }
    setSearchParams(searchParams);
  };

  // Filter products based on state
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categoryKey === activeCategory);

  // Lightbox index tracking controllers
  const handlePrevProduct = () => {
    const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
    if (currentIndex > 0) {
      setSelectedProduct(products[currentIndex - 1]);
    } else {
      setSelectedProduct(products[products.length - 1]); // Loop back
    }
  };

  const handleNextProduct = () => {
    const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
    if (currentIndex < products.length - 1) {
      setSelectedProduct(products[currentIndex + 1]);
    } else {
      setSelectedProduct(products[0]); // Loop front
    }
  };

  return (
    <div className="pt-28 pb-24 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Heading Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-fade-up">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600 block">
             Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-espresso-900 leading-tight">
             Our Creations
          </h1>
          <div className="h-px bg-clay-200 w-16 mx-auto my-4" />
          <p className="text-charcoal/70 font-sans leading-relaxed">
             Every piece begins with an idea and ends as something uniquely yours. Browse our genuine portfolio of handcrafted commissions.
          </p>
        </div>

        {/* Dynamic Category Filter Pill Bars */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 animate-fade-in">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-espresso-800 text-cream-50 shadow-md scale-105'
                    : 'bg-cream-100 text-espresso-700/80 border border-clay-200/50 hover:bg-cream-200'
                }`}
              >
                {cat.label === "All Creations" ? "All Works" : cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Masonry-Style Portfolio Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className="paper-card rounded-2xl overflow-hidden cursor-pointer group img-zoom-parent"
            >
              {/* Product Frame Showcase */}
              <div className="aspect-[4/5] bg-espresso-900 overflow-hidden relative">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover img-zoom-child transition-transform duration-700"
                />

                {/* Micro hover interaction panel overlay */}
                <div className="absolute inset-0 bg-espresso-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <div className="p-3 bg-cream-50/90 backdrop-blur-sm rounded-full shadow-lg text-espresso-900 scale-70 group-hover:scale-100 transition-transform duration-300">
                     <Eye size={20} />
                  </div>
                </div>
              </div>

              {/* Text Descriptions Details Meta */}
              <div className="p-6 space-y-2 bg-cream-50">
                <span className="text-[10px] font-bold tracking-widest text-terracotta-600 uppercase block">
                  {prod.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-espresso-900 leading-tight group-hover:text-terracotta-600 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-charcoal/60 leading-relaxed font-sans line-clamp-2 pt-1">
                  {prod.description}
                </p>

                <div className="flex items-center text-xs font-semibold text-espresso-900 group-hover:text-terracotta-600 transition-colors pt-3">
                   View Masterpiece Details →
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Handle Empty State (Safety Check) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-cream-100 rounded-3xl border border-dashed border-clay-200 max-w-md mx-auto">
             <p className="text-espresso-800 font-serif italic text-lg">No creations found in this tier yet.</p>
             <button onClick={() => handleCategoryChange('all')} className="mt-4 text-xs font-bold text-terracotta-600 uppercase tracking-widest hover:underline">
               Reset Filter
             </button>
          </div>
        )}

      </div>

      {/* Embedded Dynamic Interactive Lightbox Component */}
      {selectedProduct && (
        <ProductLightbox
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onPrev={handlePrevProduct}
          onNext={handleNextProduct}
        />
      )}

    </div>
  );
}
