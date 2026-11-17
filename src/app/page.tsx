import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  QrCode,
  Users,
  Search,
  CheckCircle2,
  Award,
  Layers,
  Cpu,
  Code,
  Laptop,
  Music,
  Trophy,
  Mic,
  Rocket,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { sampleEvents, eventCategories } from '@/data/sampleEvents';
import { EventCard } from '@/components/events/EventCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  const featuredEvents = sampleEvents.filter((e) => e.featured).slice(0, 3);
  const upcomingEvents = sampleEvents.slice(0, 6);

  // Category Icon Resolver
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Mic':
        return <Mic className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-20 sm:gap-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 bg-gradient-to-b from-[#F0EBFC]/40 via-white to-white">
        {/* Subtle decorative glow circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6D45D9]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBFC] border border-[#6D45D9]/20 text-[#6D45D9] text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#6D45D9]" />
            <span>Discover. Register. Participate.</span>
          </div>

          {/* Master Headline */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#191923] leading-[1.1]">
              Something <span className="text-[#6D45D9] relative inline-block">
                exciting
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 text-[#6D45D9]/25"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="6" fill="transparent" />
                </svg>
              </span> is happening.
            </h1>
            <p className="text-lg sm:text-xl text-[#555568] max-w-2xl mx-auto font-normal leading-relaxed pt-2">
              The premier college event ecosystem. Explore national hackathons, technical
              workshops, coding battles, and cultural galas—with instant team matching and digital QR passes.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href="/events"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-[#6D45D9]/25"
            >
              Explore Events
            </Button>
            <Button
              href="/signup"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Join CampusVibe Free
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-gray-100">
            <div className="p-4 rounded-xl bg-white/70 border border-gray-100 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#191923]">45+</span>
              <span className="text-xs text-gray-500 font-medium">Active Campus Events</span>
            </div>
            <div className="p-4 rounded-xl bg-white/70 border border-gray-100 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#6D45D9]">12,000+</span>
              <span className="text-xs text-gray-500 font-medium">Student Participants</span>
            </div>
            <div className="p-4 rounded-xl bg-white/70 border border-gray-100 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#191923]">100%</span>
              <span className="text-xs text-gray-500 font-medium">Digital QR Check-in</span>
            </div>
            <div className="p-4 rounded-xl bg-white/70 border border-gray-100 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#22A06B]">30+</span>
              <span className="text-xs text-gray-500 font-medium">Clubs & Departments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED EVENTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <Badge variant="primary">Spotlight</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191923]">
              Featured Campus Events
            </h2>
            <p className="text-sm text-[#555568]">
              High-impact hackathons, masterclasses, and college championships with imminent registration deadlines.
            </p>
          </div>
          <Button
            href="/events"
            variant="outline"
            size="sm"
            rightIcon={<ChevronRight className="w-4 h-4" />}
          >
            Browse All ({sampleEvents.length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} featured={true} />
          ))}
        </div>
      </section>

      {/* 3. EVENT CATEGORIES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <Badge variant="secondary">Browse by Passion</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191923]">
            Explore Diverse Event Categories
          </h2>
          <p className="text-sm text-[#555568]">
            Find the right avenue for your technical skills, artistic creativity, or athletic spirit.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/events?category=${encodeURIComponent(cat.name)}`}
              className="group p-5 rounded-2xl bg-white border border-gray-200/90 hover:border-[#6D45D9]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0EBFC] text-[#6D45D9] group-hover:bg-[#6D45D9] group-hover:text-white flex items-center justify-center transition-colors">
                {getCategoryIcon(cat.icon)}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#191923] group-hover:text-[#6D45D9] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <span className="text-xs text-gray-400 font-medium">
                  {cat.count} Events
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (STUDENTS & ORGANIZERS) */}
      <section className="bg-[#F5F5F8] py-16 sm:py-20 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="primary">Frictionless Workflow</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191923]">
              How CampusVibe Works
            </h2>
            <p className="text-sm text-[#555568]">
              From discovering an exciting hackathon to walking through the auditorium door with your verified QR pass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 space-y-4 relative">
              <div className="w-12 h-12 rounded-xl bg-[#F0EBFC] text-[#6D45D9] flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-[#191923]">Discover & Filter</h3>
              <p className="text-sm text-[#555568] leading-relaxed">
                Filter through active collegiate activities across technology, culture, and sports.
                Check rules, schedules, and team size prerequisites with full transparency.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 space-y-4 relative">
              <div className="w-12 h-12 rounded-xl bg-[#F0EBFC] text-[#6D45D9] flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-[#191923]">One-Click / Team Register</h3>
              <p className="text-sm text-[#555568] leading-relaxed">
                Register as an individual or create a team squad, invite classmates via email,
                and lock in your spot with instant transactional validation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 space-y-4 relative">
              <div className="w-12 h-12 rounded-xl bg-[#E7F6F0] text-[#22A06B] flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-[#191923]">Instant Digital QR Pass</h3>
              <p className="text-sm text-[#555568] leading-relaxed">
                Get a cryptographically signed digital ticket pass on your phone.
                Organizers scan your QR pass at the entrance for instant check-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS FOR STUDENTS & ORGANIZERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <Badge variant="secondary">Value Proposition</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191923]">
            Engineered for Campus Communities
          </h2>
          <p className="text-sm text-[#555568]">
            Built to eliminate messy Google Forms, duplicate registrations, and manual paper rosters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card: For Students */}
          <div className="rounded-2xl border border-gray-200/90 p-8 space-y-6 bg-gradient-to-br from-white to-[#F0EBFC]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6D45D9] text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#191923]">For College Students</h3>
                <span className="text-xs text-gray-500 font-medium">Never miss an opportunity</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-[#555568]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22A06B] shrink-0 mt-0.5" />
                <span>Centralized feed of verified campus hackathons, workshops, and fests</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22A06B] shrink-0 mt-0.5" />
                <span>Seamless team management: create rosters, invite friends, track status</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22A06B] shrink-0 mt-0.5" />
                <span>Digital QR ticket passes available on mobile without printing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22A06B] shrink-0 mt-0.5" />
                <span>Personal student dashboard tracking registered events and schedules</span>
              </li>
            </ul>

            <Button href="/events" variant="secondary" size="md">
              Start Exploring
            </Button>
          </div>

          {/* Card: For Organizers */}
          <div className="rounded-2xl border border-gray-200/90 p-8 space-y-6 bg-gradient-to-br from-white to-[#F5F5F8]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#191923] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#191923]">For Event Organizers & Clubs</h3>
                <span className="text-xs text-gray-500 font-medium">Complete control over event operations</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-[#555568]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                <span>Publish events with custom capacity limits, deadlines, and eligibility rules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                <span>Live camera QR scanner at venue doors to record attendance instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                <span>Real-time attendee rosters with instant CSV export for reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                <span>Strict prevention of duplicate check-ins and unauthorized access</span>
              </li>
            </ul>

            <Button href="/login" variant="secondary" size="md">
              Organizer Portal
            </Button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-[#6D45D9] via-[#7B53E4] to-[#8E65FF] text-white p-8 sm:p-14 text-center space-y-6 shadow-xl shadow-[#6D45D9]/20">
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto tracking-tight">
            Ready to experience campus life at full throttle?
          </h2>
          <p className="text-base sm:text-lg text-purple-100 max-w-xl mx-auto">
            Create your student account in under 60 seconds and gain instant access to every competition, workshop, and festival.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href="/signup"
              variant="secondary"
              size="lg"
              className="bg-white text-[#6D45D9] hover:bg-gray-100 font-bold border-none"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started Now
            </Button>
            <Button
              href="/events"
              variant="outline"
              size="lg"
              className="text-white border-white/40 hover:bg-white/10 hover:border-white"
            >
              Browse Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
