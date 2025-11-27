'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Dechante Chang" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Dechante Chang</h2>
          <p>
            <a href="mailto:de411916@ucf.edu">de411916@ucf.edu</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Dechante. I am a Computer Science student at the University of Central
          Florida, expected to graduate in December 2026. I work as a freelance developer through{' '}
          <a href="https://www.techhelpfl.com/">Tech Help Florida</a>, creating custom websites and
          automation bots for clients. I also founded{' '}
          <a href="https://www.techhelpfl.com/">Tech Help Florida</a>.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Dechante Chang <Link href="/">dmchang.xyz</Link>.
        </p>
        <p style={{ fontSize: '0.8em', color: '#aaa' }}>
          Inspired by{' '}
          <a
            href="https://github.com/mldangelo/personal-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            mldangelo&apos;s personal site
          </a>
          .
        </p>
      </section>
    </section>
  );
};

export default SideBar;
