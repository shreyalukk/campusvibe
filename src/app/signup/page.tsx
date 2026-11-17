'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Lock, Mail, User, School } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Stage 1 Preview: Real Supabase Auth will be activated in Stage 5.');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F5F8]/40">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-10 space-y-8 shadow-xs">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#6D45D9] text-white flex items-center justify-center mx-auto shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#191923]">Create Student Account</h2>
          <p className="text-xs text-[#555568]">
            Join 12,000+ students registering for hackathons, workshops, and campus fests
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#191923]">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#191923]">
              College / University
            </label>
            <div className="relative">
              <School className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                placeholder="National Institute of Technology"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#191923]">
              University Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex.m@college.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#191923]">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Minimum 8 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9]"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="md" fullWidth>
            Create Free Account
          </Button>
        </form>

        <div className="text-center text-xs text-[#555568] pt-2 border-t border-gray-100">
          Already have an account?{' '}
          <Link href="/login" className="text-[#6D45D9] font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
