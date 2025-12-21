'use client';

import { Box, Button, Typography } from '@mui/material';

export default function PortfolioTitles() {
  return (
    <Box sx={{ mt: { xs: 4, md: 8 }, textAlign: 'center', py: { xs: 6, md: 8 }, px: { xs: 3, md: 6 }, bgcolor: 'rgba(107, 78, 255, 0.08)', borderRadius: '60px', border: '2px solid rgba(107, 78, 255, 0.3)', backdropFilter: 'blur(16px)', maxWidth: '900px', mx: 'auto' }}>
      <Typography sx={{ fontSize: { xs: '1.6rem', md: '2.2rem', lg: '2.4rem' }, fontWeight: 900, color: '#fff', mb: { xs: 3, md: 4 }, lineHeight: 1.4 }}>آماده‌اید پروژه بعدی‌تون با ما باشه؟ 🚀</Typography>
      <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.85)', maxWidth: '700px', mx: 'auto', mb: { xs: 5, md: 6 }, lineHeight: 1.7 }}>از نمونه‌کارها خوشتون اومد؟ عالیه! همین حالا با تیم ما چت کنید و پروژه‌تون رو شروع کنیم.</Typography>

      <Button
        component="a"
        href="https://wa.me/989309363715?text=سلام%20تیم%20ورتکس%20👋%0Aاز%20نمونه%E2%80%8Cکارهای%20شما%20خیلی%20خوشم%20اومد!%0Aمی‌خوام%20در%20مورد%20طراحی%20سایت%20صحبت%20کنیم%20🙏"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          py: { xs: 2, md: 2.4 },
          px: { xs: 5, md: 7 },
          borderRadius: '32px',
          fontSize: { xs: '1.05rem', md: '1.25rem' },
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
          '&:hover': { transform: 'translateY(-6px) scale(1.04)', boxShadow: '0 20px 50px rgba(37, 211, 102, 0.45)' },
        }}
      >
        <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
          💬
        </Box>
        همین حالا چت کنیم
      </Button>

      <Typography sx={{ mt: { xs: 4, md: 5 }, fontSize: { xs: '0.9rem', md: '1rem' }, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>پاسخگویی ۲۴ ساعته — مشاوره رایگان</Typography>
    </Box>
  );
}
