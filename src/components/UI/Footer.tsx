'use client';

import React, { useState } from 'react';
import { Box, Button, Typography, useTheme, Link, IconButton, Modal, Fade, Backdrop, Paper, useMediaQuery, Tooltip } from '@mui/material';
import { FiPhone, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiX, FiCheck, FiShield, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Modal state
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpen = (title: string, content: React.ReactNode) => {
    setModalContent(
      <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 2, sm: 4 } }}>
          <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.8rem' }, fontWeight: 900, color: '#fff' }}>{title}</Typography>
          <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
            <FiX size={isMobile ? 24 : 28} />
          </IconButton>
        </Box>
        {content}
      </>
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Specific content for each modal
  const faqContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: { xs: 3, sm: 4 } }}>
      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>۱. مدت زمان طراحی سایت چقدر است؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.9rem', sm: '1rem' } }}>بسته به نوع پروژه (سایت شرکتی، فروشگاه آنلاین یا اختصاصی) بین ۲ تا ۸ هفته طول می‌کشد. پس از عقد قرارداد، برنامه زمان‌بندی دقیق و مرحله‌ای ارائه می‌شود.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>۲. آیا سایت‌ها کاملاً ریسپانسیو هستند؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.9rem', sm: '1rem' } }}>بله، تمام پروژه‌های ما کاملاً ریسپانسیو و بهینه برای نمایش در موبایل، تبلت و دسکتاپ طراحی و توسعه می‌شوند.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>۳. پشتیبانی پس از تحویل سایت چگونه است؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.9rem', sm: '1rem' } }}>تا ۶ ماه پشتیبانی رایگان فنی و رفع باگ داریم. همچنین بسته‌های پشتیبانی سالیانه با قیمت مناسب و خدمات گسترده ارائه می‌شود.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>۴. آیا سئو اولیه روی سایت انجام می‌شود؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.9rem', sm: '1rem' } }}>بله، تمام سایت‌ها با رعایت کامل اصول سئو تکنیکال (سرعت بالا، ساختار مناسب، متاتگ‌ها، schema و ...) تحویل داده می‌شوند.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: { xs: '1rem', sm: '1.2rem' } }}>۵. آیا امکان تغییرات بعد از تحویل وجود دارد؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.9rem', sm: '1rem' } }}>بله، در دوره پشتیبانی رایگان تغییرات جزئی رایگان است و برای تغییرات بزرگ‌تر می‌توانید از بسته‌های توسعه و به‌روزرسانی استفاده کنید.</Typography>
      </Box>
    </Box>
  );

  const guideContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}>همکاری با تیم طراحی سایت ورتکس بسیار ساده، شفاف و حرفه‌ای است:</Typography>

      <Box component="ol" sx={{ pl: { xs: 2, sm: 4 }, display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>تماس اولیه از طریق فرم سایت، شماره تلفن یا شبکه‌های اجتماعی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>برگزاری جلسه مشاوره رایگان (حضوری یا آنلاین)</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>ارائه پیشنهاد فنی دقیق همراه با قیمت و زمان‌بندی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>عقد قرارداد رسمی و پرداخت پیش‌پرداخت</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>شروع طراحی و توسعه + ارائه گزارش هفتگی پیشرفت</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>تحویل نهایی + آموزش کار با پنل مدیریت + شروع دوره پشتیبانی</Typography>
        </Box>
      </Box>
    </Box>
  );

  const contactContent = (
    <Box sx={{ textAlign: 'center', py: { xs: 2, sm: 4 } }}>
      <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem' }, fontWeight: 700, color: '#fff', mb: { xs: 3, sm: 5 } }}>آماده‌ایم تا پروژه شما را شروع کنیم!</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 }, alignItems: 'center', mb: { xs: 4, sm: 6 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <FiPhone size={isMobile ? 24 : 28} color={theme.palette.primary.main} />
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.4rem' }, fontWeight: 600 }}>989309363715+</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <FiMail size={isMobile ? 24 : 28} color={theme.palette.primary.main} />
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1.3rem' } }}>vortexwebteam@info.com</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, maxWidth: '420px', mx: 'auto', fontSize: { xs: '0.85rem', sm: '1rem' } }}>
        تیم ورتکس معمولاً در کمتر از ۱ ساعت به پیام‌های شما پاسخ می‌دهد.
        <br />
        می‌توانید از طریق اینستاگرام، تلگرام یا ایمیل با ما در ارتباط باشید.
      </Typography>
    </Box>
  );

  const termsContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}>شرایط ارائه خدمات تیم طراحی سایت ورتکس به شرح زیر است:</Typography>

      <Box component="ul" sx={{ pl: { xs: 2, sm: 4 }, display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>پرداخت در چند مرحله: پیش‌پرداخت، پرداخت‌های میانی و تسویه نهایی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>مالکیت کامل کد، طراحی و دامنه پس از تسویه نهایی به کارفرما منتقل می‌شود</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>رعایت کامل محرمانگی اطلاعات پروژه و عدم انتشار بدون اجازه کارفرما</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={isMobile ? 20 : 24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontSize: { xs: '0.85rem', sm: '1rem' } }}>تضمین کیفیت و رفع رایگان هرگونه مشکل تا رضایت کامل کارفرما</Typography>
        </Box>
      </Box>
    </Box>
  );

  const supportLinks = [
    { title: 'سوالات متداول', content: faqContent },
    { title: 'راهنمای استفاده', content: guideContent },
    { title: 'تماس با ما', content: contactContent },
    { title: 'شرایط خدمات', content: termsContent },
  ];

  // نمادهای اعتماد و مجوزها
  const trustBadges = [
    { id: 1, name: 'اینماد', logo: '/assets/badges/enamad.png', link: 'https://enamad.ir/', alt: 'نماد اعتماد الکترونیکی' },
    { id: 2, name: 'سامانه ساماندهی', logo: '/assets/badges/samanandehi.webp', link: 'https://samanandehi.ir/', alt: 'سامانه ساماندهی' },
    { id: 3, name: 'اتحادیه کشوری', logo: '/assets/badges/ettehadie.webp', link: '#', alt: 'اتحادیه کشوری businesses' },
  ];

  return (
    <>
      <Box component="footer" dir="rtl" sx={{ bgcolor: 'rgba(10, 5, 30, 0.98)', color: '#fff', py: { xs: 3, sm: 4, md: 5 }, px: { xs: 1, sm: 2, md: 4, lg: 6 }, borderTop: '1px solid rgba(107, 78, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
        {/* Top CTA Section */}
        <Box sx={{ background: 'linear-gradient(145deg, rgba(107, 78, 255, 0.35) 0%, rgba(60, 30, 140, 0.55) 100%)', backdropFilter: 'blur(24px)', border: '2px solid rgba(107, 78, 255, 0.6)', borderRadius: { xs: '30px', sm: '40px' }, p: { xs: 4, sm: 5, md: 6 }, textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 }, boxShadow: '0 16px 48px rgba(107, 78, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' }, fontWeight: 900, mb: { xs: 3, md: 4 }, lineHeight: 1.4, color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            جدیدترین نکات طراحی سایت، تجربه‌های دیجیتال و پیشنهادهای ویژه
            <br />
            ورتکس را به شما ارسال میکنیم.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 3, md: 4 }, justifyContent: 'center', alignItems: 'center', maxWidth: '680px', mx: 'auto' }}>
            <Box sx={{ direction: 'rtl', position: 'relative', width: '100%', maxWidth: '500px' }}>
              <input type="tel" placeholder="شماره همراه خود را وارد کنید" style={{ width: '100%', padding: isMobile ? '14px 20px' : '18px 28px', paddingRight: '24px', borderRadius: '40px', border: 'none', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(16px)', color: '#fff', fontSize: isMobile ? '0.9rem' : '1.1rem', outline: 'none', transition: 'all 0.4s ease', boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.2)', textAlign: 'right', direction: 'rtl' }} />

              <Button
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  px: { xs: 3, sm: 4, md: 6 },
                  py: { xs: 1.2, sm: 1.5, md: 1.8 },
                  borderRadius: '32px',
                  fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem' },
                  fontWeight: 800,
                  bgcolor: 'primary.main',
                  background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                  color: '#fff',
                  boxShadow: '0 10px 30px rgba(107, 78, 255, 0.4)',
                  transition: 'all 0.4s ease',
                  whiteSpace: 'nowrap',
                  '&:hover': { bgcolor: '#7B61FF', transform: 'translateY(-50%) scale(1.06)', boxShadow: '0 16px 40px rgba(107, 78, 255, 0.5)' },
                }}
              >
                عضویت
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Main Footer Content */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'flex-start', justifyContent: 'space-between', gap: { xs: 5, md: 6 } }}>
          {/* Right Column - Links & Logo */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 4, md: 5, lg: 6 }, textAlign: { xs: 'center', sm: 'right' }, flex: 1 }}>
            {/* Logo & Description */}
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 3 }}>
                <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={isMobile ? 45 : 50} height={isMobile ? 45 : 50} priority quality={95} style={{ borderRadius: '18px', boxShadow: '0 10px 32px rgba(107, 78, 255, 0.35)' }} />
              </Box>

              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 700, mb: 2 }}>تیم طراحی سایت ورتکس</Typography>

              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, color: 'rgba(255,255,255,0.8)', maxWidth: { xs: '100%', sm: '300px' }, mx: { xs: 'auto', sm: 0 }, lineHeight: 1.7 }}>متخصص در طراحی و توسعه وب‌سایت‌های حرفه‌ای، فروشگاهی و اختصاصی با تمرکز بر تجربه کاربری عالی و نتایج واقعی کسب‌وکار.</Typography>
            </Box>

            {/* لینک‌ها */}
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' }, color: theme.palette.primary.main, fontWeight: 900, mb: 3 }}>لینک‌ها</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['صفحه اصلی', 'نمونه کارها', 'تعرفه‌ها', 'پشتیبانی', 'درباره ی ما', 'وبلاگ'].map((link) => (
                  <Link key={link} href="#" underline="hover" color="rgba(255,255,255,0.8)">
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '&:hover': { color: '#fff' } }}>{link}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>

            {/* خدمات ما */}
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' }, color: theme.palette.primary.main, fontWeight: 900, mb: 3 }}>خدمات ما</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['سایت شرکتی', 'فروشگاه آنلاین', 'UI/UX اختصاصی', 'سئو حرفه‌ای'].map((service) => (
                  <Typography key={service} sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, color: 'rgba(255,255,255,0.8)' }}>
                    {service}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* پشتیبانی - با مودال */}
            <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' }, color: theme.palette.primary.main, fontWeight: 900, mb: 3 }}>پشتیبانی</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {supportLinks.map((item) => (
                  <Link key={item?.title} onClick={() => handleOpen(item.title, item.content)} href="#" underline="hover" color="rgba(255,255,255,0.8)" sx={{ cursor: 'pointer' }}>
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, '&:hover': { color: '#fff' } }}>{item?.title}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Trust Badges Section */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: { xs: 3, sm: 4, md: 5 }, pt: { xs: 2, sm: 3 }, borderTop: '1px solid rgba(107, 78, 255, 0.2)', textAlign: 'center' }}>
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, color: 'rgba(255,255,255,0.5)', textAlign: 'right', lineHeight: 1.8, maxWidth: '600px' }}>
            <FiShield size={14} style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'middle' }} />
            ورتکس دارای نماد اعتماد الکترونیکی (اینماد)، مجوز رسمی از اتحادیه کشوری کسب‌وکارهای اینترنتی، نماد ساماندهی و گواهی ثبت اختراع می‌باشد. تمامی فعالیت‌های ما تحت نظارت و با رعایت قوانین تجارت الکترونیک انجام می‌شود.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: { xs: 3, sm: 4, md: 5 } }}>
            {trustBadges.map((badge) => (
              <Tooltip key={badge.id} title={badge.name} arrow>
                <Link href={badge.link} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', filter: 'drop-shadow(0 4px 12px rgba(107, 78, 255, 0.4))' } }}>
                  <Image src={badge.logo} alt={badge.alt} width={80} height={80} style={{ width: 'auto', height: isMobile ? 75 : 80, objectFit: 'contain', opacity: 0.9, transition: 'opacity 0.3s ease' }} onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                </Link>
              </Tooltip>
            ))}

            {/* Additional Certificates */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(107, 78, 255, 0.1)', px: 2, py: 1, borderRadius: '40px' }}>
              <FiAward size={16} color={theme.palette.primary.main} />
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>عضویت در اتحادیه کسب‌وکارهای دیجیتال</Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom Copyright */}
        <Box sx={{ mt: { xs: 2.5, sm: 3, md: 4 }, pt: { xs: 1.5, sm: 2, md: 3 }, borderTop: '1px solid rgba(107, 78, 255, 0.2)', textAlign: 'center' }}>
          <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' }, color: 'rgba(255,255,255,0.6)' }}>© تمامی حقوق برای تیم طراحی سایت ورتکس محفوظ است. | توسعه با ❤️ در ایران</Typography>
        </Box>
      </Box>

      {/* Custom Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={open}>
          <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '95%', sm: '550px', md: '600px' }, maxHeight: '85vh', bgcolor: 'rgba(20, 10, 40, 0.95)', backdropFilter: 'blur(24px)', border: '2px solid rgba(107, 78, 255, 0.6)', borderRadius: { xs: '24px', sm: '32px' }, boxShadow: '0 24px 80px rgba(107, 78, 255, 0.4)', p: { xs: 2, sm: 3, md: 4 }, outline: 'none', overflowY: 'auto' }}>{modalContent}</Paper>
        </Fade>
      </Modal>
    </>
  );
}
