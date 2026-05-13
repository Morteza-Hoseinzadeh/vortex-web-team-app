'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PricingTable from '@/components/pages/Home/PricingTable';
import ChildrenLayout from '@/components/ChildrenLayout';

function HeaderSection() {
  return (
    <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
      <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
        تعرفه‌های{' '}
        <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          طراحی سایت
        </Box>
      </Typography>

      <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '800px', mx: 'auto', mb: 3, lineHeight: 1.8 }}>پکیج‌های ما مثل سیاره‌های منظومه شمسی هستند — هر کدوم قدرت و امکانات منحصر به فرد خودش رو داره. بهترین گزینه رو برای کسب‌وکارتون انتخاب کنید یا با ما مشورت کنید تا پکیج سفارشی بسازیم.</Typography>

      <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.5)', display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.8, borderRadius: '30px' }}>💎 قیمت‌ها شفاف، بدون هزینه مخفی — تضمین بهترین کیفیت</Typography>
    </Box>
  );
}

function CTASection() {
  return (
    <Box sx={{ mb: 6}}>
      {/* CTA Section */}
      <Box sx={{ textAlign: 'center', py: { xs: 5, sm: 6, md: 7 }, px: { xs: 3, sm: 4, md: 5 }, bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', borderRadius: '40px', border: '1px solid rgba(107, 78, 255, 0.2)', maxWidth: '900px', mx: 'auto' }}>
        <Typography sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
          کدوم پکیج مناسب شماست؟
          <Box component="span" sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' }, ml: 1 }}>
            🤔
          </Box>
        </Typography>

        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '600px', mx: 'auto', mb: 4, lineHeight: 1.7 }}>نمی‌دونید از کجا شروع کنید؟ مشکلی نیست! با تیم فروش ما چت کنید تا با توجه به بودجه و نیازتون، بهترین پکیج رو پیشنهاد بدیم.</Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 3 }, justifyContent: 'center', mb: 4 }}>
          <Button
            component="a"
            href="https://wa.me/989309363715?text=سلام%20تیم%20ورتکس%20👋%0Aمی‌خوام%20در%20مورد%20تعرفه‌های%20طراحی%20سایت%20مشاوره%20بگیرم%20🙏"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Box component="span" sx={{ fontSize: '1.2rem' }}>
                💬
              </Box>
            }
            sx={{ py: { xs: 1.2, sm: 1.3, md: 1.5 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }, fontWeight: 600, bgcolor: '#25D366', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)' } }}
          >
            مشاوره رایگان در واتساپ
          </Button>

          <Button
            component="a"
            href="tel:989309363715+"
            startIcon={
              <Box component="span" sx={{ fontSize: '1.2rem' }}>
                📞
              </Box>
            }
            sx={{ py: { xs: 1.2, sm: 1.3, md: 1.5 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }, fontWeight: 600, bgcolor: 'transparent', color: '#fff', border: '1px solid rgba(107, 78, 255, 0.4)', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.1)', borderColor: '#6B4EFF', transform: 'translateY(-2px)' } }}
          >
            تماس مستقیم
          </Button>
        </Box>

        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, color: 'rgba(255, 255, 255, 0.4)', fontStyle: 'italic' }}>پاسخگویی ۲۴ ساعته — بدون تعهد خرید</Typography>
      </Box>
    </Box>
  );
}

export default function PricingPage() {
  return (
    <ChildrenLayout>
      <Box mt={24}>
        <HeaderSection />
        <PricingTable />
        <CTASection />
      </Box>
    </ChildrenLayout>
  );
}
