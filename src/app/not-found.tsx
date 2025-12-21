'use client';

import { Box, Button, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'rgba(10, 5, 30, 0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: 3, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* پس‌زمینه تزئینی */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
        {/* عنوان اصلی */}
        <Typography component="h1" sx={{ fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' }, fontWeight: 900, color: '#fff', mb: 3, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ۴۰۴
        </Typography>

        <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800, color: '#fff', mb: 3 }}>
          اوپس! صفحه پیدا نشد
        </Typography>

        <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', mb: 6, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>به نظر می‌رسه آدرس مورد نظر وجود نداره یا حذف شده. نگران نباش، ما کمکت می‌کنیم به مسیر درست برگردی!</Typography>

        {/* دکمه‌های اقدام */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center' }}>
          <Button component={Link} href="/" variant="contained" size="large" sx={{ px: { xs: 5, md: 7 }, py: { xs: 2, md: 2.5 }, borderRadius: '32px', fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 800, bgcolor: '#fff', color: '#000', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transition: 'all 0.4s ease', '&:hover': { bgcolor: '#f0f0f0', transform: 'translateY(-6px) scale(1.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' } }}>
            بازگشت به خانه
          </Button>

          <Button
            component="a"
            href="https://wa.me/989309363715"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              px: { xs: 5, md: 7 },
              py: { xs: 2, md: 2.5 },
              borderRadius: '32px',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 800,
              bgcolor: 'rgba(255,255,255,0.12)',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.22)',
                transform: 'translateY(-6px) scale(1.05)',
                borderColor: '#fff',
              },
            }}
          >
            <Box component="span" sx={{ fontSize: '1.6rem' }}>
              💬
            </Box>
            چت با پشتیبانی
          </Button>
        </Box>

        {/* متن کوچک پایین */}
        <Typography sx={{ mt: 8, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>© ۱۴۰۴ ورتکس — همه حقوق محفوظ است</Typography>
      </Box>
    </Box>
  );
}
