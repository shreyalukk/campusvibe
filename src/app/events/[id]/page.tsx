'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Share2,
  ChevronLeft,
  ArrowRight,
  Trophy,
  Info,
  Mail,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import { sampleEvents } from '@/data/sampleEvents';
import { EventCard } from '@/components/events/EventCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  formatDate,
  formatTime,
  formatDateTime,
  formatCurrency,
  getDaysLeft,
} from '@/lib/utils';

function EventDetailContent() {
  const params = useParams();
  const eventId = params.id as string;
  const event = sampleEvents.find((e) => e.id === eventId);

  const [registered, setRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#191923]">Event Not Found</h2>
        <p className="text-sm text-gray-500">
          The requested campus event does not exist or has been removed.
        </p>
        <Button href="/events" variant="primary">
          Back to Events
        </Button>
      </div>
    );
  }

  const daysInfo = getDaysLeft(event.registration_deadline);
  const seatsLeft = Math.max(0, event.capacity - event.registered_count);
  const isFull = seatsLeft === 0;
  const isClosed = daysInfo.isExpired || isFull;
  const isTeam = event.maximum_team_size > 1;

  // Related events from the same category or other events
  const relatedEvents = sampleEvents
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  const handleRegisterClick = () => {
    setShowModal(true);
  };

  return (
    <div className="bg-[#F5F5F8]/40 pb-20">
      {/* Back button header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#555568] hover:text-[#6D45D9] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to all events
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Grid: Details (Left 8 cols) & Sticky Registration Sidebar (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Event Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Event Hero Poster */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-gray-900 border border-gray-200/90 shadow-md">
              <Image
                src={event.poster_url}
                alt={event.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category & Status Overlay */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="primary" className="bg-white/95 text-[#6D45D9] shadow-sm font-semibold">
                  {event.category}
                </Badge>
                {event.fee_amount === 0 ? (
                  <Badge variant="success" className="bg-white/95 text-[#22A06B] shadow-sm font-semibold">
                    Free Event
                  </Badge>
                ) : (
                  <Badge variant="neutral" className="bg-white/95 shadow-sm font-semibold">
                    {formatCurrency(event.fee_amount)}
                  </Badge>
                )}
              </div>
            </div>

            {/* Title & Tagline Box */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#191923] tracking-tight leading-tight">
                {event.title}
              </h1>
              <p className="text-base sm:text-lg text-[#555568] leading-relaxed">
                {event.tagline}
              </p>

              {/* Quick Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Date & Time
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-[#191923] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#6D45D9] shrink-0" />
                    <span>{formatDate(event.start_time)}</span>
                  </div>
                  <span className="text-xs text-gray-500 block">
                    {formatTime(event.start_time)}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Venue
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-[#191923] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#6D45D9] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Format
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-[#191923] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#6D45D9] shrink-0" />
                    <span>{isTeam ? `Team (${event.minimum_team_size}-${event.maximum_team_size})` : 'Individual'}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Entry Fee
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-[#191923]">
                    {formatCurrency(event.fee_amount)}
                  </div>
                  <span className="text-xs text-[#22A06B] font-medium block">
                    Verified Campus Pass
                  </span>
                </div>
              </div>
            </div>

            {/* About / Description */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-xl font-bold text-[#191923]">About the Event</h2>
              <p className="text-sm sm:text-base text-[#555568] leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {/* Eligibility & Team Requirements */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-xl font-bold text-[#191923]">Eligibility & Requirements</h2>
              <div className="space-y-3 text-sm text-[#555568]">
                <div className="flex items-start gap-3 bg-[#F5F5F8] p-4 rounded-2xl">
                  <UserCheck className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#191923] font-semibold">Who Can Participate:</strong>
                    <span>{event.eligibility}</span>
                  </div>
                </div>

                {isTeam && (
                  <div className="flex items-start gap-3 bg-[#F0EBFC]/50 p-4 rounded-2xl border border-[#6D45D9]/20">
                    <Users className="w-5 h-5 text-[#6D45D9] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#191923] font-semibold">Team Size Guidelines:</strong>
                      <span>
                        Each squad requires a minimum of {event.minimum_team_size} and a maximum of{' '}
                        {event.maximum_team_size} members. The team leader creates the team roster and invites members.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-xl font-bold text-[#191923]">Rules & Regulations</h2>
                <ul className="space-y-2.5 text-sm text-[#555568]">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#F0EBFC] text-[#6D45D9] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Schedule / Timeline */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-xl font-bold text-[#191923]">Event Schedule</h2>
                <div className="space-y-4 relative border-l-2 border-purple-100 ml-3 pl-6">
                  {event.schedule.map((item, idx) => (
                    <div key={idx} className="relative space-y-1">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#6D45D9] ring-4 ring-purple-100" />
                      <span className="text-xs font-semibold text-[#6D45D9]">{item.time}</span>
                      <h4 className="text-sm font-bold text-[#191923]">{item.title}</h4>
                      {item.description && (
                        <p className="text-xs text-gray-500">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prizes / Rewards */}
            {event.prizes && event.prizes.length > 0 && (
              <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <h2 className="text-xl font-bold text-[#191923]">Prizes & Accolades</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.prizes.map((prize, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                        {prize.rank}
                      </span>
                      <p className="text-sm font-semibold text-[#191923]">{prize.reward}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Organizer Info Box */}
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-lg font-bold text-[#191923]">Organized By</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6D45D9] text-white flex items-center justify-center font-bold text-lg">
                  {event.organizer_name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#191923]">{event.organizer_name}</h4>
                  <span className="text-xs text-gray-500 block">{event.organizer_department}</span>
                  {event.organizer_email && (
                    <a
                      href={`mailto:${event.organizer_email}`}
                      className="text-xs text-[#6D45D9] hover:underline flex items-center gap-1 mt-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {event.organizer_email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Registration Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 space-y-6 shadow-lg shadow-gray-200/40">
              {/* Pricing & Deadline Header */}
              <div className="space-y-1 pb-4 border-b border-gray-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Registration Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#191923]">
                    {formatCurrency(event.fee_amount)}
                  </span>
                  {event.fee_amount === 0 && (
                    <span className="text-xs font-medium text-[#22A06B] bg-[#E7F6F0] px-2 py-0.5 rounded-md">
                      Free Entry
                    </span>
                  )}
                </div>
              </div>

              {/* Deadline & Spots Status */}
              <div className="space-y-3 bg-[#F5F5F8] p-4 rounded-2xl text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Deadline:</span>
                  <span className="font-semibold text-[#191923]">
                    {formatDate(event.registration_deadline)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Status:</span>
                  <span
                    className={`font-semibold ${
                      daysInfo.isExpired
                        ? 'text-rose-600'
                        : daysInfo.isUrgent
                        ? 'text-amber-600'
                        : 'text-[#22A06B]'
                    }`}
                  >
                    {daysInfo.text}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Seats Left:</span>
                  <span className="font-bold text-[#191923]">
                    {seatsLeft} of {event.capacity}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-[#6D45D9] rounded-full"
                    style={{
                      width: `${Math.min(100, Math.round((event.registered_count / event.capacity) * 100))}%`,
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {registered ? (
                  <div className="bg-[#E7F6F0] border border-[#22A06B]/30 p-4 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#22A06B] mx-auto" />
                    <h4 className="text-sm font-bold text-[#191923]">You are Registered!</h4>
                    <p className="text-xs text-gray-600">
                      Your digital ticket and QR pass are ready.
                    </p>
                    <Button href="/dashboard" variant="primary" size="sm" fullWidth>
                      View in My Registrations
                    </Button>
                  </div>
                ) : isClosed ? (
                  <div className="p-4 rounded-2xl bg-gray-100 text-center space-y-1">
                    <AlertCircle className="w-6 h-6 text-gray-500 mx-auto" />
                    <span className="text-sm font-bold text-gray-700">
                      {isFull ? 'Capacity Reached' : 'Registrations Closed'}
                    </span>
                    <p className="text-xs text-gray-500">
                      This event is no longer accepting new submissions.
                    </p>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={handleRegisterClick}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {isTeam ? 'Register Team' : 'Register Now'}
                    </Button>

                    <p className="text-[11px] text-gray-400 text-center">
                      Instant digital confirmation • Secure QR ticket pass
                    </p>
                  </>
                )}
              </div>

              {/* Share & Support Links */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: event.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Event link copied to clipboard!');
                    }
                  }}
                  className="hover:text-[#6D45D9] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share event
                </button>

                <Link href="/contact" className="hover:text-[#6D45D9] transition-colors">
                  Need help?
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED EVENTS SECTION */}
        {relatedEvents.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-gray-200">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-[#191923]">Related Campus Events</h3>
              <p className="text-sm text-gray-500">
                Discover more upcoming competitions and technical workshops.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((relEvent) => (
                <EventCard key={relEvent.id} event={relEvent} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* REGISTRATION MODAL / PREVIEW */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#6D45D9]" />
                <h3 className="text-lg font-bold text-[#191923]">Confirm Registration</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-[#555568]">
                You are registering for: <strong className="text-[#191923]">{event.title}</strong>
              </p>

              <div className="bg-[#F5F5F8] p-4 rounded-2xl text-xs space-y-2 text-[#555568]">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-semibold text-[#191923]">
                    {isTeam ? `Team (${event.minimum_team_size}-${event.maximum_team_size})` : 'Individual Solo'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span className="font-semibold text-[#191923]">{event.venue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration Fee:</span>
                  <span className="font-semibold text-[#22A06B]">{formatCurrency(event.fee_amount)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Stage 1 preview: Click below to confirm sample registration. In Stage 5, this connects directly to Supabase authentication and generates your digital QR pass.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  setRegistered(true);
                  setShowModal(false);
                }}
              >
                Confirm Pass
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EventDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto py-20 text-center text-gray-500">
          Loading event details...
        </div>
      }
    >
      <EventDetailContent />
    </Suspense>
  );
}
