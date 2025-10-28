'use client';

import React from 'react';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTheme } from '@/contexts/ThemeContext';

const MobileThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="mobile-theme-toggle" aria-label="Toggle dark mode">
      <FontAwesomeIcon icon={(theme === 'light' ? faMoon : faSun) as IconProp} />
      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
};

export default MobileThemeToggle;
