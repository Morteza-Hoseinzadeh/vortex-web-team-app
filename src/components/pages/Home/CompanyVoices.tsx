'use client';

import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { BsMusicPlayer } from 'react-icons/bs';

export default function CompanyVoices() {
  const theme = useTheme();

  const voices = [
    { logo: '/assets/logo/company-logo/dorna-logo.png', name: 'کلینیک زیبایی درنا' },
    { logo: '/assets/logo/company-logo/zichat-logo.png', name: 'زیچت' },
    { logo: '/assets/logo/company-logo/rabet-automatic-kasra-logo.png', name: 'رابط اتوماتیک کسری' },
    { logo: '/assets/logo/company-logo/zephyr-logo.png', name: 'زفیـر' },
    { logo: '/assets/logo/company-logo/chroma-ui.png', name: 'کروما یو آی' },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6, lg: 8 }, px: { xs: 3, md: 6, lg: 8 }, bgcolor: 'rgba(10, 5, 30, 0.95)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <Box mb={{ xs: 8, md: 12 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' }, fontWeight: 900, color: '#fff', mb: 3, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
          نظرات مشتریان
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '900px', mx: 'auto' }}>
          بازخورد افرادی که به ورتکس اعتماد کرده‌اند و نتیجه واقعی گرفته‌اند
        </Typography>
      </Box>

      {/* Voice Messages Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: { xs: 4, md: 6 }, maxWidth: '1400px', mx: 'auto', mb: 6 }}>
        {voices.map((voice, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: 'linear-gradient(135deg, rgba(107, 78, 255, 0.3) 0%, rgba(80, 50, 150, 0.4) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(107, 78, 255, 0.5)',
              borderRadius: '32px',
              p: { xs: 4, md: 5 },
              boxShadow: '0 16px 50px rgba(107, 78, 255, 0.3)',
              transition: 'all 0.5s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-12px)',
                boxShadow: '0 28px 80px rgba(107, 78, 255, 0.45)',
                bgcolor: 'linear-gradient(135deg, rgba(107, 78, 255, 0.4) 0%, rgba(100, 70, 180, 0.5) 100%)',
              },
            }}
          >
            {/* Play Button + Waveform */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2.5, md: 4 }, mb: { xs: 4, md: 5 } }}>
              {/* Play Icon Button */}
              <IconButton aria-label="پخش نظر صوتی" sx={{ width: { xs: 56, sm: 64, md: 72 }, height: { xs: 56, sm: 64, md: 72 }, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', transition: 'all 0.4s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)', transform: 'scale(1.15)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' } }}>
                <BsMusicPlayer style={{ fontSize: '2rem' }} />
              </IconButton>

              {/* Waveform Bars */}
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[...Array(25)].map((_, i) => (
                  <Box key={i} sx={{ width: '4px', height: `${20 + Math.sin(i * 0.5) * 20 + 20}px`, bgcolor: 'rgba(255,255,255,0.6)', borderRadius: '4px', animation: 'wave 1.5s ease-in-out infinite', animationDelay: `${i * 0.05}s`, '@keyframes wave': { '0%, 100%': { height: '20px' }, '50%': { height: '50px' } } }} />
                ))}
              </Box>
            </Box>

            {/* Logo + Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
              <Box sx={{ width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 }, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                <Image src={voice.logo} alt={voice.name} width={70} height={70} style={{ objectFit: 'contain' }} />
              </Box>

              <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 800, color: '#fff' }}>{voice.name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
