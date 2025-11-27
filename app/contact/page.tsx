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
            <p>
              Open to internships and software roles. Freelance work runs through Tech Help Florida.
            </p>
          </div>
        </header>
        <div className="contact-grid">
          <section className="contact-card contact-intro">
            <p className="eyebrow">Internships & software roles</p>
            <h3>Let&apos;s make your next release smooth.</h3>
            <p>
              I&apos;m a Computer Science student at UCF looking for impactful internship or
              entry-level software roles. For automation or client projects, head to{' '}
              <a href="https://www.techhelpfl.com/" target="_blank" rel="noopener noreferrer">
                Tech Help Florida
              </a>
              . Expect thoughtful responses, clean handoffs, and clear timelines.
            </p>
            <div className="contact-meta">
              <div className="meta-row">
                <span className="label">Email</span>
                <EmailLink />
              </div>
              <div className="meta-row">
                <span className="label">Based</span>
                <span>Orlando, FL (remote-friendly)</span>
              </div>
              <div className="meta-row">
                <span className="label">Focus</span>
                <span>Full-stack web, automations, dashboards</span>
              </div>
              <div className="meta-row">
                <span className="label">Response</span>
                <span>Under 24 hours on weekdays</span>
              </div>
            </div>
            <div className="cta-row">
              <a
                className="button"
                href="https://drive.google.com/file/d/1sFqXpQ1rCmV40zyHyhWsZ1uPz4CRoSdl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <ContactIcons />
            </div>
          </section>

          <section className="contact-card contact-form-card">
            <h3>Share your role or internship</h3>
            <p className="form-subtitle">Tell me about the team, tech stack, and how I can help.</p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div className="form-grid">
                <label htmlFor="name">
                  Name
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label htmlFor="projectType">
                  Role or area
                  <input
                    id="projectType"
                    name="projectType"
                    type="text"
                    placeholder="Internship, SWE, automation, etc."
                  />
                </label>
                <label htmlFor="timeline">
                  Start date
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g., Summer 2025"
                  />
                </label>
              </div>
              <label htmlFor="message">
                What would you like to collaborate on?
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Team, product, tech stack, links, and context welcome."
                  required
                />
              </label>
              <div className="form-actions">
                <button type="submit" className="button">
                  Send message
                </button>
                <p className="note">
                  You&apos;ll also get a copy of your message for your records.
                </p>
              </div>
            </form>
          </section>
        </div>
      </article>
    </PageWrapper>
  );
}
