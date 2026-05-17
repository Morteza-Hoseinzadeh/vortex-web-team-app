'use client';

import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0A0D1A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradients */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: { xs: 3, sm: 4, md: 6 } }}>
        {/* Logo Container */}
        <Box sx={{ width: { xs: 70, sm: 90, md: 110 }, height: { xs: 70, sm: 90, md: 110 }, mx: 'auto', mb: 4, position: 'relative', animation: 'logoPulse 2s ease-in-out infinite', '@keyframes logoPulse': { '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 0px rgba(107, 78, 255, 0))' }, '50%': { transform: 'scale(1.05)', filter: 'drop-shadow(0 0 20px rgba(107, 78, 255, 0.5))' }, '100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 0px rgba(107, 78, 255, 0))' } } }}>
          <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" fill priority style={{ objectFit: 'contain' }} />
        </Box>

        {/* Title with Gradient */}
        <Typography component="h1" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 3 }}>
          تیم طراحی سایت ورتکس
        </Typography>

        {/* Loading Text with Dots Animation */}
        <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.5)', mb: 3, letterSpacing: '2px' }}>
          در حال بارگذاری
          <Box component="span" sx={{ display: 'inline-block', width: 60, textAlign: 'left', '&::after': { content: '"..."', display: 'inline-block', animation: 'dots 1.5s steps(4, end) infinite' }, '@keyframes dots': { '0%, 20%': { content: '"."' }, '40%': { content: '".."' }, '60%, 100%': { content: '"..."' } } }} />
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ width: { xs: '280px', sm: '320px', md: '400px' }, maxWidth: '90%', mx: 'auto', mb: 2 }}>
          <Box sx={{ width: '100%', height: '3px', bgcolor: 'rgba(107, 78, 255, 0.2)', borderRadius: '3px', overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8)', borderRadius: '3px', transition: 'width 0.3s ease', position: 'relative', '&::after': { content: '""', position: 'absolute', top: 0, right: 0, width: '20px', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3))', borderRadius: '3px' } }} />
          </Box>
        </Box>

        {/* Progress Percentage */}
        <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'monospace' }}>{Math.floor(progress)}%</Typography>
      </Box>

      {/* Footer Text */}
      <Typography sx={{ position: 'absolute', bottom: { xs: 20, sm: 30, md: 40 }, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: 'rgba(255, 255, 255, 0.25)', textAlign: 'center', width: '100%', zIndex: 2 }}>© ۱۴۰۴ ورتکس — در حال آماده‌سازی تجربه‌ای بی‌نظیر برای شما</Typography>
    </Box>
  );
}
