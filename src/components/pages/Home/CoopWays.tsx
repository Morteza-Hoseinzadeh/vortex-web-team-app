'use client';

import { Box, Typography, useTheme, Paper } from '@mui/material';
import { MdOutlineDesignServices, MdOutlineSettingsSuggest, MdOutlineSupportAgent, MdOutlineAnalytics } from 'react-icons/md';

export default function CoopWays() {
  const theme = useTheme();

  const steps = [
    {
      number: '۰۱',
      title: 'دریافت نیاز و تحلیل',
      desc: 'اهداف کسب‌وکار، مخاطبان و امکانات موردنیاز شما رو بررسی می‌کنیم تا مسیر درست مشخص بشه.',
      icon: <MdOutlineAnalytics size={32} />,
      color: '#6B4EFF',
    },
    {
      number: '۰۲',
      title: 'طراحی UI/UX',
      desc: 'ساختار صفحات و تجربه کاربری رو بر اساس نیاز شما طراحی می‌کنیم تا سایت کاربرپسند باشه.',
      icon: <MdOutlineDesignServices size={32} />,
      color: '#FF4FD8',
    },
    {
      number: '۰۳',
      title: 'توسعه و پیاده‌سازی',
      desc: 'طراحی به کد تبدیل میشه با تکنولوژی‌های مدرن، سریع و واکنش‌گرا.',
      icon: <MdOutlineSettingsSuggest size={32} />,
      color: '#4A7DFF',
    },
    {
      number: '۰۴',
      title: 'تحویل و پشتیبانی',
      desc: 'بعد از تست کامل، سایت تحویل داده میشه و پشتیبانی همیشه در کنار شماست.',
      icon: <MdOutlineSupportAgent size={32} />,
      color: '#9B7BFF',
    },
  ];

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 8, md: 12, lg: 16 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Background Gradient */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
          <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
            HOW IT WORKS
          </Typography>

          <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            فرآیند همکاری در{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ورتکس
            </Box>
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
            ساده، شفاف و مرحله به مرحله
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Box sx={{ position: 'relative', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 3, md: 4 } }}>
          {steps.map((step, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{ p: { xs: 3, md: 4 }, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(107, 78, 255, 0.4)', bgcolor: 'rgba(20, 16, 45, 0.7)', '& .step-number': { color: step.color }, '& .step-icon': { transform: 'scale(1.1)', color: step.color } } }}
            >
              {/* Number Background */}
              <Typography className="step-number" sx={{ position: 'absolute', top: 12, right: 16, fontSize: '3rem', fontWeight: 800, color: 'rgba(107, 78, 255, 0.15)', transition: 'color 0.3s ease' }}>
                {step.number}
              </Typography>

              {/* Icon */}
              <Box className="step-icon" sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.color, mb: 2.5, transition: 'all 0.3s ease' }}>
                {step.icon}
              </Box>

              {/* Title */}
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', mb: 1.5, lineHeight: 1.4 }}>{step.title}</Typography>

              {/* Description */}
              <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>{step.desc}</Typography>

              {/* Bottom Line */}
              <Box sx={{ width: '40px', height: '2px', bgcolor: step.color, mt: 2.5, borderRadius: '2px', opacity: 0.5, transition: 'width 0.3s ease', '.step-icon:hover &': { width: '60px' } }} />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
