import React from 'react';
import { Badge } from '@/components/ui/Badge';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
      <Badge variant="secondary">Legal</Badge>
      <h1 className="text-3xl font-extrabold text-[#191923]">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Effective Date: October 2026</p>

      <div className="prose text-sm text-[#555568] space-y-4 leading-relaxed">
        <p>
          At CampusVibe, we take student privacy and event data integrity seriously. This policy outlines how we collect, store, and process personal and collegiate information.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">1. Information We Collect</h3>
        <p>
          When you register for an account or sign up for a campus event, we collect your name, university email address, college affiliation, and event registration selections.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">2. Use of Digital QR Passes</h3>
        <p>
          Digital QR passes contain cryptographically generated random tokens that verify your registration without exposing your personal contact details or passwords in raw QR code form.
        </p>
        <h3 className="text-lg font-bold text-[#191923]">3. Row Level Security & Authorization</h3>
        <p>
          All student records and team rosters are protected through PostgreSQL Row Level Security (RLS). Organizers can only inspect attendance data for events they are authorized to manage.
        </p>
      </div>
    </div>
  );
}
