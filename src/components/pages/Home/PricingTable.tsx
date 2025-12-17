'use client';

import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

export default function PricingTable() {
  const theme = useTheme();

  const plans = [
    {
      title: 'پکیج عطارد',
      price: 'از ۶-۹ میلیون تومان',
      planetEmoji: '🔵',
      features: ['مناسب کسب‌وکارهای کوچک و شخصی', 'طراحی استاندارد و ریسپانسیو', 'سئو اولیه', 'پشتیبانی ۳ ماهه رایگان'],
      recommended: false,
    },
    {
      title: 'پکیج زمین',
      price: 'از ۱۲-۱۶ میلیون تومان',
      planetEmoji: '🌍',
      features: ['مناسب فروشگاه‌های آنلاین بزرگ', 'طراحی کاملاً اختصاصی', 'سئو پیشرفته + محتوا', 'پشتیبانی ۱۲ ماهه رایگان'],
      recommended: true,
    },
    {
      title: 'پکیج زهره',
      price: 'از ۹-۱۲ میلیون تومان',
      planetEmoji: '🪐',
      features: ['مناسب کسب‌وکارهای متوسط', 'طراحی پیشرفته + گرافیک اختصاصی', 'سئو حرفه‌ای', 'پشتیبانی ۶ ماهه رایگان'],
      recommended: false,
    },
    {
      title: 'پکیج مریخ',
      price: 'از ۱۶-۲۲ میلیون تومان',
      planetEmoji: '🔴',
      features: ['مناسب پروژه‌های پیچیده و سفارشی', 'امکانات پیشرفته + پنل مدیریت', 'یکپارچه‌سازی API', 'پشتیبانی مادام‌العمر'],
      recommended: false,
    },
    {
      title: 'پکیج مشتری',
      price: 'از ۲۲ میلیون تومان به بالا',
      planetEmoji: '🟠',
      features: ['مناسب استارت‌آپ‌ها و سازمان‌های بزرگ', 'توسعه کامل + بک‌اند اختصاصی', 'مشاوره بازاریابی دیجیتال', 'پشتیبانی VIP + به‌روزرسانی مداوم'],
      recommended: false,
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14, lg: 16 }, px: { xs: 3, md: 6, lg: 8 }, bgcolor: 'rgba(10, 5, 30, 0.95)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <Box mb={{ xs: 8, md: 12 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' }, fontWeight: 900, color: '#fff', mb: 3, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
          جدول تعرفه‌ها
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '800px', mx: 'auto' }}>
          هر پکیج مانند یک سیاره، امکانات و قدرتی منحصر به فرد دارد <br /> بهترین را برای کسب‌وکارتان انتخاب کنید
        </Typography>
      </Box>

      {/* Pricing Cards Grid */}
      <Box sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: { xs: 4, md: 6 }, maxWidth: '100%', mx: 'auto' }}>
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              bgcolor: 'rgba(107, 78, 255, 0.22)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(107, 78, 255, 0.4)',
              borderRadius: '40px',
              p: { xs: 2, md: 4 },
              mt: plan.recommended ? 8 : 0,
              boxShadow: plan.recommended ? '0 24px 70px rgba(107, 78, 255, 0.5)' : '0 16px 50px rgba(107, 78, 255, 0.25)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: plan.recommended ? 'translateY(-30px) scale(1.06)' : 'none',
              zIndex: plan.recommended ? 10 : 1,
              overflow: 'hidden',
              '&:hover': { transform: 'translateY(-30px) scale(1.06)', bgcolor: 'rgba(107, 78, 255, 0.32)', boxShadow: '0 32px 90px rgba(107, 78, 255, 0.5)' },
              '&::before': plan.recommended ? { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, #6B4EFF, #A78BFA, #E0AAFF)', borderRadius: '40px 40px 0 0' } : {},
            }}
          >
            {/* Recommended Badge */}
            {plan.recommended && <Box sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', bgcolor: '#fff', color: '#000', px: 5, py: 1.5, borderRadius: '30px', fontWeight: 900, fontSize: { xs: '0.9rem', md: '1rem' }, boxShadow: '0 12px 32px rgba(0,0,0,0.4)', zIndex: 20 }}>🌟پیشنهادی ما🌟</Box>}

            {/* Planet Emoji with 3D-like styling */}
            <Box sx={{ fontSize: { xs: '7rem', md: '9rem' }, filter: 'drop-shadow(0 16px 48px rgba(107, 78, 255, 0.6))', transition: 'all 0.5s ease', '&:hover': { transform: 'scale(1.15) rotate(12deg)', filter: 'drop-shadow(0 24px 64px rgba(107, 78, 255, 0.8))' } }}>{plan.planetEmoji}</Box>

            {/* Title */}
            <Typography sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' }, fontWeight: 900, color: '#fff', mb: 2 }}>{plan.title}</Typography>

            {/* Price */}
            <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: theme.palette.primary.light, mb: 4 }}>{plan.price}</Typography>

            {/* Features */}
            <Box component="ul" sx={{ textAlign: 'right', mb: 5 }}>
              {plan.features.map((feature, i) => (
                <Typography key={i} component="li" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.95)', mb: 2.5, pl: 3, position: 'relative', '&::before': { content: '"✦"', position: 'absolute', right: -20, color: theme.palette.primary.main, fontSize: '1.2rem' } }}>
                  {feature}
                </Typography>
              ))}
            </Box>

            {/* CTA Button */}
            <Button fullWidth sx={{ py: { xs: 2, md: 2.5 }, borderRadius: '32px', fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 800, bgcolor: plan.recommended ? '#fff' : 'rgba(255,255,255,0.12)', color: plan.recommended ? '#000' : '#fff', backdropFilter: 'blur(12px)', border: plan.recommended ? 'none' : '2px solid rgba(255,255,255,0.3)', transition: 'all 0.4s ease', '&:hover': { bgcolor: plan.recommended ? '#f0f0f0' : 'rgba(255,255,255,0.22)', transform: 'scale(1.06)' } }}>
              انتخاب این پکیج
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
