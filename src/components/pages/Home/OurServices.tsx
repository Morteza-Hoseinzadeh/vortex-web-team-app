'use client';

import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FiLayers, FiShoppingCart, FiUser, FiMonitor } from 'react-icons/fi';
import { MdOutlineDesignServices, MdOutlineSpeed } from 'react-icons/md';
import { TbLayoutGrid, TbRocket } from 'react-icons/tb';

export default function OurServices() {
  const theme = useTheme();

  const services = [
    {
      title: 'طراحی سایت شرکتی',
      desc: 'وب‌سایت‌های حرفه‌ای و معتبر برای معرفی برند و خدمات شما',
      icon: <FiLayers size={40} />,
      gradient: 'linear-gradient(135deg, #6B4EFF, #4A7DFF)',
    },
    {
      title: 'فروشگاه اینترنتی',
      desc: 'فروشگاه آنلاین با ساختار امن و تجربه کاربری عالی برای افزایش فروش',
      icon: <FiShoppingCart size={40} />,
      gradient: 'linear-gradient(135deg, #FF4FD8, #9B7BFF)',
    },
    {
      title: 'UI/UX اختصاصی',
      desc: 'طراحی رابط کاربری منحصر‌به‌فرد برای بهبود تعامل و رضایت کاربران',
      icon: <MdOutlineDesignServices size={40} />,
      gradient: 'linear-gradient(135deg, #4A7DFF, #6B4EFF)',
    },
    {
      title: 'سایت شخصی',
      desc: 'هویت آنلاین حرفه‌ای برای نمایش نمونه‌کار و مهارت‌های شما',
      icon: <FiUser size={40} />,
      gradient: 'linear-gradient(135deg, #9B7BFF, #FF4FD8)',
    },
    {
      title: 'پنل مدیریتی',
      desc: 'داشبوردهای مدرن برای مدیریت کامل داده‌ها و محتوای سایت',
      icon: <FiMonitor size={40} />,
      gradient: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)',
    },
    {
      title: 'سئو و بهینه‌سازی',
      desc: 'بهبود رتبه در گوگل و افزایش بازدیدکننده واقعی',
      icon: <MdOutlineSpeed size={40} />,
      gradient: 'linear-gradient(135deg, #4A7DFF, #9B7BFF)',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12, lg: 16 },
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#0A0D1A',
      }}
    >
      {/* Background Gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 79, 216, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.1)', px: 2, py: 0.8, borderRadius: '40px' }}>
            WHAT WE DO
          </Typography>

          <Typography component="h3" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
            خدمات تخصصی{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ورتکس
            </Box>
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
            از طراحی تا بهینه‌سازی، همه چیز برای رشد کسب‌وکار شما
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Box sx={{ height: '100%', p: { xs: 3, md: 3.5 }, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(107, 78, 255, 0.4)', bgcolor: 'rgba(20, 16, 45, 0.7)', '& .icon-box': { transform: 'scale(1.05)', borderColor: '#6B4EFF' } } }}>
                {/* Icon with gradient border */}
                <Box className="icon-box" sx={{ width: 70, height: 70, mb: 3, borderRadius: '18px', background: `linear-gradient(135deg, rgba(107, 78, 255, 0.15), rgba(255, 79, 216, 0.1))`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF', border: '1px solid rgba(107, 78, 255, 0.3)', transition: 'all 0.3s ease' }}>
                  {service.icon}
                </Box>

                {/* Title */}
                <Typography component="h4" sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', mb: 1.5, lineHeight: 1.4 }}>
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography component="p" sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>
                  {service.desc}
                </Typography>

                {/* Decorative line on hover */}
                <Box sx={{ width: '0%', height: '2px', bgcolor: '#6B4EFF', mt: 2.5, transition: 'width 0.3s ease', borderRadius: '2px', '.icon-box:hover &': { width: '30px' } }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
