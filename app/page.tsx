import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import { execSync } from 'child_process';

import PageWrapper from './components/PageWrapper';

type CommitInfo = {
  hash: string;
  date: string;
  message: string;
  author: string;
  url?: string;
  repoName?: string;
};

function getRepoInfo() {
  try {
    const remote = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
    if (!remote) return { url: null, repoName: null };

    const parseRepoName = (url: string) => {
      const trimmed = url.replace(/\.git$/, '');
      const segments = trimmed.split('/');
      return segments[segments.length - 1] || null;
    };

    if (remote.startsWith('git@')) {
      const httpsRemote = remote.replace('git@', 'https://').replace(':', '/');
      return { url: httpsRemote.replace(/\.git$/, ''), repoName: parseRepoName(httpsRemote) };
    }
    if (remote.startsWith('http://') || remote.startsWith('https://')) {
      return { url: remote.replace(/\.git$/, ''), repoName: parseRepoName(remote) };
    }
    return { url: null, repoName: null };
  } catch (error) {
    console.warn('Could not read repository URL for recent commit section.', error);
    return { url: null, repoName: null };
  }
}

function getRecentCommit(): CommitInfo | null {
  try {
    const result = execSync('git log -1 --date=short --pretty=format:"%h|%ad|%s|%an"', {
      encoding: 'utf8',
    }).trim();
    if (!result) return null;
    const [hash, date, message, author] = result.split('|');
    const { url, repoName } = getRepoInfo();
    return {
      hash,
      date,
      message,
      author,
      url: url ? `${url}/commit/${hash}` : undefined,
      repoName: repoName ?? undefined,
    };
  } catch (error) {
    console.warn('Could not read recent commit details for landing page.', error);
    return null;
  }
}

export const metadata: Metadata = {
  description:
    'Dechante Chang is a Computer Science student, freelance developer, and full-stack engineer.',
};

export default function HomePage() {
  const recentCommit = getRecentCommit();

  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About this site</Link>
            </h2>
            <p>
              A personal portfolio website built by Dechante Chang, Computer Science student and
              TechHelpFL founder, with Next.js, TypeScript, and modern web technologies.
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
        <section className="recent-work" style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Latest project from Dechante</h3>
          {recentCommit ? (
            <p>
              <strong>{recentCommit.repoName ?? 'Latest project'}</strong> — {recentCommit.message}
              <br />
              Updated {recentCommit.date} by {recentCommit.author}
              <br />
              {recentCommit.url ? (
                <>
                  {' '}
                  &middot;{' '}
                  <a href={recentCommit.url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </>
              ) : null}
            </p>
          ) : (
            <p>
              Recent commit details are unavailable right now, but you can always catch my latest
              work on{' '}
              <a href="https://github.com/chang-pro" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
          )}
        </section>
      </article>
    </PageWrapper>
  );
}
