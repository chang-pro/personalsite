import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Dechante Chang is a Computer Science student, freelance developer, and full-stack engineer.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>
              A personal portfolio website built with Next.js, TypeScript, and modern web
              technologies.
            </p>
          </div>
        </header>
        <p>
          Welcome! I&apos;m Dechante Chang, a Computer Science student at the University of Central
          Florida and a freelance full-stack developer. Feel free to explore more{' '}
          <Link href="/about">about me</Link>, check out my <Link href="/resume">resume</Link>,
          browse my <Link href="/projects">projects</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or <Link href="/contact">contact</Link> me.
        </p>
        <p style={{ fontSize: '0.7em', color: '#999', marginTop: '2rem' }}>
          <em>
            Inspired by{' '}
            <a
              href="https://github.com/mldangelo/personal-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              mldangelo&apos;s personal site
            </a>
          </em>
        </p>
      </article>
    </PageWrapper>
  );
}
