import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div style={{ marginBottom: '4rem', width: '100%' }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      border: '2px solid #e5e7eb',
      background: '#ffffff',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}>

      {/* Media Section - Hero */}
      <div style={{
        width: '100%',
        position: 'relative',
        borderBottom: '2px solid #e5e7eb'
      }}>
        {data.video ? (
          <div style={{ position: 'relative', background: '#000', aspectRatio: '16/9' }}>
            {/* Google Drive Embed */}
            <iframe
              src={data.video}
              width="100%"
              height="100%"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div style={{ margin: 0, aspectRatio: '16/9', position: 'relative' }}>
            {data.link ? (
              <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </a>
            ) : (
              <Image
                src={data.image}
                alt={data.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div style={{ padding: '2.5rem' }}>
        <div style={{ borderBottom: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#6b7280',
            fontWeight: '700'
          }}>
            <time>{dayjs(data.date).format('MMMM YYYY')}</time>
            {data.subtitle && (
              <>
                <span>•</span>
                <span style={{ color: '#3b82f6' }}>{data.subtitle.split(',')[0]}</span>
              </>
            )}
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            margin: '0.5rem 0',
            lineHeight: 1.1,
            color: '#111827',
            letterSpacing: '-0.02em'
          }}>
            {data.link ? (
              <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', borderBottom: 'none', color: '#111827' }}>
                {data.title}
              </a>
            ) : (
              data.title
            )}
          </h2>

          {data.subtitle && (
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#6b7280', fontWeight: '500' }}>
              {data.subtitle}
            </p>
          )}
        </div>

        <div style={{
          fontSize: '1.2rem',
          lineHeight: 1.7,
          color: '#374151',
          marginBottom: '2rem',
          fontWeight: '400'
        }}>
          <p style={{ margin: 0 }}>{data.desc}</p>
        </div>

        {/* Action Section */}
        {data.link && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                height: 'auto',
                lineHeight: 1.5,
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
            >
              Visit Website →
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Cell;
