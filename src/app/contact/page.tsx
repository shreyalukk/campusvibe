'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulate client submission dispatch for Stage 1
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 800);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <Badge variant="primary">Get in Touch</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191923] tracking-tight">
          Contact the CampusVibe Team
        </h1>
        <p className="text-sm sm:text-base text-[#555568]">
          Have questions about registering your event, organizing a hackathon, or resolving a ticket pass query? We are here to support you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        {/* Contact Info (Left 5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#191923] text-white p-8 rounded-3xl space-y-6 shadow-md">
            <h3 className="text-xl font-bold">Campus Support Office</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our campus coordination desk operates Monday through Saturday to help students,
              technical clubs, and academic departments.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8E65FF] shrink-0 mt-0.5" />
                <span>Student Affairs & Innovation Building, Room 204, Main Campus</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8E65FF] shrink-0" />
                <span>support@campusvibe.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8E65FF] shrink-0" />
                <span>+1 (800) 226-7870</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ highlight */}
          <div className="p-6 rounded-3xl bg-[#F5F5F8] border border-gray-200/90 space-y-3">
            <div className="flex items-center gap-2 text-[#6D45D9]">
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Quick Note</span>
            </div>
            <p className="text-xs text-[#555568] leading-relaxed">
              Are you an official student club president looking for organizer privileges?
              Contact the Dean of Student Welfare office to whitelist your department organizer email.
            </p>
          </div>
        </div>

        {/* Contact Form (Right 7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/90 p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#E7F6F0] text-[#22A06B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#191923]">Inquiry Recorded!</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your message has been safely received.
                Our student support desk will reply to <strong>{formData.email}</strong> shortly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-[#191923] pb-2 border-b border-gray-100">
                Send Us a Message
              </h3>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#191923]">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9] transition-all ${
                    errors.name ? 'border-rose-300 bg-rose-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#191923]">
                  University / College Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex.m@college.edu"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9] transition-all ${
                    errors.email ? 'border-rose-300 bg-rose-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#191923]">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question regarding HackVibe team registration"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9] transition-all ${
                    errors.subject ? 'border-rose-300 bg-rose-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.subject && <p className="text-xs text-rose-500">{errors.subject}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#191923]">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your query or feedback in detail..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#6D45D9] transition-all ${
                    errors.message ? 'border-rose-300 bg-rose-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                isLoading={loading}
                rightIcon={<Send className="w-4 h-4" />}
              >
                Submit Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
