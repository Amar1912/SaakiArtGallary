import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Ruler, MapPin, ChevronRight, Star, Instagram } from 'lucide-react';
import { categories, products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {

  const featured = products.slice(0, 6); // Just picking first few as featured

  return (
    <div className="flex flex-col w-full">

     {/* Premium Split Hero */}
     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">

       {/* Right-side Product Image */}
       <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden">
         <img
           src="/img/img4.jpg"
           alt="Handcrafted Masterpiece"
           className="w-full h-full object-cover scale-105 animate-slow-zoom"
         />

         {/* Soft fade into white on the left */}
         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent lg:from-white lg:via-white/25 lg:to-transparent" />

         {/* Very subtle bottom pink tint */}
         <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-terracotta-500/20 to-transparent" />
       </div>

       {/* Hero Content */}
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="max-w-2xl py-20 sm:py-24 animate-fade-up">

           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-blush-100 border border-blush-300 text-[10px] tracking-[0.2em] uppercase font-bold text-terracotta-700">
             ✦ HANDCRAFTED IN NASHIK
           </div>

           {/* Heading */}
           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-espresso-900 leading-[1.02]">
             We Turn Your
             <br />
             Memories Into
             <br />
             <span className="italic text-terracotta-600">
               Handmade
               <br />
               Masterpieces.
             </span>
           </h1>

           {/* Description */}
           <p className="mt-7 text-base sm:text-lg text-espresso-700 leading-relaxed max-w-xl">
             From miniature worlds to personalized gifts, every creation is
             handcrafted with detail, emotion, and your story in mind.
           </p>

           {/* Buttons */}
           <div className="flex flex-wrap gap-4 mt-9">

             <a
               href="/creations"
               className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-terracotta-600 text-white text-sm font-bold tracking-wide hover:bg-terracotta-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-terracotta-600/20"
             >
               EXPLORE OUR CREATIONS
             </a>

             <a
               href="/custom-order"
               className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-espresso-900/20 bg-white/80 backdrop-blur-sm text-espresso-900 text-sm font-bold tracking-wide hover:border-terracotta-500 hover:text-terracotta-700 transition-all duration-300"
             >
               CREATE SOMETHING CUSTOM
             </a>

           </div>

         </div>
       </div>

     </section>

      {/* Trust & Quality Bar Strip */}
      <section className="bg-cream-200 py-10 sm:py-16 border-b border-clay-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { icon: <Sparkles size={20} />, title: "100% Handmade", desc: "Carefully crafted by hand" },
              { icon: <Heart size={20} />, title: "Custom Made", desc: "Designed around your idea" },
              { icon: <Ruler size={20} />, title: "Attention to Detail", desc: "Every piece tells a story" },
              { icon: <MapPin size={20} />, title: "Made in Nashik", desc: "Created locally with care" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                <div className="p-3 bg-cream-50 rounded-2xl shadow-sm text-terracotta-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-espresso-900 font-semibold text-sm">{item.title}</h3>
                <p className="text-[11px] text-charcoal/60 uppercase tracking-widest font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Collections Section with Editorial Layout */}
      <section className="py-20 sm:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600">The Collection</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-espresso-900 leading-tight">
              Crafted For Moments That Matter.
            </h2>
            <p className="text-charcoal/70 leading-relaxed italic">
              “Discover handmade creations designed to turn memories into something you can keep forever.”
            </p>
          </div>

          {/* Asymmetrical Category Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {categories.filter(c => c.key !== 'all').map((cat, idx) => (
              <Link
                key={cat.key}
                to={`/creations?category=${cat.key}`}
                className={`group relative overflow-hidden rounded-3xl shadow-lg border border-clay-200/50 flex flex-col justify-end min-h-[400px] transition-all duration-700 ${
                  idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4' : idx === 2 ? 'md:col-span-4' : 'md:col-span-8'
                }`}
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="relative p-8 space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl sm:text-3xl font-serif text-cream-50 font-bold">{cat.label}</h3>
                  <p className="text-cream-100/70 text-sm italic font-medium">{cat.description}</p>
                  <div className="flex items-center gap-2 text-goldAccent-400 text-xs font-bold tracking-widest uppercase pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Collection <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Masonry Highlights */}
      <section className="py-20 bg-espresso-900 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl space-y-4">
               <span className="text-xs font-bold tracking-[0.25em] uppercase text-goldAccent-400">Masterpieces</span>
               <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">A Few Things We've Made.</h2>
            </div>
            <Link to="/creations" className="inline-flex items-center gap-2 text-cream-200 hover:text-white transition-colors border-b border-cream-200/20 pb-1 text-sm font-medium tracking-wide">
              View All Masterpieces <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((prod) => (
              <Link
                to="/creations"
                key={prod.id}
                className="group relative bg-espresso-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-espresso-900 via-espresso-900/60 to-transparent">
                  <span className="text-[10px] font-bold tracking-widest text-goldAccent-500 uppercase block mb-1">
                    {prod.category}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-cream-50 leading-tight mb-3">
                    {prod.title}
                  </h4>
                  <div className="flex items-center text-xs font-medium text-cream-200/60 group-hover:text-cream-50 transition-colors">
                    View Details <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Premium Steps */}
      <section className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
        {/* Subtle decorative background text */}
        <div className="absolute top-0 right-0 text-[20vw] font-serif italic text-clay-200/20 select-none leading-none -translate-y-1/2 translate-x-1/4 pointer-events-none">
          Handmade
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600">The Journey</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-espresso-900">How It Works</h2>
            <p className="text-charcoal/70">From a single thought to a physical memory, we guide you through every step of the creative process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
             {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-clay-200/50 z-0" />

            {[
              { num: "01", title: "Share Your Idea", desc: "Send your concept, photo or reference to our WhatsApp boutique." },
              { num: "02", title: "Let's Discuss", desc: "We understand your requirements and finalize the artistic vision and scale." },
              { num: "03", title: "We Craft", desc: "Your creation is carefully handcrafted with precision, emotion, and premium materials." },
              { num: "04", title: "Your Memory Is Ready", desc: "Receive a unique, one-of-a-kind creation made especially for you or your loved ones." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6 group">
                <div className="w-16 h-16 rounded-full bg-cream-50 border border-clay-200 flex items-center justify-center font-serif text-2xl font-bold text-espresso-900 shadow-sm group-hover:bg-terracotta-600 group-hover:text-cream-50 group-hover:border-terracotta-600 transition-all duration-500">
                  {step.num}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-serif text-espresso-900 group-hover:text-terracotta-600 transition-colors">{step.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <Link
              to="/custom-order"
              className="inline-flex items-center gap-3 bg-espresso-800 text-cream-50 px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-terracotta-600 transition-all shadow-xl hover:-translate-y-1"
             >
               Start Your Project <ChevronRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Review Section */}
      <section className="py-20 bg-cream-50 border-y border-clay-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 text-center md:text-left">
              <div className="space-y-3">
                 <h2 className="text-3xl sm:text-4xl font-bold font-serif text-espresso-900">Loved By Those Who Value Details</h2>
                 <p className="text-charcoal/60 max-w-md">Our creations have found homes across India, becoming centers of cherished memories.</p>
              </div>
              <div className="flex flex-col items-center bg-cream-100 p-6 rounded-3xl border border-clay-200/50 shadow-sm">
                 <div className="flex items-center gap-1 text-goldAccent-500 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                 </div>
                 <span className="text-2xl font-bold font-serif text-espresso-900">4.8 / 5</span>
                 <span className="text-[10px] tracking-[0.2em] font-bold text-charcoal/50 uppercase">Google Business Reviews</span>
              </div>
           </div>

           <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide snap-x">
              {[
                { name: "Sneha R.", text: "The diorama for my husband's car collection was stunning. The level of detail in the miniature garage is just mind-blowing! Highly recommend Saakis." },
                { name: "Rahul M.", text: "Ordered a custom wood frame for our anniversary. It's not just a photo, it's a piece of art. Everyone who visits asks where we got it." },
                { name: "Ananya P.", text: "Perfect gift for my parents. The miniature living room brought tears to their eyes as it looked exactly like their first home. Thank you Ankita!" },
                { name: "Vikram S.", text: "Absolutely loved the diecast display shelf. Finally, my scale models have a home that matches their quality." }
              ].map((rev, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-cream-100 p-8 rounded-3xl shadow-sm border border-clay-200/30 snap-start flex flex-col justify-between">
                   <p className="text-charcoal/80 font-serif italic text-lg leading-relaxed mb-8">“{rev.text}”</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-clay-200 flex items-center justify-center text-espresso-800 font-bold font-serif text-sm">
                         {rev.name.charAt(0)}
                      </div>
                      <span className="font-sans font-semibold text-espresso-900 text-sm">{rev.name}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Instagram Feed Grid Style */}
      <section className="py-20 bg-cream-100 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-center text-center">
            <Instagram size={32} className="text-terracotta-600 mb-6" />
            <h2 className="text-3xl font-bold font-serif text-espresso-900 mb-2">Follow the Craft</h2>
            <a
              href="https://instagram.com/saakis_craft_gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-600 font-semibold tracking-wide hover:underline"
            >
              @saakis_craft_gallery
            </a>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 px-2 sm:px-4">
            {products.slice(6, 12).map((prod, idx) => (
               <a
                 key={idx}
                 href="https://instagram.com/saakis_craft_gallery"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="aspect-square overflow-hidden group relative"
                >
                  <img
                    src={prod.image}
                    alt="Instagram craft highlight"
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-espresso-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                     <Instagram className="text-cream-50" size={24} />
                  </div>
               </a>
            ))}
         </div>

         <div className="mt-12 text-center">
             <a
              href="https://instagram.com/saakis_craft_gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-terracotta-600 text-terracotta-600 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-terracotta-600 hover:text-cream-50 transition-all"
             >
               Follow on Instagram
             </a>
         </div>
      </section>

     {/* Large Aesthetic Conversion CTA */}
     <section className="py-28 sm:py-32 relative bg-white flex items-center justify-center overflow-hidden">

       {/* Background Image */}
       <div className="absolute inset-0 z-0">

         <img
           src="/img/img15.jpg"
           alt="Final CTA background"
           className="w-full h-full object-cover opacity-15"
         />

         {/* White overlay — removes brown shade */}
         <div className="absolute inset-0 bg-pink/90" />

         {/* Soft pink bottom glow */}
         <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blush-200/70 via-blush-100/30 to-transparent" />

       </div>


       {/* CTA Content */}
       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in">

         <div className="space-y-5">

           {/* Small Label */}
           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-100 border border-blush-300 text-terracotta-700 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
             ✦ Made Especially For You
           </span>


           {/* Heading */}
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-espresso-900 leading-tight">

             Your Story Deserves
             <br />

             Something{' '}

             <span className="italic text-terracotta-600">
               Handmade.
             </span>

           </h2>


           {/* Description */}
           <p className="text-base sm:text-lg text-espresso-700 max-w-2xl mx-auto leading-relaxed">
             Let's create something that can't be found anywhere else.
             Whether it's a gift or a collectible, we make it real.
           </p>

         </div>


         {/* Buttons */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">

           <Link
             to="/custom-order"
             className="w-full sm:w-auto px-9 py-4 bg-terracotta-600 text-white rounded-full font-bold tracking-widest uppercase shadow-lg shadow-terracotta-600/20 hover:bg-terracotta-700 hover:-translate-y-1 transition-all text-xs"
           >
             Start a Custom Order
           </Link>


           <WhatsAppButton
             variant="secondary"
             label="Chat on WhatsApp"
           />

         </div>

       </div>

     </section>

    </div>
  );
}
