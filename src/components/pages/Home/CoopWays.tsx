'use client';

import { Box, Typography, useTheme } from '@mui/material';

export default function CoopWays() {
  const theme = useTheme();

  const steps = [
    {
      number: '۱',
      title: 'دریافت نیاز و تحلیل پروژه',
      desc: 'در این مرحله اهداف کسب‌وکار، نوع مخاطبان، امکانات موردنیاز و نمونه‌های مدنظر شما را بررسی می‌کنیم تا مسیر درست اجرای پروژه مشخص شود.',
    },
    {
      number: '۲',
      title: 'طراحی رابط و تجربه کاربری (UI/UX)',
      desc: 'بر اساس تحلیل مرحله قبل، ساختار صفحات، تجربه کاربری و طراحی بصری سایت به‌صورت اصولی و کاربرمحور انجام می‌شود.',
    },
    {
      number: '۳',
      title: 'توسعه و پیاده‌سازی سایت',
      desc: 'طراحی نهایی به کد تبدیل شده و سایت با استفاده از تکنولوژی‌های مدرن، بهینه، سریع و واکنش‌گرا توسعه داده می‌شود.',
    },
    {
      number: '۴',
      title: 'تحویل نهایی و پشتیبانی',
      desc: 'پس از تست کامل، سایت تحویل داده می‌شود و در صورت نیاز، پشتیبانی، آموزش و بهینه‌سازی‌های بعد از تحویل انجام خواهد شد.',
    },
  ];

  return (
    <Box component="section" sx={{ py: 6, px: 2, bgcolor: 'rgba(10, 5, 30, 0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(107, 78, 255, 0.2)', borderBottom: '1px solid rgba(107, 78, 255, 0.2)', textAlign: 'center' }}>
      {/* Header */}
      <Box mb={{ xs: 6, md: 8 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' }, fontWeight: 900, color: '#fff', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <span role="img" aria-label="lightning">
            ⚡
          </span>
          فرآیند همکاری
          <span role="img" aria-label="lightning">
            ⚡
          </span>
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '800px', mx: 'auto' }}>
          فرآیند همکاری در ورتکس ساده، شفاف و مرحله‌به‌مرحله است
        </Typography>
      </Box>

      {/* Timeline Line */}
      <Box sx={{ position: 'relative', width: '100%', mx: 'auto', mb: { xs: 4, md: 6 } }}>
        {/* Main Line */}
        <Box sx={{ display: { xs: 'none', lg: 'inline' }, height: '4px', bgcolor: 'rgba(107, 78, 255, 0.4)', borderRadius: '2px', position: 'absolute', top: '50%', left: { xs: '10%', md: '8%' }, right: { xs: '10%', md: '8%' }, transform: 'translateY(-50%)', zIndex: 1 }} />

        {/* Steps */}
        <Box display="flex" justifyContent="space-between" position="relative" zIndex="2" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}>
          {steps.map((step, index) => (
            <Box key={index} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              {/* Number Circle */}
              <Box
                sx={{
                  width: { xs: 70, md: 90 },
                  height: { xs: 70, md: 90 },
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: '2.4rem', md: '3rem' },
                  fontWeight: 900,
                  color: '#fff',
                  boxShadow: '0 12px 40px rgba(107, 78, 255, 0.5)',
                  transition: 'all 0.4s ease',
                  '&:hover': { transform: 'scale(1.15)', boxShadow: '0 20px 60px rgba(107, 78, 255, 0.6)' },
                }}
              >
                {step.number}
              </Box>

              {/* Card */}
              <Box sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, maxWidth: 320, p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(107, 78, 255, 0.25)', backdropFilter: 'blur(16px)', border: '1px solid rgba(107, 78, 255, 0.4)', boxShadow: '0 12px 40px rgba(107, 78, 255, 0.25)', transition: 'all 0.4s ease', '&:hover': { transform: 'translateY(-12px)', bgcolor: 'rgba(107, 78, 255, 0.35)', boxShadow: '0 20px 60px rgba(107, 78, 255, 0.35)' } }}>
                <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 900, color: '#fff', mb: 2 }}>{step.title}</Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8 }}>{step.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
