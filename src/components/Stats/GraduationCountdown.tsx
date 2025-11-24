'use client';

import React, { useEffect, useState } from 'react';

const GraduationCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set graduation date to December 15, 2026 (approximate end of semester)
    const graduationDate = new Date('2026-12-15T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = graduationDate - now;

      if (distance < 0) {
        setTimeLeft('Graduated!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <span>Loading...</span>;
  }

  return <span>{timeLeft}</span>;
};

export default GraduationCountdown;
