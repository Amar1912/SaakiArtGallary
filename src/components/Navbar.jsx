import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/creations', label: 'Our Creations' },
    { path: '/custom-order', label: 'Custom Order' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="group flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-espresso-900 leading-none">
              SAakis
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-terracotta-600 font-medium mt-0.5 group-hover:text-goldAccent-500 transition-colors">
              Craft Gallery
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm tracking-wide font-medium transition-all duration-200 relative py-1 hover:text-terracotta-600 ${
                    isActive ? 'text-terracotta-600 font-semibold' : 'text-espresso-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-600 rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* WhatsApp CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/918999533278?text=Hi%20Saakis%20Craft%20Gallery!%20I%20am%20visiting%20your%20website%20and%20would%20love%20to%20know%20more%20about%20your%20customized%20creations."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-espresso-800 text-cream-50 hover:bg-terracotta-600 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm shadow-espresso-900/10 hover:shadow-md"
            >
              <MessageCircle size={14} className="fill-current" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-espresso-900 hover:text-terracotta-600 p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <div className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-cream-100 shadow-xl border-l border-clay-200/50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <div className="flex flex-col space-y-4 flex-grow">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-wide py-2 border-b border-clay-100 block transition-colors ${
                    isActive ? 'text-terracotta-600 font-semibold' : 'text-espresso-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile WhatsApp Action Button */}
          <div className="mt-auto">
            <a
              href="https://wa.me/918999533278?text=Hi%20Saakis%20Craft%20Gallery!%20I%20am%20visiting%20your%20website%20and%20would%20love%20to%20know%20more%20about%20your%20customized%20creations."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 bg-terracotta-600 text-cream-50 py-3.5 rounded-xl font-medium tracking-wide transition-all"
            >
              <MessageCircle size={18} className="fill-current" />
              Chat on WhatsApp
            </a>
            <p className="text-center text-[11px] text-espresso-700/60 mt-3 font-sans">
              Nashik, MH • 08999533278
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-espresso-900/20 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </nav>
  );
}
