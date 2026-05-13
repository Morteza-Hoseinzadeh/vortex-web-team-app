'use client';

import { Box, Button, Typography, useTheme, Grid, Paper } from '@mui/material';
import { FaRocket, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

export default function AboutVortex() {
  const theme = useTheme();

  const features = [
    {
      icon: <FaRocket size={32} />,
      title: 'طراحی مدرن',
      description: 'استفاده از جدیدترین تکنولوژی‌ها و ترندهای روز طراحی',
    },
    {
      icon: <FaCode size={32} />,
      title: 'کد تمیز و بهینه',
      description: 'سئو شده، سریع و سازگار با تمام دستگاه‌ها',
    },
    {
      icon: <FaChartLine size={32} />,
      title: 'افزایش فروش',
      description: 'طراحی هدفمند برای تبدیل بازدیدکننده به مشتری',
    },
    {
      icon: <FaUsers size={32} />,
      title: 'پشتیبانی ۲۴/۷',
      description: 'همیشه در کنار شما هستیم تا آرامش خاطر داشته باشید',
    },
  ];

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 8, md: 12, lg: 16 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#05050A' }}>
      {/* Background Gradient */}
      <Box sx={{ position: 'absolute', top: '0%', left: '0%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '0%', right: '0%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8, lg: 10 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.1)', px: 2, py: 0.8, borderRadius: '40px' }}>
            ABOUT US
          </Typography>

          <Typography component="h3" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 3, lineHeight: 1.3 }}>
            چرا تیم طراحی سایت{' '}
            <Box component="span" sx={{ fontWeight: 900, background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ورتکس؟
            </Box>
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>
            ما فقط یک وب‌سایت نمی‌سازیم، مسیر رشد کسب‌وکار شما را طراحی می‌کنیم
          </Typography>
        </Box>

        {/* Main Description Card */}
        <Paper elevation={0} sx={{ bgcolor: 'rgba(20, 15, 45, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '32px', border: '1px solid rgba(107, 78, 255, 0.15)', p: { xs: 3, sm: 4, md: 5 }, mb: { xs: 6, md: 8 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.3)', bgcolor: 'rgba(20, 15, 45, 0.6)' } }}>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, lineHeight: 1.9, color: 'rgba(255, 255, 255, 0.8)', fontWeight: 400 }}>در ورتکس، ما وب‌سایت‌هایی طراحی می‌کنیم که در همان لحظه اول توجه بازدیدکننده را جلب می‌کنند. طراحی‌های ما نه‌تنها زیبا و چشم‌نواز هستند، بلکه با هوشمندی و کاربرپسندی، بازدیدکننده را به مشتری واقعی تبدیل می‌کنند. ما هر پروژه را با دقت و خلاقیت پیش می‌بریم تا کسب‌وکار شما به سطحی بالاتر برسد.</Typography>
        </Paper>

        {/* Features Grid */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box sx={{ textAlign: 'center', p: 3, borderRadius: '24px', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', '& .icon-box': { bgcolor: 'rgba(107, 78, 255, 0.2)', transform: 'scale(1.1)' } } }}>
                <Box className="icon-box" sx={{ width: 70, height: 70, mx: 'auto', mb: 2, borderRadius: '20px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF', transition: 'all 0.3s ease' }}>
                  {feature.icon}
                </Box>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', mb: 1 }}>{feature.title}</Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.5 }}>{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Buttons */}
        <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" href="/portfolio" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, fontWeight: 600, px: { xs: 4, sm: 5 }, py: { xs: 1.3, sm: 1.5 }, borderRadius: '40px', background: 'linear-gradient(135deg, #6B4EFF, #9B7BFF)', color: '#fff', textTransform: 'none', boxShadow: '0 4px 20px rgba(107, 78, 255, 0.25)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 30px rgba(107, 78, 255, 0.35)' } }}>
            مشاهده نمونه‌کارها
          </Button>

          <Button variant="outlined" href="/contact" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, fontWeight: 600, px: { xs: 4, sm: 5 }, py: { xs: 1.3, sm: 1.5 }, borderRadius: '40px', border: '1.5px solid rgba(107, 78, 255, 0.5)', color: '#FFFFFF', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { borderColor: '#6B4EFF', bgcolor: 'rgba(107, 78, 255, 0.1)', transform: 'translateY(-3px)' } }}>
            همکاری با ما
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
