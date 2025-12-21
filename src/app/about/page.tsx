'use client';

import React from 'react';
import { Box, Typography, Button, Grid, Paper, useTheme } from '@mui/material';
import { FiGlobe, FiZap, FiShield, FiUsers, FiAward, FiHeart } from 'react-icons/fi';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import AboutVortex from '@/components/pages/Home/AboutVortex';

export default function AboutUsPage() {
  const theme = useTheme();

  // Refs برای انیمیشن‌های مختلف
  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const storyRef = React.useRef<HTMLDivElement | any>(null);
  const valuesRef = React.useRef<HTMLDivElement | any>(null);
  const statsRef = React.useRef<HTMLDivElement | any>(null);
  const ctaRef = React.useRef<HTMLDivElement | any>(null);

  useScrollAnimation(headerRef, { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' }, delay: 0.2 });
  useScrollAnimation(storyRef, { from: { opacity: 0, scale: 0.95 }, to: { opacity: 1, scale: 1, duration: 1.2 }, delay: 0.3 });
  useScrollAnimation(valuesRef, { stagger: { each: 0.2, from: 'center' } });
  useScrollAnimation(statsRef, { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0, duration: 1.2 }, delay: 0.3 });
  useScrollAnimation(ctaRef, { from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0, duration: 1.5, ease: 'expo.out' }, delay: 0.4 });

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 }, position: 'relative' }}>
        {/* داستان ما - ترکیب هدر و داستان در یک بخش واحد با طراحی Neon + مینیمال */}
        <Box ref={headerRef} textAlign="center" my={{ xs: 10, md: 14 }}>
          <AboutVortex />
        </Box>

        {/* آمار و ارقام - Neon Glow روی اعداد */}
        <Box ref={statsRef} my={{ xs: 8, md: 12 }} textAlign="center">
          <Typography sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, fontWeight: 900, color: '#fff', mb: 5, textShadow: '0 0 15px rgba(107, 78, 255, 0.5)' }}>در یک نگاه</Typography>

          <Grid container spacing={{ xs: 5, md: 7 }} justifyContent="center">
            {[
              { number: '۶+', label: 'پروژه موفق' },
              { number: '۱۴۰۴', label: 'سال تأسیس' },
              { number: '۱۰۰٪', label: 'رضایت مشتری' },
              { number: '۲۴/۷', label: 'پشتیبانی' },
            ].map((stat, i) => (
              <Grid size={{ xs: 6, sm: 3 }} key={i}>
                <Paper elevation={0} sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', borderRadius: '24px', py: { xs: 5, md: 6 }, transition: 'all 0.4s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)', transform: 'translateY(-8px)' } }}>
                  <Typography sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, color: theme.palette.primary.light, lineHeight: 1, textShadow: '0 0 30px rgba(107, 78, 255, 0.8)' }}>{stat.number}</Typography>
                  <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{stat.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ارزش‌های ما - کارت‌های Neon Glassmorphic */}
        <Box ref={valuesRef} mt={{ xs: 12, md: 16 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.4rem' }, fontWeight: 900, color: '#fff', textAlign: 'center', mb: 5, textShadow: '0 0 20px rgba(107, 78, 255, 0.6)' }}>
            ارزش‌های ما
          </Typography>

          <Grid container spacing={{ xs: 5, md: 7 }}>
            {[
              { icon: <FiHeart size={56} />, title: 'عشق به کار', desc: 'هر پروژه رو مثل پروژه خودمون با عشق و دقت انجام می‌دیم' },
              { icon: <FiZap size={56} />, title: 'سرعت و کیفیت', desc: 'سریع تحویل می‌دیم، اما هیچ‌وقت از کیفیت کم نمی‌کنیم' },
              { icon: <FiShield size={56} />, title: 'شفافیت کامل', desc: 'قیمت، زمان، فرآیند — همه چیز شفاف و بدون هزینه مخفی' },
              { icon: <FiUsers size={56} />, title: 'مشتری‌مداری', desc: 'رضایت شما اولویت اول ماست — تا وقتی راضی نباشید، کار تموم نیست' },
              { icon: <FiAward size={56} />, title: 'نوآوری', desc: 'از جدیدترین تکنولوژی‌ها و ترندهای طراحی استفاده می‌کنیم' },
              { icon: <FiGlobe size={56} />, title: 'تعهد بلندمدت', desc: 'بعد از تحویل هم همراهتون هستیم — پشتیبانی واقعی' },
            ].map((value, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                <Paper elevation={0} sx={{ bgcolor: 'rgba(20, 10, 40, 0.5)', backdropFilter: 'blur(20px)', border: '2px solid rgba(107, 78, 255, 0.5)', borderRadius: '32px', p: { xs: 5, md: 6 }, textAlign: 'center', height: '100%', transition: 'all 0.5s ease', boxShadow: '0 0 30px rgba(107, 78, 255, 0.3)', '&:hover': { transform: 'translateY(-20px)', boxShadow: '0 0 60px rgba(107, 78, 255, 0.6), 0 30px 80px rgba(107, 78, 255, 0.4)', borderColor: '#A78BFA' } }}>
                  <Box sx={{ color: theme.palette.primary.main, mb: 4, filter: 'drop-shadow(0 0 20px rgba(107, 78, 255, 0.8))' }}>{value.icon}</Box>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', mb: 3, textShadow: '0 0 10px rgba(107, 78, 255, 0.5)' }}>{value.title}</Typography>
                  <Typography sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, textShadow: '0 0 5px rgba(107, 78, 255, 0.2)' }}>{value.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <Box sx={{ mt: { xs: 5, md: 7 }, mx: 'auto', maxWidth: '800px', textAlign: 'center', py: { xs: 6, md: 8 }, px: { xs: 4, md: 6 }, bgcolor: 'rgba(107, 78, 255, 0.12)', borderRadius: '32px', border: '2px solid rgba(107, 78, 255, 0.4)', backdropFilter: 'blur(20px)', boxShadow: '0 16px 50px rgba(107, 78, 255, 0.2)', transition: 'all 0.4s ease' }}>
          <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 900, color: '#fff', mb: { xs: 3, md: 4 }, lineHeight: 1.4 }}>هنوز سوالی براتون مونده؟ 🤔</Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.85)', mb: { xs: 5, md: 6 }, lineHeight: 1.7 }}>تیم ما ۲۴ ساعته آماده پاسخگویی به همه سوالات شماست — بدون هیچ اجباری!</Typography>

          <Button
            component="a"
            href="https://wa.me/989309363715"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              py: { xs: 1.8, md: 2.2 },
              px: { xs: 4.5, md: 6 },
              borderRadius: '32px',
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 800,
              bgcolor: '#25D366',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: '#fff',
              boxShadow: '0 12px 36px rgba(37, 211, 102, 0.35)',
              transition: 'all 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              minHeight: '46px',
              '&:hover': { transform: 'translateY(-5px) scale(1.04)', boxShadow: '0 18px 50px rgba(37, 211, 102, 0.45)' },
            }}
          >
            <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
              💬
            </Box>
            همین حالا با ما چت کنید
          </Button>

          <Typography sx={{ mt: { xs: 4, md: 5 }, fontSize: { xs: '0.95rem', md: '1.05rem' }, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>پاسخگویی فوری ۲۴ ساعته — مشاوره کاملاً رایگان</Typography>
        </Box> */}
      </Box>
    </ChildrenLayout>
  );
}
