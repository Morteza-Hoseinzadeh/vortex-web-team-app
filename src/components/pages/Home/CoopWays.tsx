'use client';

import { Box, Typography, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { MdOutlineDesignServices, MdOutlineSettingsSuggest, MdOutlineSupportAgent, MdOutlineAnalytics } from 'react-icons/md';
import { TbArrowNarrowLeft, TbSparkles } from 'react-icons/tb';

export default function CoopWays() {
  const theme = useTheme();

  const steps = [
    {
      number: '۰۱',
      title: 'دریافت نیاز و تحلیل',
      desc: 'اهداف کسب‌وکار، مخاطبان و امکانات موردنیاز شما رو بررسی می‌کنیم تا مسیر درست مشخص بشه.',
      icon: <MdOutlineAnalytics size={34} />,
      color: '#6B4EFF',
      gradient: 'linear-gradient(135deg, #6B4EFF, #4A7DFF)',
    },
    {
      number: '۰۲',
      title: 'طراحی UI/UX',
      desc: 'ساختار صفحات و تجربه کاربری رو بر اساس نیاز شما طراحی می‌کنیم تا سایت کاربرپسند باشه.',
      icon: <MdOutlineDesignServices size={34} />,
      color: '#FF4FD8',
      gradient: 'linear-gradient(135deg, #FF4FD8, #9B7BFF)',
    },
    {
      number: '۰۳',
      title: 'توسعه و پیاده‌سازی',
      desc: 'طراحی به کد تبدیل میشه با تکنولوژی‌های مدرن، سریع و واکنش‌گرا.',
      icon: <MdOutlineSettingsSuggest size={34} />,
      color: '#4A7DFF',
      gradient: 'linear-gradient(135deg, #4A7DFF, #6B4EFF)',
    },
    {
      number: '۰۴',
      title: 'تحویل و پشتیبانی',
      desc: 'بعد از تست کامل، سایت تحویل داده میشه و پشتیبانی همیشه در کنار شماست.',
      icon: <MdOutlineSupportAgent size={34} />,
      color: '#9B7BFF',
      gradient: 'linear-gradient(135deg, #9B7BFF, #FF4FD8)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 5, md: 7, lg: 9 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(15)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 250 + 50}px`, height: `${Math.random() * 250 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.05) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${12 + Math.random() * 12}s ease-in-out infinite`, animationDelay: `${Math.random() * 6}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.12) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite 2.5s' }} />

      {/* Connecting Line between steps (Desktop) */}
      <Box sx={{ position: 'absolute', top: '58%', left: '15%', right: '15%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(107, 78, 255, 0.3), rgba(255, 79, 216, 0.3), transparent)', display: { xs: 'none', lg: 'block' }, zIndex: 1 }} />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}>
          <Box textAlign="center" mb={{ xs: 8, md: 12 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ HOW IT WORKS ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              فرآیند همکاری در{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                ورتکس
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
              ساده، شفاف و مرحله به مرحله
            </Typography>
          </Box>
        </motion.div>

        {/* Steps Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 3, md: 4 }, position: 'relative' }}>
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants as any} whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, md: 4 },
                    borderRadius: '28px',
                    bgcolor: 'rgba(15, 12, 35, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(107, 78, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    '&:hover': { borderColor: step.color, bgcolor: 'rgba(20, 16, 45, 0.75)', boxShadow: `0 10px 30px ${step.color}20`, '& .step-number': { color: step.color, opacity: 0.3 }, '& .step-icon': { transform: 'scale(1.1) rotate(5deg)', color: step.color, borderColor: step.color }, '& .bottom-line': { width: '80px', bgcolor: step.color } },
                  }}
                >
                  {/* Animated Border Gradient */}
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: step.gradient, opacity: 0, transition: 'opacity 0.3s ease', '.MuiPaper-root:hover &': { opacity: 1 } }} />

                  {/* Number Background */}
                  <Typography className="step-number" sx={{ position: 'absolute', top: 16, right: 20, fontSize: '3.5rem', fontWeight: 800, color: 'rgba(107, 78, 255, 0.12)', transition: 'all 0.3s ease', fontFamily: 'monospace' }}>
                    {step.number}
                  </Typography>

                  {/* Icon Container */}
                  <Box className="step-icon" sx={{ width: 64, height: 64, borderRadius: '20px', background: `linear-gradient(135deg, ${step.color}15, transparent)`, border: `1px solid ${step.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.color, mb: 3, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    {step.icon}
                  </Box>

                  {/* Title */}
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', mb: 1.5, lineHeight: 1.4 }}>{step.title}</Typography>

                  {/* Description */}
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7, mb: 2.5 }}>{step.desc}</Typography>

                  {/* Bottom Line with Animation */}
                  <Box className="bottom-line" sx={{ width: '40px', height: '3px', bgcolor: 'rgba(107, 78, 255, 0.3)', borderRadius: '3px', transition: 'all 0.3s ease' }} />

                  {/* Decorative Sparkle */}
                  <Box sx={{ position: 'absolute', bottom: 16, right: 16, opacity: 0, transition: 'opacity 0.3s ease', '.MuiPaper-root:hover &': { opacity: 0.5 } }}>
                    <TbSparkles size={20} color={step.color} />
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Floating CTA */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mt: { xs: 8, md: 10 }, textAlign: 'center', p: { xs: 4, md: 5 }, borderRadius: '48px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.08), rgba(255, 79, 216, 0.05))', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)' }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 2, color: '#9B7BFF' }}>
              <TbArrowNarrowLeft size={20} />
              <Typography sx={{ fontSize: '0.8rem', letterSpacing: '1px' }}>آماده شروع هستید؟</Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>همین حالا با ما تماس بگیرید و قدم اول را بردارید</Typography>
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
            transform: translateY(-25px) translateX(15px);
          }
          50% {
            transform: translateY(-50px) translateX(0px);
          }
          75% {
            transform: translateY(-25px) translateX(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
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
      `}</style>
    </Box>
  );
}
