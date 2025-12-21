'use client';

import React from 'react';
import { Box, Typography, Button, Grid, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FiPhone, FiMail, FiMessageCircle, FiClock, FiShield, FiHeadphones, FiGlobe, FiZap } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import ChildrenLayout from '@/components/ChildrenLayout';
import ContactForm from '@/components/pages/Home/ContactForm';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import CoopWays from '@/components/pages/Home/CoopWays';

export default function SupportPage() {
  const theme = useTheme();

  // Refs برای انیمیشن‌های بخش‌های مختلف
  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const contactRef = React.useRef<HTMLDivElement | any>(null);
  const faqRef = React.useRef<HTMLDivElement | any>(null);
  const featuresRef = React.useRef<HTMLDivElement | any>(null);
  const formRef = React.useRef<HTMLDivElement | any>(null);

  useScrollAnimation(headerRef, { from: { y: 80, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1.2 }, delay: 0.2 });
  useScrollAnimation(contactRef, { stagger: 0.15 });
  useScrollAnimation(featuresRef, { stagger: { each: 0.18, from: 'center' } });
  useScrollAnimation(faqRef, { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0, duration: 1.2 }, delay: 0.3 });
  useScrollAnimation(formRef, { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' }, delay: 0.3 });

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        {/* هدر اصلی صفحه پشتیبانی - طراحی لوکس‌تر */}
        <Box ref={headerRef} textAlign="center" my={{ xs: 10, md: 14 }}>
          <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' }, fontWeight: 900, color: '#fff', mb: 4, lineHeight: 1.2, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA, #E0AAFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 10px 30px rgba(107, 78, 255, 0.3)' }}>
            پشتیبانی ۲۴ ساعته ورتکس
          </Typography>

          <Typography sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.92)', maxWidth: '1000px', mx: 'auto', lineHeight: 1.8, mb: 4 }}>ما فقط سایت نمی‌سازیم — تا آخرین لحظه همراهتون هستیم. هر سؤالی، هر مشکلی، هر تغییری — تیم ما همیشه در دسترسه.</Typography>

          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, color: theme.palette.primary.light, fontWeight: 700, fontStyle: 'italic' }}>💎 تضمین رضایت ۱۰۰٪ — پشتیبانی مادام‌العمر در پکیج‌های ویژه</Typography>
        </Box>

        {/* روش‌های ارتباطی سریع - طراحی مدرن‌تر */}
        <Box ref={contactRef}>
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {/* تماس تلفنی */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{ bgcolor: 'rgba(107, 78, 255, 0.22)', backdropFilter: 'blur(20px)', border: '1px solid rgba(107, 78, 255, 0.6)', borderRadius: '36px', p: { xs: 5, md: 6 }, textAlign: 'center', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(-8px)', boxShadow: '0 20px 60px rgba(107, 78, 255, 0.3)', '&:hover': { transform: 'translateY(-24px)', boxShadow: '0 32px 80px rgba(107, 78, 255, 0.4)' } }}>
                <FiPhone size={56} color={theme.palette.primary.main} style={{ marginBottom: 24 }} />
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', mb: 2 }}>تماس مستقیم</Typography>
                <Button component="a" href="tel:+989309363715" fullWidth sx={{ py: 2, borderRadius: '32px', fontSize: '1.15rem', fontWeight: 800, bgcolor: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', '&:hover': { bgcolor: 'rgba(255,255,255,0.25)', transform: 'scale(1.04)' } }}>
                  تماس بگیرید
                </Button>
              </Box>
            </Grid>

            {/* واتساپ - برجسته‌تر */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{ bgcolor: 'rgba(37, 211, 102, 0.22)', backdropFilter: 'blur(20px)', border: '1px solid rgba(37, 211, 102, 0.6)', borderRadius: '36px', p: { xs: 5, md: 6 }, textAlign: 'center', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(-8px)', boxShadow: '0 20px 60px rgba(37, 211, 102, 0.3)', '&:hover': { transform: 'translateY(-24px)', boxShadow: '0 32px 80px rgba(37, 211, 102, 0.4)' } }}>
                <FaWhatsapp size={64} color="#25D366" style={{ marginBottom: 24 }} />
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', mb: 2 }}>چت در واتساپ</Typography>
                <Button component="a" href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" fullWidth sx={{ py: 2.2, borderRadius: '32px', fontSize: '1.2rem', fontWeight: 800, bgcolor: '#25D366', color: '#fff', boxShadow: '0 12px 36px rgba(37, 211, 102, 0.4)', '&:hover': { bgcolor: '#22c55e', transform: 'scale(1.04)' } }}>
                  شروع چت
                </Button>
              </Box>
            </Grid>

            {/* ایمیل */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={{ bgcolor: 'rgba(107, 78, 255, 0.22)', backdropFilter: 'blur(20px)', border: '1px solid rgba(107, 78, 255, 0.6)', borderRadius: '36px', p: { xs: 5, md: 6 }, textAlign: 'center', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(-8px)', boxShadow: '0 20px 60px rgba(107, 78, 255, 0.3)', '&:hover': { transform: 'translateY(-24px)', boxShadow: '0 32px 80px rgba(107, 78, 255, 0.4)' } }}>
                <FiMail size={56} color={theme.palette.primary.main} style={{ marginBottom: 24 }} />
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', mb: 2 }}>ایمیل پشتیبانی</Typography>
                <Button component="a" href="mailto:support@vortexweb.ir" fullWidth sx={{ py: 2, borderRadius: '32px', fontSize: '1.15rem', fontWeight: 800, bgcolor: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', '&:hover': { bgcolor: 'rgba(255,255,255,0.25)', transform: 'scale(1.04)' } }}>
                  ارسال ایمیل
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box ref={contactRef} mt={8}>
          <CoopWays />
        </Box>

        {/* امکانات پشتیبانی - طراحی لوکس‌تر */}
        <Box ref={featuresRef} my={{ xs: 12, md: 16 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.4rem' }, fontWeight: 900, color: '#fff', textAlign: 'center', mb: 10, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            چرا پشتیبانی ورتکس متفاوته؟
          </Typography>

          <Grid container spacing={{ xs: 5, md: 7 }}>
            {[
              { icon: <FiClock size={56} />, title: 'پاسخگویی ۲۴ ساعته', desc: 'هر ساعت از شبانه‌روز، تیم ما آماده پاسخگویی به شماست — حتی تعطیلات!' },
              { icon: <FiShield size={56} />, title: 'تضمین امنیت', desc: 'SSL رایگان، بک‌آپ روزانه، فایروال پیشرفته — امنیت سایتتون تضمین شده' },
              { icon: <FiZap size={56} />, title: 'سرعت بهینه', desc: 'بهینه‌سازی کامل سرعت و عملکرد — زیر ۲ ثانیه لود' },
              { icon: <FiHeadphones size={56} />, title: 'پشتیبانی اختصاصی', desc: 'هر پروژه یک مدیر پشتیبانی اختصاصی داره — همیشه در دسترس' },
              { icon: <FiGlobe size={56} />, title: 'به‌روزرسانی رایگان', desc: 'تغییرات محتوایی و جزئی تا ۶ ماه کاملاً رایگان' },
              { icon: <FiMessageCircle size={56} />, title: 'آموزش کامل', desc: 'ویدیوهای آموزشی اختصاصی + راهنمای قدم‌به‌قدم' },
            ].map((item, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                <Box
                  sx={{
                    height: '100%',
                    minHeight: { xs: 320, md: 360 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: 3,
                    p: { xs: 4, md: 5 },
                    borderRadius: '32px',
                    bgcolor: 'rgba(20, 10, 40, 0.45)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(107, 78, 255, 0.3)',
                    boxShadow: '0 12px 40px rgba(107, 78, 255, 0.15)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-16px)',
                      boxShadow: '0 24px 60px rgba(107, 78, 255, 0.3)',
                      borderColor: 'rgba(107, 78, 255, 0.6)',
                      bgcolor: 'rgba(20, 10, 40, 0.55)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 110,
                      height: 110,
                      borderRadius: '50%',
                      bgcolor: 'rgba(107, 78, 255, 0.15)',
                      backdropFilter: 'blur(12px)',
                      border: '2px solid rgba(107, 78, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      boxShadow: '0 8px 32px rgba(107, 78, 255, 0.25)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        bgcolor: 'rgba(107, 78, 255, 0.25)',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', mb: 3 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* سوالات متداول - طراحی زیباتر */}
        <Box ref={faqRef} mb={{ xs: 12, md: 16 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, fontWeight: 900, color: '#fff', textAlign: 'center', mb: 10, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            سوالات متداول درباره پشتیبانی
          </Typography>

          <Grid container spacing={2} justifyContent={'center'} sx={{ maxWidth: '100%', mx: 'auto' }}>
            {[
              { q: 'بعد از تحویل سایت، پشتیبانی چطوره؟', a: 'بسته به پکیج، از ۷ روز تا مادام‌العمر پشتیبانی کامل داریم. تغییرات کوچک و محتوایی رایگان انجام می‌شه و برای تغییرات بزرگ تخفیف ویژه داریم.' },
              { q: 'اگر بعداً بخوام امکان جدیدی اضافه کنم؟', a: 'کاملاً امکان‌پذیره! هر امکان جدیدی (فروشگاه، رزرو، وبلاگ، چندزبانه و ...) رو می‌تونیم با بهترین قیمت اضافه کنیم — بدون نیاز به بازسازی سایت.' },
              { q: 'سئو سایت چطور انجام می‌شه؟', a: 'سئو پایه در همه پکیج‌ها هست. سئو حرفه‌ای و فول هم در پکیج‌های بالاتر ارائه می‌شه. همچنین می‌تونیم بعد از تحویل، سئو رو ارتقا بدیم.' },
              { q: 'آیا سایت من ریسپانسیو خواهد بود؟', a: '۱۰۰٪ — همه سایت‌ها کاملاً responsive و مناسب موبایل، تبلت و دسکتاپ طراحی می‌شن. تست روی بیش از ۵۰ دستگاه مختلف انجام می‌شه.' },
              { q: 'قرارداد رسمی دارید؟', a: 'بله، در پکیج خورشید قرارداد رسمی با جزئیات کامل ارائه می‌شه. در پکیج‌های دیگر هم در صورت درخواست، قرارداد تنظیم می‌کنیم.' },
            ].map((faq, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Accordion key={i} sx={{ bgcolor: 'rgba(107, 78, 255, 0.18)', backdropFilter: 'blur(20px)', border: '1px solid rgba(107, 78, 255, 0.4)', borderRadius: '28px !important', p: 2, boxShadow: '0 12px 40px rgba(107, 78, 255, 0.2)', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0 0 32px 0 !important' } }}>
                  <AccordionSummary expandIcon={<MdExpandMore style={{ color: '#fff', fontSize: '2rem' }} />}>
                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>{faq.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 2 }}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.8, fontSize: '1.1rem' }}>{faq.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* فرم تماس - اضافه شده */}
        <Box ref={formRef} mb={{ xs: 12, md: 16 }}>
          <Typography component="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' }, fontWeight: 900, color: '#fff', textAlign: 'center', mb: 8, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            پیام خود را ارسال کنید
          </Typography>

          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            <ContactForm />
          </Box>
        </Box>

        {/* CTA نهایی - کوچکتر، ظریف‌تر و داخل یک Box با طراحی glassmorphic */}
        <Box sx={{ mt: { xs: 10, md: 14 }, mx: 'auto', maxWidth: '800px', textAlign: 'center', py: { xs: 6, md: 8 }, px: { xs: 4, md: 6 }, bgcolor: 'rgba(107, 78, 255, 0.12)', borderRadius: '32px', border: '2px solid rgba(107, 78, 255, 0.4)', backdropFilter: 'blur(20px)', boxShadow: '0 16px 50px rgba(107, 78, 255, 0.2)', transition: 'all 0.4s ease' }}>
          <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 900, color: '#fff', mb: { xs: 3, md: 4 }, lineHeight: 1.4 }}>هنوز سؤالی دارید؟</Typography>

          <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.85)', mb: { xs: 5, md: 6 }, lineHeight: 1.7 }}>تیم پشتیبانی ما آماده پاسخگویی به همه سؤالات شماست.</Typography>

          <Button
            component="a"
            href="https://wa.me/98930953715"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              py: { xs: 1.8, md: 2.2 },
              px: { xs: 4.5, md: 6 }, // عرض داخلی کمتر
              borderRadius: '32px',
              fontSize: { xs: '1rem', md: '1.15rem' }, // فونت کوچکتر
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
              '&:hover': {
                transform: 'translateY(-5px) scale(1.04)',
                boxShadow: '0 18px 50px rgba(37, 211, 102, 0.45)',
              },
            }}
          >
            <Box component="span" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
              💬
            </Box>
            چت با پشتیبانی
          </Button>

          <Typography
            sx={{
              mt: { xs: 4, md: 5 },
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: 'rgba(255,255,255,0.6)',
              fontStyle: 'italic',
            }}
          >
            پاسخگویی ۲۴ ساعته — مشاوره رایگان
          </Typography>
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
