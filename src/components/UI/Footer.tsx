'use client';

import React from 'react';
import { Box, Button, Typography, useTheme, Link, IconButton } from '@mui/material';
import { FiPhone, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
import Image from 'next/image';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box component="footer" dir="rtl" sx={{ bgcolor: 'rgba(10, 5, 30, 0.98)', color: '#fff', py: { xs: 8, md: 10 }, px: { xs: 4, md: 8, lg: 12 }, borderTop: '1px solid rgba(107, 78, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
      {/* Top Section - CTA - اندازه کوچکتر و متعادل‌تر */}
      <Box
        sx={{
          bgcolor: 'linear-gradient(145deg, rgba(107, 78, 255, 0.35) 0%, rgba(60, 30, 140, 0.55) 100%)',
          backdropFilter: 'blur(24px)',
          border: '2px solid rgba(107, 78, 255, 0.6)',
          borderRadius: '40px',
          p: { xs: 5, md: 6 },
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          boxShadow: '0 16px 48px rgba(107, 78, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': { content: '""', position: 'absolute', inset: 0, borderRadius: '40px', padding: '2px', background: 'linear-gradient(145deg, rgba(107, 78, 255, 0.8), rgba(167, 139, 250, 0.6))', mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', pointerEvents: 'none' },
        }}
      >
        <Typography sx={{ fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.2rem' }, fontWeight: 900, mb: { xs: 3, md: 4 }, lineHeight: 1.4, color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
          جدیدترین نکات طراحی سایت، تجربه‌های دیجیتال و پیشنهادهای ویژه
          <br />
          ورتکس را به شما ارسال میکنیم.
        </Typography>

        {/* CTA Section - طراحی جدید، مینیمال‌تر و زیبا */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 3, sm: 4 }, justifyContent: 'center', alignItems: 'center', maxWidth: '680px', mx: 'auto' }}>
          {/* Email Input + Subscribe Button */}
          <Box sx={{ direction: 'rtl', position: 'relative', width: { xs: '100%', sm: 'auto' }, maxWidth: '500px', flex: { sm: 1 } }}>
            <input type="tel" placeholder="شماره همراه خود را وارد کنید" style={{ width: '100%', padding: '18px 28px', paddingRight: '24px', borderRadius: '40px', border: 'none', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(16px)', color: '#fff', fontSize: '1.1rem', outline: 'none', transition: 'all 0.4s ease', boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.2)', textAlign: 'right', direction: 'rtl' }} />

            <Button
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                px: { xs: 5, md: 6 },
                py: { xs: 1.6, md: 1.8 },
                borderRadius: '32px',
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontWeight: 800,
                bgcolor: 'primary.main',
                background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(107, 78, 255, 0.4)',
                transition: 'all 0.4s ease',
                '&:hover': { bgcolor: '#7B61FF', transform: 'translateY(-50%) scale(1.06)', boxShadow: '0 16px 40px rgba(107, 78, 255, 0.5)' },
              }}
            >
              عضویت
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Main Footer Content - RTL Fixed Layout */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: '2fr 1fr' } }}>
        {/* Right Column - Links & Logo (اول در RTL) */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 4, md: 6 }, textAlign: { xs: 'center', lg: 'right' } }}>
          {/* Logo & Description */}
          <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' }, mb: 3 }}>
              <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={50} height={50} priority quality={95} style={{ borderRadius: '18px', boxShadow: '0 10px 32px rgba(107, 78, 255, 0.35)' }} />
            </Box>

            <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 2 }}>تیم طراحی سایت ورتکس</Typography>

            <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', maxWidth: '300px', mx: { xs: 'auto', lg: 0 }, lineHeight: 1.7 }}>متخصص در طراحی و توسعه وب‌سایت‌های حرفه‌ای، فروشگاهی و اختصاصی با تمرکز بر تجربه کاربری عالی و نتایج واقعی کسب‌وکار.</Typography>
          </Box>

          {/* لینک‌ها */}
          <Box>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, mb: 3 }}>لینک‌ها</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['صفحه اصلی', 'نمونه کارها', 'تعرفه‌ها', 'وبلاگ'].map((link) => (
                <Link key={link} href="#" underline="hover" color="rgba(255,255,255,0.8)">
                  <Typography sx={{ fontSize: '1rem', '&:hover': { color: '#fff' } }}>{link}</Typography>
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, mb: 3 }}>خدمات ما</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['سایت شرکتی', 'فروشگاه آنلاین', 'UI/UX اختصاصی', 'سئو حرفه‌ای'].map((service) => (
                <Typography key={service} sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  {service}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, mb: 3 }}>پشتیبانی</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['سوالات متداول', 'راهنمای استفاده', 'تماس با ما', 'شرایط خدمات'].map((item) => (
                <Link key={item} href="#" underline="hover" color="rgba(255,255,255,0.8)">
                  <Typography sx={{ fontSize: '1rem', '&:hover': { color: '#fff' } }}>{item}</Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Left Column - Contact Info (دوم در RTL) */}
        <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
          <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 900, mb: 4 }}>راه‌های ارتباطی</Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: { xs: 'center', lg: 'flex-end' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ fontSize: '1.1rem' }}>98930953715+</Typography>
              <FiPhone size={24} color={theme.palette.primary.main} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link href="mailto:vortexwebteam@info.com" underline="none" color="inherit">
                <Typography sx={{ fontSize: '1.1rem' }}>vortexwebteam@info.com</Typography>
              </Link>
              <FiMail size={24} color={theme.palette.primary.main} />
            </Box>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' }, gap: 3, mt: 6 }}>
            <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
              <FiInstagram size={20} color="#fff" />
            </IconButton>
            <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
              <FiTwitter size={20} color="#fff" />
            </IconButton>
            <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
              <FiLinkedin size={20} color="#fff" />
            </IconButton>
            <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
              <FiYoutube size={20} color="#fff" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Bottom Copyright */}
      <Box sx={{ mt: { xs: 8, md: 10 }, pt: { xs: 4, md: 6 }, borderTop: '1px solid rgba(107, 78, 255, 0.2)', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>© تمامی حقوق برای تیم طراحی سایت ورتکس محفوظ است. | توسعه با ❤️ در ایران</Typography>
      </Box>
    </Box>
  );
}
