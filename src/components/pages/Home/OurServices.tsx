'use client';

import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FiLayers, FiShoppingCart, FiUser, FiMonitor } from 'react-icons/fi';
import { MdOutlineDesignServices, MdOutlineSpeed } from 'react-icons/md';

export default function OurServices() {
  const theme = useTheme();

  const services = [
    {
      title: 'طراحی سایت شرکتی',
      desc: 'ساخت وب‌سایت‌های حرفه‌ای و معتبر برای معرفی برند، خدمات و ایجاد اعتماد در نگاه مشتریان',
      icon: <FiLayers size={56} />,
    },
    {
      title: 'فروشگاه اینترنتی',
      desc: 'راه‌اندازی فروشگاه آنلاین با ساختار امن، UX استاندارد و قابلیت مدیریت کامل محصولات و سفارش‌ها',
      icon: <FiShoppingCart size={56} />,
    },
    {
      title: 'UI/UX اختصاصی',
      desc: 'طراحی رابط کاربری یونیک و تجربه کاربری هدفمند برای افزایش رضایت، تعامل و فروش',
      icon: <MdOutlineDesignServices size={56} />,
    },
    {
      title: 'سایت شخصی / رزومه',
      desc: 'طراحی صفحات شخصی حرفه‌ای برای نمایش نمونه‌کار، مهارت‌ها و ساخت یک هویت آنلاین جذاب',
      icon: <FiUser size={56} />,
    },
    {
      title: 'پنل مدیریتی',
      desc: 'ساخت داشبوردهای مدرن و قابل گسترش برای مدیریت کامل داده‌ها، کاربران و محتوای وب‌سایت',
      icon: <FiMonitor size={56} />,
    },
    {
      title: 'سئو و بهینه‌سازی',
      desc: 'بهبود رتبه سایت در نتایج گوگل، افزایش ورودی ارگانیک و تقویت دیده‌شدن کسب‌وکار',
      icon: <MdOutlineSpeed size={56} />,
    },
  ];

  return (
    <Box component="section" my={{ xs: 8, md: 12 }} px={{ xs: 3, md: 6, lg: 8 }} aria-labelledby="services-heading">
      {/* Header */}
      <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
        <Typography
          id="services-heading"
          component="h2"
          sx={{
            fontSize: { xs: '2.4rem', md: '3.4rem' },
            fontWeight: 900,
            color: 'text.primary',
            mb: 2,
          }}
        >
          🎯 خدمات ما 🎯
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '1.3rem', md: '1.9rem' },
            fontWeight: 700,
            color: 'text.secondary',
          }}
        >
          از طراحی تا بهینه‌سازی و فروش
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={{ xs: 4, md: 5 }}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
            <Box
              sx={{
                height: '100%',
                minHeight: { xs: 320, md: 360 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 3,
                p: { xs: 4, md: 5 },
                borderRadius: '32px',
                bgcolor: 'rgba(20, 10, 40, 0.45)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(107, 78, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(107, 78, 255, 0.15)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-16px)',
                  boxShadow: '0 24px 60px rgba(107, 78, 255, 0.3)',
                  borderColor: 'rgba(107, 78, 255, 0.6)',
                  bgcolor: 'rgba(20, 10, 40, 0.55)',
                },
              }}
            >
              {/* Icon with glassmorphic circle */}
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  bgcolor: 'rgba(107, 78, 255, 0.15)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid rgba(107, 78, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.main',
                  boxShadow: '0 8px 32px rgba(107, 78, 255, 0.25)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    bgcolor: 'rgba(107, 78, 255, 0.25)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {service.icon}
              </Box>

              <Typography
                component="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  color: '#fff',
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.8,
                  maxWidth: '90%',
                }}
              >
                {service.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
