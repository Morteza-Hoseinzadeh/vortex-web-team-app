'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// Custom GSAP Hook
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import CustomSnackbar from './custom/CustomSnackbar';

// Dynamic imports (no SSR for performance + animation safety)
const Navbar = dynamic(() => import('@/components/UI/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/UI/Footer'), { ssr: false });

export default function ChildrenLayout({ children }: { children: React.ReactNode }) {
  // Refs for animation
  const navbarRef = useRef<HTMLDivElement | any>(null);
  const footerRef = useRef<HTMLDivElement | any>(null);

  const [snackbarState, setSnackbarState] = useState({ open: false, message: '', variant: 'warning' as const });

  const closeSnackbar = () => {
    setSnackbarState((prev: any) => ({ ...prev, open: false }));
  };

  // Animations – each part appears with different style
  useScrollAnimation(navbarRef, {
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    delay: 0.3,
  });

  useScrollAnimation(footerRef, {
    from: { scale: 0.95, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 1.1, ease: 'back.out(1.2)' },
    delay: 0.4,
  });

  return (
    <>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar with animation */}
        <Box ref={navbarRef}>
          <Navbar snackbarState={snackbarState} setSnackbarState={setSnackbarState} />
        </Box>

        {/* Main Content - all sections animated together */}
        <Box component="main" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
          {children}
        </Box>

        {/* Footer with animation */}
        <Box ref={footerRef}>
          <Footer />
        </Box>
      </Box>
      <CustomSnackbar open={snackbarState.open} onClose={closeSnackbar} autoHideDuration={5000} variant={snackbarState.variant}>
        {snackbarState.message}
      </CustomSnackbar>
      ;
    </>
  );
}
