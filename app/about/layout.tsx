import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Dechante Chang',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
