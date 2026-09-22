export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'video' | 'image' | 'award';
  badge: string;
}

export interface FlyerItem {
  id: string;
  title: string; // ONLY "FLYER 01", "FLYER 02", etc.
  imageUrl: string;
  aspectRatio: string;
}

export interface CaseItem {
  id: string;
  athleteName: string;
  clubName: string;
  clubLocation: string;
  description: string;
  photoUrl: string;
  clubLogoUrl: string;
  clubLogoFallbackUrl?: string;
  videoButtonText: string;
  videoUrl: string;
  youtubeId: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: 'upload' | 'scissors' | 'film' | 'check-circle-2';
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  bulletPoints?: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: 'shield-check' | 'sparkles' | 'users' | 'focus';
}
