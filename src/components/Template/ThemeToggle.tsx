'use client';

import React from 'react';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
      <FontAwesomeIcon icon={(theme === 'light' ? faMoon : faSun) as IconProp} />
    </button>
  );
};

export default ThemeToggle;
