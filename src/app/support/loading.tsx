'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function Loading() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'rgba(10, 5, 30, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* پس‌زمینه متحرک با ذرات بنفش (برای حس لوکس و مدرن) */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(107, 78, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)', animation: 'float 20s ease-in-out infinite', '@keyframes float': { '0%, 100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-30px) rotate(5deg)' } } }} />

      {/* لوگوی شما (مسیر رو بعداً درست کن) */}
      <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
        <Box sx={{ width: { xs: 60, sm: 80, md: 100 }, height: { xs: 60, sm: 80, md: 100 }, position: 'relative', mb: 6, animation: 'pulseGlow 2.5s ease-in-out infinite alternate', '@keyframes pulseGlow': { '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 20px rgba(107, 78, 255, 0.4))' }, '100%': { transform: 'scale(1.08)', filter: 'drop-shadow(0 0 40px rgba(107, 78, 255, 0.7))' } } }}>
          <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" fill priority style={{ objectFit: 'contain' }} />
        </Box>
        <Typography component={'h1'} gutterBottom variant="h4" color="#fff" fontWeight={900}>
          تیم طراحی سایت ورتکس
        </Typography>
      </Box>

      {/* متن لودینگ با انیمیشن تایپینگ */}
      <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 700, color: '#fff', letterSpacing: '0.2em', mb: 4, opacity: 0.9 }}>
        در حال بارگذاری
        <Box component="span" sx={{ display: 'inline-block', animation: 'dots 1.5s infinite' }}>
          ...
        </Box>
      </Typography>

      {/* بار لودینگ مدرن (گرادیان متحرک) */}
      <Box sx={{ width: { xs: '80%', sm: '60%', md: '40%' }, maxWidth: '500px', height: '6px', bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '40%', bgcolor: '#fff', background: 'linear-gradient(90deg, transparent, #fff, transparent)', borderRadius: '3px', animation: 'loadingBar 2s ease-in-out infinite', '@keyframes loadingBar': { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(300%)' } } }} />
      </Box>

      {/* متن کوچک پایین */}
      <Typography sx={{ position: 'absolute', bottom: 32, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>© ۱۴۰۴ ورتکس — در حال آماده‌سازی تجربه‌ای بی‌نظیر برای شما</Typography>
    </Box>
  );
}
