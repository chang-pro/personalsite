import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dechante Chang via email @ de411916@ucf.edu',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch! You can email me at:</p>
          <EmailLink />
          <div style={{ marginTop: '20px' }}>
            <p>
              <strong>For jobs and work opportunities:</strong> de411916@ucf.edu
            </p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p>Or download my resume:</p>
            <a
              href="https://drive.google.com/file/d/1sFqXpQ1rCmV40zyHyhWsZ1uPz4CRoSdl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
