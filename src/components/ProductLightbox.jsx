import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Info, Layers } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function ProductLightbox({ product, onClose, onPrev, onNext }) {

  // Intercept arrow keyboard navigation events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body background scroll when active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-900/95 backdrop-blur-md p-4 sm:p-6 animate-fade-in">

      {/* Upper Close Trigger Action */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream-200 hover:text-white p-2 bg-espresso-800/40 hover:bg-espresso-800/80 rounded-full transition-all z-10"
        aria-label="Close Lightbox"
      >
        <X size={22} />
      </button>

      {/* Navigation Controllers Left/Right */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 text-cream-200 hover:text-white p-3 bg-espresso-800/20 hover:bg-espresso-800/60 rounded-full transition-all"
          aria-label="Previous Creation"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 text-cream-200 hover:text-white p-3 bg-espresso-800/20 hover:bg-espresso-800/60 rounded-full transition-all"
          aria-label="Next Creation"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Main Framework Layout Container */}
      <div className="bg-cream-100 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-clay-200/40 relative">

        {/* Left Side: Premium Photographic Showcase */}
        <div className="md:w-1/2 bg-espresso-900 flex items-center justify-center p-2 sm:p-4 min-h-[300px] md:min-h-[500px] relative overflow-hidden group">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 bg-espresso-900/60 backdrop-blur-sm text-[10px] tracking-widest text-cream-200 uppercase px-3 py-1 rounded-full font-medium">
            Saakis Original Craft
          </span>
        </div>

        {/* Right Side: Editorial Meta Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-cream-50">

          <div className="space-y-5">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600 block mb-1">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-espresso-900 leading-tight">
                {product.title}
              </h2>
            </div>

            <div className="h-px bg-clay-200/60 w-16" />

            <div className="space-y-4">
              <p className="text-charcoal/80 text-sm leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Unique Handmade Spec Details Strip */}
              {product.details && (
                <div className="bg-cream-200/60 border border-clay-200/50 rounded-xl p-3.5 space-y-2 text-xs text-espresso-800/90">
                  <div className="flex items-center gap-2 font-medium text-terracotta-700">
                    <Layers size={13} />
                    <span>Craft Breakdown</span>
                  </div>
                  <p className="leading-relaxed pl-5 text-charcoal/70">{product.details}</p>
                </div>
              )}
            </div>
          </div>

          {/* Context Intent Conversion Core */}
          <div className="mt-8 pt-6 border-t border-clay-200/60 space-y-4">
            <div className="flex items-start gap-2.5 text-xs text-espresso-700/70">
              <Info size={15} className="text-goldAccent-500 shrink-0 mt-0.5" />
              <p className="leading-normal">
                Want this exact configuration or have a modified custom dimension idea? Every piece is made entirely to order.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <WhatsAppButton
                productName={product.title}
                variant="primary"
                label="Order Similar Custom Piece"
              />
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full text-xs font-medium text-espresso-800 hover:text-terracotta-600 hover:bg-clay-100 transition-colors text-center"
              >
                Continue Browsing
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
