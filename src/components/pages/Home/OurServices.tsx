'use client';

import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FiLayers, FiShoppingCart, FiUser, FiMonitor } from 'react-icons/fi';
import { MdOutlineDesignServices, MdOutlineSpeed } from 'react-icons/md';

export default function OurServices() {
  const theme = useTheme();

  const infoes = [
    { title: 'طراحی سایت شرکتی', desc: 'ساخت وب‌سایت‌های حرفه‌ای و معتبر برای معرفی برند، خدمات و ایجاد اعتماد در نگاه مشتریان', icon: <FiLayers size={52} color={theme.palette.text.primary} /> },
    { title: 'فروشگاه اینترنتی', desc: 'راه‌اندازی فروشگاه آنلاین با ساختار امن، UX استاندارد و قابلیت مدیریت کامل محصولات و سفارش‌ها', icon: <FiShoppingCart size={52} color={theme.palette.text.primary} /> },
    { title: 'UI/UX اختصاصی', desc: 'طراحی رابط کاربری یونیک و تجربه کاربری هدفمند برای افزایش رضایت، تعامل و فروش', icon: <MdOutlineDesignServices size={52} color={theme.palette.text.primary} /> },
    { title: 'سایت شخصی / رزومه', desc: 'طراحی صفحات شخصی حرفه‌ای برای نمایش نمونه‌کار، مهارت‌ها و ساخت یک هویت آنلاین جذاب', icon: <FiUser size={52} color={theme.palette.text.primary} /> },
    { title: 'پنل مدیریتی', desc: 'ساخت داشبوردهای مدرن و قابل گسترش برای مدیریت کامل داده‌ها، کاربران و محتوای وب‌سایت', icon: <FiMonitor size={52} color={theme.palette.text.primary} /> },
    { title: 'سئو و بهینه‌سازی', desc: 'بهبود رتبه سایت در نتایج گوگل، افزایش ورودی ارگانیک و تقویت دیده‌شدن کسب‌وکار', icon: <MdOutlineSpeed size={52} color={theme.palette.text.primary} /> },
  ];

  return (
    <Box my={4} px={{ xs: 2, lg: 8 }}>
      {/* Header */}
      <Box width="100%" textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 900, color: theme.palette.text.primary }}>
          🎯 خدمات ما 🎯
        </Typography>
        <Typography component="h4" sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' }, fontWeight: 700, color: theme.palette.text.secondary, mt: 1 }}>
          از طراحی تا بهینه‌سازی و فروش
        </Typography>
      </Box>

      {/* Services Grid */}
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {infoes.map((service, idx) => (
          <Grid key={idx} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: { xs: 1.5, md: 2 }, p: { xs: 3, md: 4 }, borderRadius: '32px', boxShadow: '0px 4px 25px #6B4EFF', background: 'linear-gradient(to bottom, #6B4EFF 0%, #402F99 100%)', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 4px 35px #6B4EFF' } }}>
              {service.icon}
              <Typography component="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.4rem', md: '1.8rem' }, color: theme.palette.text.primary }}>
                {service.title}
              </Typography>
              <Typography component="p" sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.3rem' }, color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                {service.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
