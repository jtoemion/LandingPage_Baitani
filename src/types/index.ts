export type DayOfWeek = 'Sunday' | 'Saturday' | 'Wednesday' | 'Friday';

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageUrl: string;
  altText: string;
}

export interface ScheduleItem {
  id: string;
  name: string;
  dayOfWeek: DayOfWeek;
  dayNameIndo: string;
  time: string;
  targetHour: number;
  targetMinute: number;
  location: string;
  livestreamUrl?: string;
  isMainService: boolean;
  audience: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  category: 'Ibadah Spesial' | 'Pemuda' | 'Keluarga' | 'Doa & Puasa' | 'Seminar';
  description: string;
  imageUrl: string;
  registrationUrl?: string;
}

export interface Ministry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  meetingTime: string;
  leader: string;
  imageUrl: string;
  category: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    instagram?: string;
    youtube?: string;
    email?: string;
  };
}

export type IntentType = 'new' | 'serve' | 'prayer' | 'counseling';

export interface ConnectIntentSubmission {
  intent: IntentType;
  fullName: string;
  phone: string;
  email?: string;
  notes: string;
  preferredContact: 'whatsapp' | 'call' | 'email';
}
