import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Clock, Send, ChevronRight, Share2 } from 'lucide-react';

export default function Contact() {

  const handleCall = () => {
    window.open('tel:+918999533278', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918999533278?text=Hi%20Saakis%20Craft%20Gallery,%20I%20would%20like%20to%20inquire%20about%20your%20customized%20handmade%20creations.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/saakis_craft_gallery', '_blank');
  };

  return (
    <div className="pt-28 pb-24 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Heading Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-fade-up">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600 block">
             Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-espresso-900 leading-tight">
             Let's Create Something Beautiful.
          </h1>
          <div className="h-px bg-clay-200 w-16 mx-auto my-4" />
          <p className="text-charcoal/70 font-sans leading-relaxed">
             Whether you have a fully-formed vision or just a starting thought, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Detailed Studio Contact Cards Meta Information */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">

             {/* Main Boutique Card Layout Block */}
             <div className="bg-espresso-900 text-cream-50 p-8 sm:p-10 rounded-[40px] shadow-2xl space-y-10 border border-espresso-800">
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-espresso-800 rounded-2xl text-goldAccent-400">
                         <MapPin size={24} />
                      </div>
                      <div className="space-y-2">
                         <h3 className="font-serif text-xl font-bold">Saakis Craft Gallery</h3>
                         <p className="text-sm text-cream-100/60 leading-relaxed font-sans">
                            Ankita Residency, Gangapur Road, near Yogesh Electricals, Shanker Nagar, Savarkar Nagar, Nashik, Maharashtra 422013
                         </p>
                         <a
                          href="https://maps.google.com/?q=Saakis+Craft+Gallery+Ankita+Residency+Nashik"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-goldAccent-400 text-[10px] font-bold tracking-widest uppercase hover:underline pt-1"
                         >
                            Open in Google Maps <ChevronRight size={12} />
                         </a>
                      </div>
                   </div>

                   <div className="h-px bg-espresso-800" />

                   <div className="flex items-center gap-4">
                      <div className="p-3 bg-espresso-800 rounded-2xl text-terracotta-400">
                         <Phone size={24} />
                      </div>
                      <div className="space-y-1">
                         <h4 className="text-[10px] tracking-widest uppercase font-bold text-cream-200/40">Call / WhatsApp</h4>
                         <p className="text-xl font-serif font-bold tracking-wide">08999533278</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="p-3 bg-espresso-800 rounded-2xl text-goldAccent-400">
                         <Instagram size={24} />
                      </div>
                      <div className="space-y-1">
                         <h4 className="text-[10px] tracking-widest uppercase font-bold text-cream-200/40">Instagram Profile</h4>
                         <p className="text-xl font-serif font-bold tracking-wide">@saakis_craft_gallery</p>
                      </div>
                   </div>
                </div>

                <div className="pt-4 flex gap-3 flex-wrap">
                   <button
                    onClick={handleCall}
                    className="flex-1 min-w-[140px] bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-6 py-4 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                   >
                      <Phone size={16} /> Call Us
                   </button>
                   <button
                    onClick={handleWhatsApp}
                    className="flex-1 min-w-[140px] bg-espresso-800 hover:bg-espresso-700 text-cream-50 px-6 py-4 rounded-2xl text-xs font-bold tracking-widest uppercase border border-espresso-700 transition-all flex items-center justify-center gap-2"
                   >
                      <MessageCircle size={16} fill="currentColor" /> WhatsApp
                   </button>
                </div>
             </div>

             {/* Dynamic Studio Operation Hours Information Segment */}
             <div className="bg-cream-100 p-8 rounded-[40px] shadow-sm border border-clay-200/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-cream-50 rounded-2xl text-terracotta-600 shadow-inner">
                      <Clock size={24} />
                   </div>
                   <div className="space-y-1">
                      <h4 className="text-[10px] tracking-widest uppercase font-bold text-charcoal/40">Opening Hours</h4>
                      <p className="font-serif font-bold text-espresso-900">Every Day • 9am - 10pm</p>
                   </div>
                </div>
                <div className="hidden sm:block text-[10px] tracking-widest uppercase font-bold text-terracotta-600 animate-pulse">
                   Open Now
                </div>
             </div>

          </div>

          {/* Map & Visual Embed Placement Holder Area */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
             <div className="bg-clay-200 rounded-[40px] overflow-hidden shadow-inner h-[500px] relative group border border-clay-200">
                {/* Visual Placeholder for Map Embed */}
                <div className="absolute inset-0 bg-espresso-900/10 z-0">
                   <img
                    src="/img/img10.jpg"
                    alt="Map background visual"
                    className="w-full h-full object-cover opacity-20 blur-[2px]"
                   />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6 z-10">
                   <div className="p-6 bg-cream-50/90 backdrop-blur-md rounded-full shadow-xl text-terracotta-600 animate-bounce">
                      <MapPin size={48} fill="currentColor" />
                   </div>
                   <div className="space-y-2 max-w-sm">
                      <h3 className="text-2xl font-serif font-bold text-espresso-900">Visit Our Studio in Nashik</h3>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                         Located near Yogesh Electricals in the Shanker Nagar neighborhood of Nashik.
                      </p>
                      <div className="pt-4">
                        <a
                          href="https://maps.google.com/?q=Saakis+Craft+Gallery+Ankita+Residency+Nashik"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-espresso-800 text-cream-50 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-terracotta-600 transition-all shadow-xl"
                        >
                           Launch Navigation <Send size={16} />
                        </a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Social Integration Interaction Hub Section */}
             <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleInstagram}
                  className="bg-cream-100 hover:bg-cream-200 p-8 rounded-[40px] shadow-sm border border-clay-200/40 flex flex-col items-center text-center space-y-4 transition-all group"
                >
                   <div className="p-3 bg-cream-50 rounded-2xl text-espresso-900 group-hover:bg-terracotta-600 group-hover:text-cream-50 transition-colors">
                      <Instagram size={28} />
                   </div>
                   <div className="space-y-1">
                      <h4 className="font-serif font-bold text-espresso-900">Instagram</h4>
                      <p className="text-[10px] tracking-widest text-charcoal/40 uppercase font-bold">@saakis_craft_gallery</p>
                   </div>
                </button>
                <div className="bg-cream-100 p-8 rounded-[40px] shadow-sm border border-clay-200/40 flex flex-col items-center text-center space-y-4 transition-all">
                   <div className="p-3 bg-cream-50 rounded-2xl text-espresso-900">
                      <Share2 size={28} />
                   </div>
                   <div className="space-y-1">
                      <h4 className="font-serif font-bold text-espresso-900">Share Gallery</h4>
                      <p className="text-[10px] tracking-widest text-charcoal/40 uppercase font-bold underline cursor-pointer">Copy Site Link</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
