import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  result: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}