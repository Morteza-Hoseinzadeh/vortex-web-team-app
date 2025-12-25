'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PricingTable from '@/components/pages/Home/PricingTable';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';

export default function PricingPage() {
  // Refs برای انیمیشن‌ها
  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const pricingRef = React.useRef<HTMLDivElement | any>(null);
  const ctaRef = React.useRef<HTMLDivElement | any>(null);

  // انیمیشن هدر
  useScrollAnimation(headerRef, {
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
    delay: 0.2,
  });

  // انیمیشن جدول تعرفه‌ها
  useScrollAnimation(pricingRef, {
    from: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
    to: { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power4.out' },
    delay: 0.3,
  });

  // انیمیشن CTA نهایی
  useScrollAnimation(ctaRef, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' },
    delay: 0.4,
  });

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }} mt={28} mb={8}>
        {/* هدر اختصاصی صفحه تعرفه‌ها */}
        <Box ref={headerRef} textAlign="center">
          <Typography component="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.2rem', lg: '4.8rem' }, fontWeight: 900, color: '#fff', mb: 4, lineHeight: 1.5, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            تعرفه‌های طراحی سایت
          </Typography>

          <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.6rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.9)', maxWidth: '900px', mx: 'auto', mb: 5, lineHeight: 1.8 }}>پکیج‌های ما مثل سیاره‌های منظومه شمسی هستن — هر کدوم قدرت و امکانات منحصر به فرد خودش رو داره. بهترین گزینه رو برای کسب‌وکارتون انتخاب کنید یا با ما مشورت کنید تا پکیج سفارشی بسازیم.</Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>💎 قیمت‌ها شفاف، بدون هزینه مخفی — تضمین بهترین کیفیت</Typography>
        </Box>

        {/* جدول اصلی تعرفه‌ها */}
        <Box ref={pricingRef}>
          <PricingTable />
        </Box>

        {/* CTA نهایی در پایین صفحه - دکمه‌ها کوچکتر و متعادل‌تر */}
        <Box ref={ctaRef} sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center', py: { xs: 6, md: 8 }, px: { xs: 3, md: 6 }, bgcolor: 'rgba(107, 78, 255, 0.1)', borderRadius: '60px', border: '2px solid rgba(107, 78, 255, 0.4)', backdropFilter: 'blur(20px)', maxWidth: '900px', mx: 'auto' }}>
          <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 900, color: '#fff', mb: 3, lineHeight: 1.3 }}>کدوم پکیج مناسب شماست؟ 🤔</Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.9)', maxWidth: '700px', mx: 'auto', mb: 5, lineHeight: 1.7 }}>نمی‌دونید از کجا شروع کنید؟ مشکلی نیست! با تیم فروش ما چت کنید تا با توجه به بودجه و نیازتون، بهترین پکیج رو پیشنهاد بدیم.</Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 3, sm: 4 }, justifyContent: 'center' }}>
            {/* دکمه چت واتساپ - کوچکتر */}
            <Button
              component="a"
              href="https://wa.me/989309363715?text=سلام%20تیم%20ورتکس%20👋%0Aمی‌خوام%20در%20مورد%20تعرفه‌های%20طراحی%20سایت%20مشاوره%20بگیرم%20🙏"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                py: { xs: 1.8, md: 2.2 },
                px: { xs: 4, md: 6 },
                borderRadius: '32px',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 800,
                bgcolor: '#25D366',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                boxShadow: '0 12px 36px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                minHeight: '48px',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.04)',
                  boxShadow: '0 18px 50px rgba(37, 211, 102, 0.45)',
                },
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
                💬
              </Box>
              مشاوره رایگان در واتساپ
            </Button>

            {/* دکمه تماس تلفنی - کوچکتر */}
            <Button
              component="a"
              href="tel:+989309363715"
              sx={{ py: { xs: 1.8, md: 2.2 }, px: { xs: 4, md: 6 }, borderRadius: '32px', fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 800, bgcolor: 'rgba(255,255,255,0.12)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(12px)', transition: 'all 0.4s ease', display: 'flex', alignItems: 'center', gap: 2, minHeight: '48px', '&:hover': { bgcolor: 'rgba(255,255,255,0.22)', transform: 'translateY(-6px) scale(1.04)' } }}
            >
              <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
                📞
              </Box>
              تماس مستقیم
            </Button>
          </Box>

          <Typography sx={{ mt: { xs: 4, md: 5 }, fontSize: { xs: '0.95rem', md: '1.1rem' }, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>پاسخگویی ۲۴ ساعته — بدون تعهد خرید</Typography>
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
