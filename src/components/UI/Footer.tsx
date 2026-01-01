'use client';

import React, { useState } from 'react';
import { Box, Button, Typography, useTheme, Link, IconButton, Modal, Fade, Backdrop, Paper } from '@mui/material';
import { FiPhone, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiX, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

export default function Footer() {
  const theme = useTheme();

  // Modal state
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpen = (title: string, content: React.ReactNode) => {
    setModalContent(
      <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography sx={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>{title}</Typography>
          <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
            <FiX size={28} />
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: '1.2rem' }}>۱. مدت زمان طراحی سایت چقدر است؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>بسته به نوع پروژه (سایت شرکتی، فروشگاه آنلاین یا اختصاصی) بین ۲ تا ۸ هفته طول می‌کشد. پس از عقد قرارداد، برنامه زمان‌بندی دقیق و مرحله‌ای ارائه می‌شود.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: '1.2rem' }}>۲. آیا سایت‌ها کاملاً ریسپانسیو هستند؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>بله، تمام پروژه‌های ما کاملاً ریسپانسیو و بهینه برای نمایش در موبایل، تبلت و دسکتاپ طراحی و توسعه می‌شوند.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: '1.2rem' }}>۳. پشتیبانی پس از تحویل سایت چگونه است؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>تا ۶ ماه پشتیبانی رایگان فنی و رفع باگ داریم. همچنین بسته‌های پشتیبانی سالیانه با قیمت مناسب و خدمات گسترده ارائه می‌شود.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: '1.2rem' }}>۴. آیا سئو اولیه روی سایت انجام می‌شود؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>بله، تمام سایت‌ها با رعایت کامل اصول سئو تکنیکال (سرعت بالا، ساختار مناسب، متاتگ‌ها، schema و ...) تحویل داده می‌شوند.</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: theme.palette.primary.light, mb: 1, fontSize: '1.2rem' }}>۵. آیا امکان تغییرات بعد از تحویل وجود دارد؟</Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>بله، در دوره پشتیبانی رایگان تغییرات جزئی رایگان است و برای تغییرات بزرگ‌تر می‌توانید از بسته‌های توسعه و به‌روزرسانی استفاده کنید.</Typography>
      </Box>
    </Box>
  );

  const guideContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 2 }}>همکاری با تیم طراحی سایت ورتکس بسیار ساده، شفاف و حرفه‌ای است:</Typography>

      <Box component="ol" sx={{ pl: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>تماس اولیه از طریق فرم سایت، شماره تلفن یا شبکه‌های اجتماعی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>برگزاری جلسه مشاوره رایگان (حضوری یا آنلاین)</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>ارائه پیشنهاد فنی دقیق همراه با قیمت و زمان‌بندی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>عقد قرارداد رسمی و پرداخت پیش‌پرداخت</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>شروع طراحی و توسعه + ارائه گزارش هفتگی پیشرفت</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>تحویل نهایی + آموزش کار با پنل مدیریت + شروع دوره پشتیبانی</Typography>
        </Box>
      </Box>
    </Box>
  );

  const contactContent = (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', mb: 5 }}>آماده‌ایم تا پروژه شما را شروع کنیم!</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <FiPhone size={28} color={theme.palette.primary.main} />
          <Typography sx={{ fontSize: '1.4rem', fontWeight: 600 }}>989309363715+</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <FiMail size={28} color={theme.palette.primary.main} />
          <Typography sx={{ fontSize: '1.3rem' }}>vortexwebteam@info.com</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, maxWidth: '420px', mx: 'auto' }}>
        تیم ورتکس معمولاً در کمتر از ۱ ساعت به پیام‌های شما پاسخ می‌دهد.
        <br />
        می‌توانید از طریق اینستاگرام، تلگرام یا ایمیل با ما در ارتباط باشید.
      </Typography>
    </Box>
  );

  const termsContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 2 }}>شرایط ارائه خدمات تیم طراحی سایت ورتکس به شرح زیر است:</Typography>

      <Box component="ul" sx={{ pl: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>پرداخت در چند مرحله: پیش‌پرداخت، پرداخت‌های میانی و تسویه نهایی</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>مالکیت کامل کد، طراحی و دامنه پس از تسویه نهایی به کارفرما منتقل می‌شود</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>رعایت کامل محرمانگی اطلاعات پروژه و عدم انتشار بدون اجازه کارفرما</Typography>
        </Box>
        <Box component="li" sx={{ display: 'flex', gap: 2 }}>
          <FiCheck color={theme.palette.primary.main} size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>تضمین کیفیت و رفع رایگان هرگونه مشکل تا رضایت کامل کارفرما</Typography>
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

  return (
    <>
      <Box component="footer" dir="rtl" sx={{ bgcolor: 'rgba(10, 5, 30, 0.98)', color: '#fff', py: { xs: 8, md: 10 }, px: { xs: 4, md: 8, lg: 12 }, borderTop: '1px solid rgba(107, 78, 255, 0.3)', position: 'relative', overflow: 'hidden' }}>
        {/* Top CTA Section */}
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

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 3, sm: 4 }, justifyContent: 'center', alignItems: 'center', maxWidth: '680px', mx: 'auto' }}>
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

        {/* Main Footer Content */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: '2fr 1fr' } }}>
          {/* Right Column - Links & Logo */}
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
                {['صفحه اصلی', 'نمونه کارها', 'تعرفه‌ها', 'پشتیبانی', 'درباره ی ما', 'وبلاگ'].map((link) => (
                  <Link key={link} href="#" underline="hover" color="rgba(255,255,255,0.8)">
                    <Typography sx={{ fontSize: '1rem', '&:hover': { color: '#fff' } }}>{link}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>

            {/* خدمات ما */}
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

            {/* پشتیبانی - با مودال */}
            <Box>
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, mb: 3 }}>پشتیبانی</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {supportLinks.map((item) => (
                  <Link key={item.title} component="button" onClick={() => handleOpen(item.title, item.content)} underline="hover" color="rgba(255,255,255,0.8)" sx={{ textAlign: 'right', width: '100%' }}>
                    <Typography sx={{ fontSize: '1rem', '&:hover': { color: '#fff' } }}>{item.title}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Left Column - Contact Info */}
          <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
            <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 900, mb: 4 }}>راه‌های ارتباطی</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: { xs: 'center', lg: 'flex-end' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography component="a" href="tel:989309363715+" sx={{ fontSize: '1.1rem', color: '#fff', textDecoration: 'none' }}>
                  989309363715+
                </Typography>
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
              <IconButton href="https://www.instagram.com/vortexweb.team" sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <FiInstagram size={20} color="#fff" />
              </IconButton>
              <IconButton href="#" sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <FiTwitter size={20} color="#fff" />
              </IconButton>
              <IconButton href="#" sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <FiLinkedin size={20} color="#fff" />
              </IconButton>
              <IconButton href="#" sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
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

      {/* Custom Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={open}>
          <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '90%', sm: '600px' }, maxHeight: '85vh', bgcolor: 'rgba(20, 10, 40, 0.95)', backdropFilter: 'blur(24px)', border: '2px solid rgba(107, 78, 255, 0.6)', borderRadius: '32px', boxShadow: '0 24px 80px rgba(107, 78, 255, 0.4)', p: { xs: 2, md: 2 }, outline: 'none', overflowY: 'auto' }}>{modalContent}</Paper>
        </Fade>
      </Modal>
    </>
  );
}
