import React from 'react';
import Link from 'next/link';
import { Sparkles, Mail, MapPin, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#191923] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#6D45D9] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Campus<span className="text-[#8E65FF]">Vibe</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Discover. Register. Participate. The centralized college event management
              platform uniting students, university clubs, and organizers with seamless registrations and digital QR passes.
            </p>
            <div className="flex items-center gap-3 pt-2 text-gray-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-[#6D45D9] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-[#6D45D9] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Twitter / X"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-[#6D45D9] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800/80 hover:bg-[#6D45D9] hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Explore Events
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/events?category=Hackathons" className="hover:text-white transition-colors">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link href="/events?category=Coding+Competitions" className="hover:text-white transition-colors">
                  Coding Contests
                </Link>
              </li>
              <li>
                <Link href="/events?category=Technical+Workshops" className="hover:text-white transition-colors">
                  Workshops & Labs
                </Link>
              </li>
              <li>
                <Link href="/events?category=Cultural+Festivals" className="hover:text-white transition-colors">
                  Cultural Festivals
                </Link>
              </li>
              <li>
                <Link href="/events?category=Sports" className="hover:text-white transition-colors">
                  Sports Tournaments
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  All Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CampusVibe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Support & Help
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Student Sign In
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Organizer Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Campus Support
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8E65FF] shrink-0 mt-0.5" />
                <span>Student Affairs Center, University Avenue</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8E65FF] shrink-0" />
                <span>support@campusvibe.edu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8E65FF] shrink-0" />
                <span>+1 (800) 226-7870</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 CampusVibe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Help Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
