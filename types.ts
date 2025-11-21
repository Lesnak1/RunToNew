import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: 'Boat' | 'Adrenaline' | 'History' | 'Nature';
  price?: string;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}
