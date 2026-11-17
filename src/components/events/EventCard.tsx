'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, Clock, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Event } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate, formatTime, formatCurrency, getDaysLeft } from '@/lib/utils';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export function EventCard({ event, featured = false }: EventCardProps) {
  const daysInfo = getDaysLeft(event.registration_deadline);
  const seatsLeft = Math.max(0, event.capacity - event.registered_count);
  const percentageFilled = Math.min(100, Math.round((event.registered_count / event.capacity) * 100));
  const isTeam = event.maximum_team_size > 1;

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-200/90 hover:border-[#6D45D9]/40 hover:shadow-xl hover:shadow-[#6D45D9]/5 transition-all duration-300 flex flex-col overflow-hidden ${
        featured ? 'ring-2 ring-[#6D45D9]/20' : ''
      }`}
    >
      {/* Event Image Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <Image
          src={event.poster_url}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3">
          <Badge variant="primary" className="bg-white/95 text-[#6D45D9] backdrop-blur-md shadow-xs">
            {event.category}
          </Badge>
        </div>

        {/* Free or Price Badge */}
        <div className="absolute top-3 right-3">
          <Badge
            variant={event.fee_amount === 0 ? 'success' : 'neutral'}
            className="bg-white/95 backdrop-blur-md shadow-xs font-semibold"
          >
            {formatCurrency(event.fee_amount)}
          </Badge>
        </div>

        {/* Deadline Notice on Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span className={daysInfo.isUrgent ? 'text-amber-300 font-medium' : 'text-white'}>
              {daysInfo.text}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px]">
            <Users className="w-3 h-3 text-purple-300" />
            <span>
              {isTeam ? `Teams (${event.minimum_team_size}-${event.maximum_team_size})` : 'Individual'}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <Link href={`/events/${event.id}`}>
            <h3 className="font-bold text-lg text-[#191923] group-hover:text-[#6D45D9] transition-colors line-clamp-2">
              {event.title}
            </h3>
          </Link>

          {/* Tagline / short description */}
          <p className="text-xs text-[#555568] line-clamp-2 leading-relaxed">
            {event.tagline || event.description}
          </p>
        </div>

        {/* Event Meta Details */}
        <div className="space-y-2 text-xs text-[#555568] pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#6D45D9] shrink-0" />
            <span>{formatDate(event.start_time)} • {formatTime(event.start_time)}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#6D45D9] shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        {/* Capacity Indicator & Action */}
        <div className="space-y-3 pt-2">
          {/* Capacity Progress Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] text-[#555568]">
              <span>Capacity ({event.registered_count}/{event.capacity})</span>
              <span className={seatsLeft <= 10 ? 'text-rose-600 font-semibold' : 'text-gray-500'}>
                {seatsLeft === 0 ? 'Full' : `${seatsLeft} spots left`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  percentageFilled >= 90
                    ? 'bg-rose-500'
                    : percentageFilled >= 70
                    ? 'bg-amber-500'
                    : 'bg-[#6D45D9]'
                }`}
                style={{ width: `${percentageFilled}%` }}
              />
            </div>
          </div>

          {/* Action Button */}
          <Button
            href={`/events/${event.id}`}
            variant="secondary"
            size="sm"
            fullWidth
            className="group-hover:bg-[#6D45D9] group-hover:text-white group-hover:border-[#6D45D9] transition-all"
            rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
          >
            View Details & Register
          </Button>
        </div>
      </div>
    </div>
  );
}
