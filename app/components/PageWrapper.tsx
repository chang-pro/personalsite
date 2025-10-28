'use client';

import React, { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import SideBar from '@/components/Template/SideBar';
import ThemeToggle from '@/components/Template/ThemeToggle';

interface PageWrapperProps {
  children: React.ReactNode;
  fullPage?: boolean;
}

export default function PageWrapper({ children, fullPage = false }: PageWrapperProps) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeToggle />
      <div id="main">{children}</div>
      {!fullPage && <SideBar />}
    </>
  );
}
