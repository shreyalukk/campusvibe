'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, Compass, Info, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D45D9] to-[#8E65FF] flex items-center justify-center text-white shadow-md shadow-[#6D45D9]/25 transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#191923] group-hover:text-[#6D45D9] transition-colors">
                Campus<span className="text-[#6D45D9]">Vibe</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase -mt-1 hidden sm:block">
                Discover • Register • Participate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-[#6D45D9] bg-[#F0EBFC] font-semibold'
                      : 'text-[#555568] hover:text-[#191923] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/login" variant="ghost" size="sm">
              Sign In
            </Button>
            <Button
              href="/signup"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#191923] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6D45D9]"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#F0EBFC] text-[#6D45D9] font-semibold'
                      : 'text-[#191923] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Button href="/login" variant="secondary" fullWidth size="md">
              Sign In
            </Button>
            <Button
              href="/signup"
              variant="primary"
              fullWidth
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
