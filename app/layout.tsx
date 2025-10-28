import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

import ThemeProviderWrapper from './providers/ThemeProviderWrapper';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dechante Chang',
    template: '%s | Dechante Chang',
  },
  description:
    "Dechante Chang's personal website. Computer Science student, freelance developer, and full-stack engineer.",
  keywords: [
    'Dechante Chang',
    'computer science',
    'freelance developer',
    'full-stack developer',
    'engineer',
    'portfolio',
    'UCF',
  ],
  authors: [{ name: 'Dechante Chang' }],
  creator: 'Dechante Chang',
  metadataBase: new URL('https://dmchang.xyz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dmchang.xyz',
    siteName: 'Dechante Chang',
    title: 'Dechante Chang',
    description: 'Computer Science student, freelance developer, and full-stack engineer.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Dechante Chang',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`} data-theme="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/favicon/apple-icon-precomposed.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/images/favicon/android-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/android-icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/images/favicon/android-icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/images/favicon/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/images/favicon/android-icon-36x36.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
        <link rel="manifest" href="/images/favicon/manifest.json" />
      </head>
      <body>
        <ThemeProviderWrapper>
          <div id="wrapper">
            <Navigation />
            {children}
          </div>
        </ThemeProviderWrapper>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
