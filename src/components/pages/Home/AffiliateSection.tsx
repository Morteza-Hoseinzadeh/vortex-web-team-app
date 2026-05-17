'use client';

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { TbMoneybag, TbRocket, TbInfinity, TbChartLine, TbCheck, TbBrandWhatsapp, TbMail } from 'react-icons/tb';

export default function AffiliateSection() {
  const benefits = [
    { icon: <TbMoneybag size={28} />, title: '۲۰٪ پورسانت', desc: 'از هر پروژه‌ای که معرفی کنید' },
    { icon: <TbChartLine size={28} />, title: 'بدون سقف', desc: 'هر چقدر بیشتر معرفی کنید، بیشتر می‌گیرید' },
    { icon: <TbRocket size={28} />, title: 'پرداخت سریع', desc: 'بلافاصله بعد از تایید پروژه' },
    { icon: <TbInfinity size={28} />, title: 'همکاری مادام‌العمر', desc: 'برای هر بار معرفی، پورسانت می‌گیرید' },
  ];

  const howItWorks = [
    { step: '۱', title: 'معرفی مشتری', desc: 'افراد یا کسب‌وکارها را به ما معرفی کنید' },
    { step: '۲', title: 'شروع پروژه', desc: 'تیم ما پروژه را با مشتری پیش می‌برد' },
    { step: '۳', title: 'دریافت پورسانت', desc: 'بعد از اتمام پروژه، پورسانت شما پرداخت می‌شود' },
  ];

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 3, md: 4, lg: 5 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Animated Background */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(15)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 3, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ AFFILIATE PROGRAM ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              همکاری در فروش{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                ورتکس
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '600px', mx: 'auto' }}>
              با معرفی مشتری به ما، تا ۲۰٪ پورسانت دریافت کنید
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {benefits.map((item, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8 }}>
                <Box sx={{ textAlign: 'center', p: { xs: 2, md: 3 }, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.5)', bgcolor: 'rgba(107, 78, 255, 0.1)' } }}>
                  <Box sx={{ width: 60, height: 60, mx: 'auto', mb: 1.5, borderRadius: '20px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.15), rgba(255, 79, 216, 0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF' }}>{item.icon}</Box>
                  <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 700, color: '#FFF', mb: 0.5 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* How It Works Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography textAlign="center" sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' }, fontWeight: 700, color: '#FFFFFF', mb: 4 }}>
              📋 نحوه همکاری
            </Typography>

            <Grid container spacing={3}>
              {howItWorks.map((item, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: '20px', bgcolor: 'rgba(15, 12, 35, 0.4)', border: '1px solid rgba(107, 78, 255, 0.15)' }}>
                      <Box sx={{ width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>{item.step}</Box>
                      <Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', mb: 0.3 }}>{item.title}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.12), rgba(255, 79, 216, 0.08))', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.3)', textAlign: 'center' }}>
            <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' }, fontWeight: 700, color: '#FFF', mb: 2 }}>🤝 آماده همکاری هستید؟</Typography>

            <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, color: 'rgba(255,255,255,0.5)', mb: 4, maxWidth: '500px', mx: 'auto' }}>کافیه با ما تماس بگیرید، ما مشتری شما رو با بهترین کیفیت همراهی می‌کنیم</Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#0CBC8D', borderRadius: '40px', px: 4, py: 1.2, transition: 'all ease 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <img src={'/assets/logo/app-logo/bale-logo.jpg'} alt="ارتباط با ما - تیم طراحی سایت ورتکس (بله)" width={25} height={25} />
                <Button component="a" href="https://ble.ir/vortexwebteam" target="_blank" sx={{ color: '#FFF', textTransform: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                  تماس بله
                </Button>
              </Box>

              <Button component="a" href="tel:+989309363715" sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', color: '#6B4EFF', borderRadius: '40px', px: 4, py: 1.2, fontSize: '0.85rem', fontWeight: 600, textTransform: 'none', border: '1px solid rgba(107, 78, 255, 0.3)', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
                📞 تماس تلفنی
              </Button>
            </Box>

            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', mt: 3 }}>* پورسانت شما بعد از اتمام پروژه و تایید مشتری پرداخت می‌شود</Typography>
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
            transform: translateY(-20px) translateX(15px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
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
