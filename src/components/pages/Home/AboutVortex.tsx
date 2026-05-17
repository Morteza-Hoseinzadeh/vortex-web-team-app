'use client';

import { Box, Button, Typography, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaUsers, FaChartLine, FaStar, FaGem, FaInfinity, FaCrown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function AboutVortex() {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <FaRocket size={34} />,
      title: 'طراحی آینده‌نگر',
      description: 'پیشرو در تکنولوژی‌های نوین وب',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <FaCode size={34} />,
      title: 'کد بی‌نظیر',
      description: 'استانداردهای جهانی در هر خط کد',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <FaChartLine size={34} />,
      title: 'نتیجه‌گرایی محض',
      description: 'تبدیل بازدیدکننده به مشتری وفادار',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      icon: <FaUsers size={34} />,
      title: 'پشتیبانی افسانه‌ای',
      description: 'همیشه یک قدم جلوتر از نیاز شما',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
  ];

  const achievements = [
    { number: ConvertToPersianDigit('10+'), label: 'پروژه موفق', icon: <FaStar size={20} /> },
    { number: ConvertToPersianDigit('100%'), label: 'رضایت مشتری', icon: <FaGem size={20} /> },
    { number: ConvertToPersianDigit('24/7'), label: 'پشتیبانی', icon: <FaInfinity size={20} /> },
    { number: ConvertToPersianDigit('1+'), label: 'جوایز طراحی', icon: <FaCrown size={20} /> },
  ];

  return (
    <Box component="section" sx={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', bgcolor: '#0A0B1A' }}>
      {/* Animated Gradient Background */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(245, 87, 108, 0.12) 0%, transparent 50%)', animation: 'pulse 8s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 0.5 }, '50%': { opacity: 1 } } }} />

      {/* Mouse Follower Glow */}
      <Box sx={{ position: 'fixed', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)', pointerEvents: 'none', transform: 'translate(-50%, -50%)', left: mousePosition.x, top: mousePosition.y, transition: 'transform 0.1s ease-out', zIndex: 1 }} />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            borderRadius: '50%',
            background: `linear-gradient(135deg, rgba(${102 + i * 20}, ${126 + i * 10}, 234, 0.03) 0%, transparent 100%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${10 + i * 2}s ease-in-out infinite`,
            '@keyframes float': { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-40px) rotate(180deg)' } },
          }}
        />
      ))}

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: '1400px', mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 }, py: { xs: 4, md: 6, lg: 8 } }}>
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring', stiffness: 100 }}>
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            {/* Floating Badge */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(102, 126, 234, 0.15)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 2.5, py: 1, mb: 4, border: '1px solid rgba(102, 126, 234, 0.3)' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#667eea', animation: 'pulse 2s infinite' }} />
                <Typography sx={{ fontSize: '0.75rem', color: '#667eea', fontWeight: 500, letterSpacing: '1px' }}>✦ THE FUTURE IS HERE ✦</Typography>
              </Box>
            </motion.div>

            {/* Main Title with 3D Effect */}
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Typography component="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #FFFFFF 0%, #667eea 30%, #f093fb 70%, #FFFFFF 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 3, lineHeight: 1.2, letterSpacing: '-0.02em', textShadow: '0 0 40px rgba(102, 126, 234, 0.3)' }}>
                ورتکس
              </Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.9)', mb: 3, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
              فراتر از یک تیم طراحی سایت
            </Typography>

            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, color: 'rgba(255,255,255,0.6)', maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>ما رویاهای دیجیتال شما را به واقعیت تبدیل می‌کنیم</Typography>
          </Box>
        </motion.div>

        {/* Stats Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Grid container spacing={3} sx={{ mb: { xs: 10, md: 14 } }}>
            {achievements.map((item, index) => (
              <Grid size={{ xs: 6, sm: 3 }} key={index}>
                <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Box sx={{ textAlign: 'center', p: 3, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(102, 126, 234, 0.2)', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(102, 126, 234, 0.6)', bgcolor: 'rgba(102, 126, 234, 0.08)', boxShadow: '0 0 30px rgba(102, 126, 234, 0.2)' } }}>
                    <Box sx={{ color: '#667eea', mb: 1.5 }}>{item.icon}</Box>
                    <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #FFFFFF, #667eea)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 0.5 }}>{item.number}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Story Section */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Box sx={{ position: 'relative', mb: { xs: 10, md: 14 }, p: { xs: 4, sm: 6, md: 8 }, borderRadius: '48px', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(245, 87, 108, 0.05))', backdropFilter: 'blur(20px)', border: '1px solid rgba(102, 126, 234, 0.3)', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #667eea, #f093fb, transparent)' } }}>
            <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', textAlign: 'center', fontStyle: 'italic', fontWeight: 900, position: 'relative', zIndex: 2 }}>&quot;ما در ورتکس باور داریم که هر کسب‌وکاری شایسته بهترین حضور دیجیتال است. به همین دلیل است که هر پروژه را با تمام وجود، عشق و تخصص طراحی می‌کنیم. این فقط کار ما نیست، این رسالت ماست.&quot;</Typography>
            <Box sx={{ position: 'absolute', bottom: 20, right: 30, fontSize: '4rem', opacity: 0.1, color: '#667eea', fontFamily: 'serif' }}>✦</Box>
          </Box>
        </motion.div>

        {/* Features Grid - 3D Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 5, md: 7 } }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -15, rotateX: 5 }}>
                <Box sx={{ p: 3.5, borderRadius: '28px', background: 'rgba(15, 15, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(102, 126, 234, 0.2)', textAlign: 'center', height: '100%', transition: 'all 0.3s ease', cursor: 'pointer', position: 'relative', overflow: 'hidden', '&:hover': { borderColor: 'rgba(102, 126, 234, 0.8)', boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)', '& .icon-glow': { opacity: 1 } } }}>
                  <Box className="icon-glow" sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: `linear-gradient(135deg, transparent, ${feature.gradient}, transparent)`, opacity: 0, transition: 'opacity 0.5s ease', pointerEvents: 'none' }} />
                  <Box sx={{ width: 80, height: 80, mx: 'auto', mb: 2.5, borderRadius: '24px', background: feature.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>{feature.icon}</Box>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, background: feature.gradient, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 1.5 }}>{feature.title}</Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{feature.description}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section - Spectacular */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: 'spring' }} viewport={{ once: true }}>
          <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 }, px: { xs: 4, md: 6 }, borderRadius: '60px', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(245, 87, 108, 0.08))', backdropFilter: 'blur(20px)', border: '1px solid rgba(102, 126, 234, 0.3)', position: 'relative', overflow: 'hidden' }}>
            {/* Animated Border */}
            <Box sx={{ position: 'absolute', top: -2, left: -2, right: -2, bottom: -2, background: 'linear-gradient(90deg, #667eea, #f093fb, #667eea)', borderRadius: '60px', opacity: 0.5, animation: 'rotate 3s linear infinite', '@keyframes rotate': { '0%': { filter: 'blur(10px)' }, '50%': { filter: 'blur(20px)' }, '100%': { filter: 'blur(10px)' } } }} />

            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>آماده اید تا تحولی بزرگ در کسب‌وکارتان ایجاد کنید؟</Typography>

              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'rgba(255,255,255,0.7)', mb: 5, maxWidth: '600px', mx: 'auto' }}>با ما تماس بگیرید و قدم اول را به سوی آینده بردارید</Typography>

              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="contained" href="/portfolio" sx={{ fontSize: '1rem', fontWeight: 600, px: 5, py: 1.8, borderRadius: '50px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', textTransform: 'none', boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 40px rgba(102, 126, 234, 0.6)' } }}>
                    شروع پروژه
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outlined" href="/support" sx={{ fontSize: '1rem', fontWeight: 600, px: 5, py: 1.8, borderRadius: '50px', border: '2px solid rgba(102, 126, 234, 0.5)', color: '#fff', textTransform: 'none', '&:hover': { borderColor: '#667eea', bgcolor: 'rgba(102, 126, 234, 0.1)' } }}>
                    مشاوره رایگان
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
