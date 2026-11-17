import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Target,
  Compass,
  Users,
  ShieldCheck,
  QrCode,
  ArrowRight,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F0EBFC]/40 to-white pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge variant="primary">Our Mission</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191923] tracking-tight">
            Connecting collegiate talent with life-changing opportunities.
          </h1>
          <p className="text-lg text-[#555568] leading-relaxed max-w-2xl mx-auto">
            CampusVibe is the centralized college event management infrastructure designed
            to empower students to discover, team up, and compete, while giving faculty and organizers
            effortless check-in and attendee management.
          </p>
        </div>
      </section>

      {/* The Story / Problem & Solution */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#6D45D9] uppercase tracking-wider">
              The Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191923]">
              Why We Built CampusVibe
            </h2>
            <p className="text-sm text-[#555568] leading-relaxed">
              Every semester, colleges buzz with incredible hackathons, debate tournaments,
              and cultural festivals. But information is scattered across fragmented WhatsApp groups,
              faded paper notice boards, and unverified Google Forms.
            </p>
            <p className="text-sm text-[#555568] leading-relaxed">
              Students miss registration deadlines, team formations are chaotic, and organizers struggle
              at event entrances with clipboards and paper rosters. CampusVibe solves this end-to-end
              with verified registrations, collaborative squad builders, and digital QR ticket passes.
            </p>
          </div>

          <div className="bg-[#F5F5F8] rounded-3xl p-8 border border-gray-200/90 space-y-6">
            <h3 className="font-bold text-lg text-[#191923]">The Three Pillars of CampusVibe</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#6D45D9] text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#191923]">Discover</h4>
                  <p className="text-xs text-gray-500">
                    One single dashboard for all university events with verified dates and rules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#6D45D9] text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#191923]">Register & Form Teams</h4>
                  <p className="text-xs text-gray-500">
                    Assemble hackathon squads, send automated invites, and guarantee eligibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#22A06B] text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#191923]">Participate via QR Pass</h4>
                  <p className="text-xs text-gray-500">
                    Cryptographically verifiable digital passes with instant entrance scan validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-[#191923] text-white rounded-3xl p-10 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Be part of the next campus breakthrough.
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Whether you want to lead an AI team or host an inter-college championship,
            CampusVibe is your launchpad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/events" variant="primary" size="md">
              Browse Live Events
            </Button>
            <Button href="/contact" variant="ghost" size="md" className="text-white hover:bg-white/10">
              Contact Organizing Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
