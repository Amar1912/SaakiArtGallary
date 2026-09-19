import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Ruler, MessageCircle, MapPin, ChevronRight, Award } from 'lucide-react';
import { products } from '../data/products';

export default function About() {
  return (
    <div className="pt-20 bg-cream-50">

      {/* Editorial Story Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-terracotta-500/10 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold text-terracotta-600">
                   Behind the Craft
                </div>
                <h1 className="text-4xl sm:text-6xl font-serif font-bold text-espresso-900 leading-[1.1]">
                   More Than <br /> Just a <span className="italic text-terracotta-600">Gift.</span>
                </h1>
                <p className="text-charcoal/80 text-lg sm:text-xl font-serif italic leading-relaxed">
                   “Every handmade piece carries a little bit of the person who made it — and a lot of the person it was made for.”
                </p>
                <p className="text-charcoal/70 leading-relaxed font-sans max-w-lg">
                   Saakis Craft Gallery is born from the belief that the most beautiful things in life aren't mass-produced in factories, but carefully brought to life at a workbench. Based in the heart of Nashik, we specialize in the meticulous art of preservation and miniature storytelling.
                </p>
                <div className="pt-4">
                   <Link to="/contact" className="inline-flex items-center gap-2 bg-espresso-800 text-cream-50 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-terracotta-600 transition-all shadow-lg">
                      Visit Our Studio <ChevronRight size={16} />
                   </Link>
                </div>
             </div>

             <div className="relative animate-fade-in">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-[12px] border-cream-50">
                   <img
                    src="/img/img11.jpg"
                    alt="Saakis Craft Gallery Studio Moment"
                    className="w-full h-full object-cover"
                   />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-goldAccent-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-terracotta-500/10 rounded-full blur-3xl" />
             </div>
          </div>
        </div>
      </section>

      {/* Core Studio Story & Values Block */}
      <section className="py-24 sm:py-32 bg-cream-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
               <h2 className="text-3xl sm:text-5xl font-serif font-bold text-espresso-900 leading-tight">Our Story</h2>
               <div className="h-px bg-clay-200 w-24 mx-auto" />
               <p className="text-charcoal/70 text-lg leading-relaxed">
                  Founded in Nashik, Saakis Craft Gallery started as a passion for recreating architectural details in miniature scale. What began as a personal hobby evolved into a full-scale boutique studio creating emotional anchors for people across India.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: <Heart className="text-terracotta-500" />, title: "Personalization", text: "We don't just sell products; we build creations around your specific story, memories, and personal milestones." },
                 { icon: <Sparkles className="text-goldAccent-500" />, title: "Artisan Quality", text: "From balsa wood to polymer clay, we use premium materials that ensure your creation lasts as a heritage piece." },
                 { icon: <Ruler className="text-espresso-800" />, title: "Extreme Detail", text: "We obsess over the millimeter. Every micro book, tiny car grill, or wall texture is crafted to be life-like." },
                 { icon: <Award className="text-terracotta-500" />, title: "Local Heritage", text: "Proudly based in Nashik, Maharashtra. We bring local craftsmanship to a premium, modern aesthetic." }
               ].map((val, idx) => (
                 <div key={idx} className="bg-cream-100 p-8 rounded-3xl border border-clay-200/40 hover:bg-cream-200/50 transition-all duration-300 group shadow-sm">
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-cream-50 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                       {val.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-espresso-900 mb-3">{val.title}</h3>
                    <p className="text-xs text-charcoal/60 leading-relaxed font-sans">{val.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Artisan Aesthetic Mosaic Visual Showcase Gallery */}
      <section className="py-24 bg-espresso-900 text-cream-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                     <img src="/img/img3.jpg" className="rounded-2xl shadow-xl w-full h-48 object-cover" alt="Craft detail 1" />
                     <img src="/img/img5.jpg" className="rounded-2xl shadow-xl w-full h-64 object-cover" alt="Craft detail 2" />
                  </div>
                  <div className="space-y-4 pt-8">
                     <img src="/img/img2.jpg" className="rounded-2xl shadow-xl w-full h-64 object-cover" alt="Craft detail 3" />
                     <img src="/img/img16.jpg" className="rounded-2xl shadow-xl w-full h-48 object-cover" alt="Craft detail 4" />
                  </div>
               </div>

               <div className="space-y-8">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-goldAccent-400">The Workshop</span>
                  <h2 className="text-3xl sm:text-5xl font-serif font-bold text-cream-50 leading-tight">What Makes Us Special</h2>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-goldAccent-500/30 flex items-center justify-center font-serif italic text-goldAccent-500">1</div>
                        <div className="space-y-2">
                           <h4 className="font-bold font-serif text-lg">Emotional Anchors</h4>
                           <p className="text-sm text-cream-100/60 leading-relaxed">We focus on creations that represent time. Whether it's your childhood home or your first car, we freeze the moment.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-goldAccent-500/30 flex items-center justify-center font-serif italic text-goldAccent-500">2</div>
                        <div className="space-y-2">
                           <h4 className="font-bold font-serif text-lg">Scale Accuracy</h4>
                           <p className="text-sm text-cream-100/60 leading-relaxed">Our diecast displays are modeled with actual architectural scales (1:24, 1:43) in mind, ensuring a professional look.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full border border-goldAccent-500/30 flex items-center justify-center font-serif italic text-goldAccent-500">3</div>
                        <div className="space-y-2">
                           <h4 className="font-bold font-serif text-lg">One-on-One Curation</h4>
                           <p className="text-sm text-cream-100/60 leading-relaxed">You speak directly to the artisan. No customer service bots—just genuine creative discussion about your project.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Visual Transition CTA Wrap */}
      <section className="py-24 bg-cream-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso-900 italic max-w-2xl mx-auto">
               “Handcrafted in Nashik, <br /> Built for Your Memories.”
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a
                href="https://instagram.com/saakis_craft_gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-terracotta-600 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
               >
                  Follow our behind-the-scenes <ChevronRight size={16} />
               </a>
            </div>
         </div>
      </section>

    </div>
  );
}
