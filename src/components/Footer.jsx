import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-900 text-clay-200/90 pt-16 pb-8 border-t border-espresso-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 lg:gap-12 pb-12 border-b border-espresso-800">

          {/* ================= BRAND ================= */}
          <div className="col-span-2 md:col-span-1 space-y-4">

            <Link to="/" className="flex flex-col w-max">
              <span className="font-serif text-3xl font-bold text-cream-50 tracking-tight">
                SAakis
              </span>

              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-goldAccent-400 font-medium">
                Craft Gallery
              </span>
            </Link>

            <p className="font-serif italic text-cream-100/70 text-sm leading-relaxed max-w-xs">
              “Handcrafted stories, made just for you.”
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">

              <a
                href="https://instagram.com/saakis_craft_gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-espresso-800 hover:bg-terracotta-600 text-cream-50 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://wa.me/918999533278"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-espresso-800 hover:bg-terracotta-600 text-cream-50 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle
                  size={16}
                  className="fill-current"
                />
              </a>

            </div>
          </div>


          {/* ================= EXPLORE STUDIO ================= */}
          <div className="col-span-1 md:col-span-1">

            <h4 className="font-sans text-xs tracking-[0.2em] font-semibold text-goldAccent-400 uppercase mb-4">
              Explore Studio
            </h4>

            <ul className="space-y-2.5 text-sm">

              <li>
                <Link
                  to="/"
                  className="hover:text-cream-50 transition-colors"
                >
                  Home Base
                </Link>
              </li>

              <li>
                <Link
                  to="/creations"
                  className="hover:text-cream-50 transition-colors"
                >
                  Our Masterpieces
                </Link>
              </li>

              <li>
                <Link
                  to="/custom-order"
                  className="hover:text-cream-50 transition-colors"
                >
                  Custom Order Studio
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cream-50 transition-colors"
                >
                  Our Story & Heritage
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-cream-50 transition-colors"
                >
                  Contact Boutique
                </Link>
              </li>

            </ul>
          </div>


          {/* ================= STUDIO TIMINGS ================= */}
          <div className="col-span-1 md:col-span-1">

            <h4 className="font-sans text-xs tracking-[0.2em] font-semibold text-goldAccent-400 uppercase mb-4">
              Studio Timings
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-2.5">

                <Clock
                  size={16}
                  className="text-terracotta-500 mt-0.5 shrink-0"
                />

                <div>

                  <p className="font-medium text-cream-100">
                    Every Day Open
                  </p>

                  <p className="text-xs text-clay-200/60 mt-0.5">
                    9:00 AM – 10:00 PM
                  </p>

                </div>

              </div>

              <p className="text-xs text-clay-200/50 leading-relaxed">
                Feel free to message or request custom layout consultations at any hour via WhatsApp.
              </p>

            </div>
          </div>


          {/* ================= BOUTIQUE ================= */}
          <div className="col-span-2 md:col-span-1">

            <h4 className="font-sans text-xs tracking-[0.2em] font-semibold text-goldAccent-400 uppercase mb-4">
              The Boutique
            </h4>

            <ul className="space-y-3 text-sm">

              {/* Address */}
              <li className="flex items-start gap-2.5">

                <MapPin
                  size={16}
                  className="text-terracotta-500 mt-0.5 shrink-0"
                />

                <span className="text-xs leading-relaxed text-cream-100/80">
                  Ankita Residency, Gangapur Road,
                  near Yogesh Electricals, Shanker Nagar,
                  Savarkar Nagar, Nashik, MH 422013
                </span>

              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">

                <Phone
                  size={16}
                  className="text-terracotta-500 shrink-0"
                />

                <a
                  href="tel:+918999533278"
                  className="hover:text-cream-50 transition-colors"
                >
                  08999533278
                </a>

              </li>

            </ul>
          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-clay-200/40">

          <p>
            © {currentYear} Saakis Craft Gallery. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0 font-serif italic text-clay-200/30">
            Handcrafted with devotion in Nashik, Maharashtra
          </p>

        </div>

      </div>
    </footer>
  );
}