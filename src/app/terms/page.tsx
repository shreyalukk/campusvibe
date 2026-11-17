import React from 'react';
import { Badge } from '@/components/ui/Badge';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
      <Badge variant="secondary">Legal</Badge>
      <h1 className="text-3xl font-extrabold text-[#191923]">Terms of Service</h1>
      <p className="text-sm text-gray-500">Effective Date: October 2026</p>

      <div className="prose text-sm text-[#555568] space-y-4 leading-relaxed">
        <p>
          Welcome to CampusVibe. By accessing or using our college event management platform, you agree to comply with and be bound by the following terms.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">1. Eligibility</h3>
        <p>
          CampusVibe is open to enrolled university students, recognized faculty, and verified campus club organizers.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">2. Event Registrations & Fair Play</h3>
        <p>
          Participants must supply authentic credentials when forming hackathon or competition teams. Duplicate registrations, impersonation, or circumventing capacity constraints are strictly prohibited.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">3. QR Pass Verification</h3>
        <p>
          Digital ticket passes are non-transferable unless explicitly authorized by the event organizer. Attendees must present their verified pass upon check-in.
        </p>
      </div>
    </div>
  );
}
