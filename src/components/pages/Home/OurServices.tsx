'use client';

import { Box, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiLayers, FiShoppingCart, FiUser, FiMonitor, FiStar, FiTrendingUp } from 'react-icons/fi';
import { MdOutlineDesignServices, MdOutlineSpeed } from 'react-icons/md';
import { TbRocket, TbInfinity } from 'react-icons/tb';

export default function OurServices() {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'طراحی سایت شرکتی',
      desc: 'وب‌سایت‌های حرفه‌ای و معتبر برای معرفی برند و خدمات شما',
      icon: <FiLayers size={36} />,
      gradient: 'linear-gradient(135deg, #6B4EFF, #4A7DFF)',
      features: ['طراحی منحصربه‌فرد', 'بهینه برای برندینگ'],
    },
    {
      title: 'فروشگاه اینترنتی',
      desc: 'فروشگاه آنلاین با ساختار امن و تجربه کاربری عالی برای افزایش فروش',
      icon: <FiShoppingCart size={36} />,
      gradient: 'linear-gradient(135deg, #FF4FD8, #9B7BFF)',
      features: ['درگاه پرداخت امن', 'مدیریت آسان محصولات'],
    },
    {
      title: 'UI/UX اختصاصی',
      desc: 'طراحی رابط کاربری منحصر‌به‌فرد برای بهبود تعامل و رضایت کاربران',
      icon: <MdOutlineDesignServices size={36} />,
      gradient: 'linear-gradient(135deg, #4A7DFF, #6B4EFF)',
      features: ['تجربه کاربری روان', 'طراحی جذاب و مدرن'],
    },
    {
      title: 'سایت شخصی',
      desc: 'هویت آنلاین حرفه‌ای برای نمایش نمونه‌کار و مهارت‌های شما',
      icon: <FiUser size={36} />,
      gradient: 'linear-gradient(135deg, #9B7BFF, #FF4FD8)',
      features: ['پورتفولیوی حرفه‌ای', 'رزومه آنلاین'],
    },
    {
      title: 'پنل مدیریتی',
      desc: 'داشبوردهای مدرن برای مدیریت کامل داده‌ها و محتوای سایت',
      icon: <FiMonitor size={36} />,
      gradient: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)',
      features: ['مدیریت پیشرفته', 'گزارش‌گیری حرفه‌ای'],
    },
    {
      title: 'سئو و بهینه‌سازی',
      desc: 'بهبود رتبه در گوگل و افزایش بازدیدکننده واقعی',
      icon: <MdOutlineSpeed size={36} />,
      gradient: 'linear-gradient(135deg, #4A7DFF, #9B7BFF)',
      features: ['رتبه اول گوگل', 'ترافیک ارگانیک'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 5, md: 7.5, lg: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 300 + 50}px`, height: `${Math.random() * 300 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.05) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.12) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 4s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 4s ease-in-out infinite 2s' }} />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section with 3D Effect */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: 'spring' }}>
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ WHAT WE DO ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
              خدمات تخصصی{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                ورتکس
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.5)', maxWidth: '600px', mx: 'auto' }}>
              از طراحی تا بهینه‌سازی، همه چیز برای رشد کسب‌وکار شما
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid with 3D Cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <motion.div variants={itemVariants as any} whileHover={{ y: -12, transition: { type: 'spring', stiffness: 300 } }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}>
                  <Box sx={{ height: '100%', p: { xs: 3.5, md: 4 }, borderRadius: '28px', background: hoveredIndex === index ? 'linear-gradient(135deg, rgba(107, 78, 255, 0.2), rgba(255, 79, 216, 0.15))' : 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: hoveredIndex === index ? '1px solid rgba(107, 78, 255, 0.6)' : '1px solid rgba(107, 78, 255, 0.2)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                    {/* Animated Border Gradient */}
                    {hoveredIndex === index && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: service.gradient, animation: 'slideIn 0.5s ease' }} />}

                    {/* Icon Container */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 3,
                        borderRadius: '24px',
                        background: hoveredIndex === index ? service.gradient : 'linear-gradient(135deg, rgba(107, 78, 255, 0.15), rgba(255, 79, 216, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: hoveredIndex === index ? '#FFFFFF' : '#6B4EFF',
                        border: hoveredIndex === index ? 'none' : '1px solid rgba(107, 78, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        transform: hoveredIndex === index ? 'scale(1.05) rotate(5deg)' : 'scale(1)',
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* Title */}
                    <Typography component="h3" sx={{ fontSize: '1.3rem', fontWeight: 700, background: hoveredIndex === index ? service.gradient : 'none', backgroundClip: hoveredIndex === index ? 'text' : 'none', WebkitBackgroundClip: hoveredIndex === index ? 'text' : 'none', color: hoveredIndex === index ? 'transparent' : '#FFFFFF', mb: 1.5, lineHeight: 1.4, transition: 'all 0.3s ease' }}>
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography component="p" sx={{ fontSize: '0.85rem', color: hoveredIndex === index ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7, mb: 2.5, transition: 'all 0.3s ease' }}>
                      {service.desc}
                    </Typography>

                    {/* Features Tags */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {service.features.map((feature, i) => (
                        <Box key={i} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5, borderRadius: '20px', bgcolor: hoveredIndex === index ? 'rgba(107, 78, 255, 0.2)' : 'rgba(255,255,255,0.05)', fontSize: '0.65rem', color: hoveredIndex === index ? '#9B7BFF' : 'rgba(255,255,255,0.5)' }}>
                          <FiStar size={10} />
                          <Typography sx={{ fontSize: '0.65rem' }}>{feature}</Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Decorative Icon */}
                    <Box sx={{ position: 'absolute', bottom: 20, right: 20, opacity: hoveredIndex === index ? 0.3 : 0.1, transition: 'opacity 0.3s ease' }}>
                      <TbRocket size={40} />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Floating CTA */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: 'center', p: { xs: 4, md: 5 }, borderRadius: '48px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.1), rgba(255, 79, 216, 0.05))', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)' }}>
            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }, fontWeight: 600, color: '#FFFFFF', mb: 1 }}>آماده شروع پروژه شما هستیم</Typography>
            <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>با تیم ما تماس بگیرید و ایده‌های خود را به واقعیت تبدیل کنید</Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(20px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}
