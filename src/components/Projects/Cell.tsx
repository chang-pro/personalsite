import React from 'react';

import Image from 'next/image';

import dayjs from 'dayjs';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          {data.link ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.title}
            </a>
          ) : (
            data.title
          )}
        </h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      {data.link ? (
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="image">
          <Image src={data.image} alt={data.title} width={600} height={400} />
        </a>
      ) : (
        <div className="image">
          <Image src={data.image} alt={data.title} width={600} height={400} />
        </div>
      )}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
