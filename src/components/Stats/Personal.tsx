'use client';

import React, { useEffect, useState } from 'react';

import data from '../../data/stats/personal';
import GraduationCountdown from './GraduationCountdown';
import Table from './Table';
import { StatData } from './types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-09-25T09:24:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const PersonalStats: React.FC = () => {
  // Create the data array with the Age component dynamically
  const statsData: StatData[] = data.map((stat) => {
    if (stat.key === 'age') {
      return {
        ...stat,
        value: <Age />,
      };
    }
    if (stat.key === 'graduation') {
      return {
        ...stat,
        value: <GraduationCountdown />,
      };
    }
    return stat;
  });

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={statsData} />
    </>
  );
};

export default PersonalStats;
