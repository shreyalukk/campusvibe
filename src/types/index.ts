export type EventCategory =
  | 'Hackathons'
  | 'Coding Competitions'
  | 'Technical Workshops'
  | 'Cultural Festivals'
  | 'Dance and Music'
  | 'Sports'
  | 'Seminars'
  | 'Guest Lectures'
  | 'Entrepreneurship'
  | 'Clubs and Student Activities';

export type EventStatus = 'published' | 'draft' | 'closed';

export interface Event {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: EventCategory;
  poster_url: string;
  venue: string;
  start_time: string; // ISO format: e.g. "2026-11-15T09:00:00"
  end_time: string;
  registration_deadline: string;
  capacity: number;
  registered_count: number;
  eligibility: string;
  minimum_team_size: number;
  maximum_team_size: number;
  fee_amount: number; // 0 = Free
  status: EventStatus;
  organizer_id?: string;
  organizer_name: string;
  organizer_department?: string;
  organizer_email?: string;
  rules?: string[];
  schedule?: {
    time: string;
    title: string;
    description?: string;
  }[];
  prizes?: {
    rank: string;
    reward: string;
  }[];
  featured?: boolean;
}

export interface Registration {
  id: string;
  event_id: string;
  student_id: string;
  team_id?: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  created_at: string;
  ticket_token: string;
}

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  college: string;
  department: string;
  role: 'student' | 'organizer' | 'admin';
  avatar_url?: string;
}
