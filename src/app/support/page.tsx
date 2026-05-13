'use client';

import React from 'react';
import { Box, Typography, Button, Grid, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FiPhone, FiMail, FiMessageCircle, FiClock, FiShield, FiHeadphones, FiGlobe, FiZap } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import ChildrenLayout from '@/components/ChildrenLayout';
import ContactForm from '@/components/pages/Home/ContactForm';
import CoopWays from '@/components/pages/Home/CoopWays';

export default function SupportPage() {
  const theme = useTheme();

  const faqItems = [
    { q: 'بعد از تحویل سایت، پشتیبانی چطور است؟', a: 'بسته به پکیج، از ۷ روز تا مادام‌العمر پشتیبانی کامل داریم. تغییرات کوچک و محتوایی رایگان انجام می‌شود و برای تغییرات بزرگ تخفیف ویژه داریم.' },
    { q: 'اگر بعداً بخواهم امکان جدیدی اضافه کنم؟', a: 'کاملاً امکان‌پذیر است! هر امکان جدیدی (فروشگاه، رزرو، وبلاگ، چندزبانه و ...) را می‌توانیم با بهترین قیمت اضافه کنیم — بدون نیاز به بازسازی سایت.' },
    { q: 'سئو سایت چگونه انجام می‌شود؟', a: 'سئو پایه در همه پکیج‌ها موجود است. سئو حرفه‌ای و فول هم در پکیج‌های بالاتر ارائه می‌شود. همچنین می‌توانیم بعد از تحویل، سئو را ارتقا دهیم.' },
    { q: 'آیا سایت من ریسپانسیو خواهد بود؟', a: '۱۰۰٪ — همه سایت‌ها کاملاً responsive و مناسب موبایل، تبلت و دسکتاپ طراحی می‌شوند. تست روی بیش از ۵۰ دستگاه مختلف انجام می‌شود.' },
    { q: 'قرارداد رسمی دارید؟', a: 'بله، در پکیج خورشید قرارداد رسمی با جزئیات کامل ارائه می‌شود. در پکیج‌های دیگر هم در صورت درخواست، قرارداد تنظیم می‌کنیم.' },
  ];

  const features = [
    { icon: <FiClock size={40} />, title: 'پاسخگویی ۲۴ ساعته', desc: 'هر ساعت از شبانه‌روز، تیم ما آماده پاسخگویی به شماست' },
    { icon: <FiShield size={40} />, title: 'تضمین امنیت', desc: 'SSL رایگان، بک‌آپ روزانه، امنیت سایت تضمین شده' },
    { icon: <FiZap size={40} />, title: 'سرعت بهینه', desc: 'بهینه‌سازی کامل سرعت و عملکرد — زیر ۲ ثانیه لود' },
    { icon: <FiHeadphones size={40} />, title: 'پشتیبانی اختصاصی', desc: 'هر پروژه یک مدیر پشتیبانی اختصاصی دارد' },
    { icon: <FiGlobe size={40} />, title: 'به‌روزرسانی رایگان', desc: 'تغییرات محتوایی و جزئی تا ۶ ماه کاملاً رایگان' },
    { icon: <FiMessageCircle size={40} />, title: 'آموزش کامل', desc: 'ویدیوهای آموزشی اختصاصی + راهنمای قدم به قدم' },
  ];

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 }, mt: 24 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 4, md: 5 }}>
          <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            پشتیبانی
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mx: 1 }}>
              ۲۴ ساعته
            </Box>
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '800px', mx: 'auto', mb: 3, lineHeight: 1.8 }}>ما فقط سایت نمی‌سازیم — تا آخرین لحظه همراهتان هستیم. هر سؤالی، هر مشکلی، هر تغییری — تیم ما همیشه در دسترس است.</Typography>

          <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, color: 'rgba(107, 78, 255, 0.7)' }}>💎 تضمین رضایت ۱۰۰٪ — پشتیبانی مادام‌العمر در پکیج‌های ویژه</Typography>
        </Box>

        {/* Contact Methods */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" sx={{ mb: { xs: 4, md: 5 } }}>
          {/* Phone */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '28px', p: { xs: 4, md: 5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.4)' } }}>
              <FiPhone size={48} color="#6B4EFF" style={{ marginBottom: 20 }} />
              <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 2 }}>تماس مستقیم</Typography>
              <Button component="a" href="tel:989309363715" fullWidth sx={{ py: 1.5, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, bgcolor: 'rgba(107, 78, 255, 0.15)', color: '#fff', border: '1px solid rgba(107, 78, 255, 0.3)', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
                تماس بگیرید
              </Button>
            </Box>
          </Grid>

          {/* WhatsApp */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(37, 211, 102, 0.3)', borderRadius: '28px', p: { xs: 4, md: 5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: '#25D366' } }}>
              <FaWhatsapp size={52} color="#25D366" style={{ marginBottom: 20 }} />
              <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 2 }}>چت در واتساپ</Typography>
              <Button component="a" href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" fullWidth sx={{ py: 1.5, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, bgcolor: '#25D366', color: '#fff', '&:hover': { bgcolor: '#128C7E' } }}>
                شروع چت
              </Button>
            </Box>
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '28px', p: { xs: 4, md: 5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.4)' } }}>
              <FiMail size={48} color="#6B4EFF" style={{ marginBottom: 20 }} />
              <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 2 }}>ایمیل پشتیبانی</Typography>
              <Button component="a" href="mailto:vortexwebteam@info.com" fullWidth sx={{ py: 1.5, borderRadius: '40px', fontSize: '0.9rem', fontWeight: 600, bgcolor: 'rgba(107, 78, 255, 0.15)', color: '#fff', border: '1px solid rgba(107, 78, 255, 0.3)', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
                ارسال ایمیل
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* CoopWays Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <CoopWays />
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: { xs: 6, md: 8 } }}>
            چرا پشتیبانی{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ورتکس{' '}
            </Box>
            متفاوت است؟
          </Typography>

          <Grid container spacing={3}>
            {features.map((item, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                <Box sx={{ p: 3, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.3)' } }}>
                  <Box sx={{ color: '#6B4EFF', mb: 2 }}>{item.icon}</Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#fff', mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: { xs: 6, md: 8 } }}>
            سوالات متداول
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {faqItems.map((faq, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Accordion sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', borderRadius: '20px !important', '&:before': { display: 'none' }, mb: 2 }}>
                  <AccordionSummary expandIcon={<MdExpandMore style={{ color: '#fff' }} />}>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{faq.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Form Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <ContactForm />
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: { xs: 5, sm: 6, md: 7 }, px: { xs: 3, sm: 4, md: 5 }, mb: 10, bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', borderRadius: '40px', border: '1px solid rgba(107, 78, 255, 0.2)', maxWidth: '800px', mx: 'auto' }}>
          <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>هنوز سؤالی دارید؟</Typography>

          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.6)', mb: 4 }}>تیم پشتیبانی ما آماده پاسخگویی به همه سؤالات شماست</Typography>

          <Button component="a" href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" startIcon={<FaWhatsapp size={18} />} sx={{ py: { xs: 1.2, sm: 1.3, md: 1.5 }, px: { xs: 4, sm: 5, md: 6 }, borderRadius: '40px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }, fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)' } }}>
            چت با پشتیبانی
          </Button>

          <Typography sx={{ mt: 4, fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, color: 'rgba(255, 255, 255, 0.4)' }}>پاسخگویی ۲۴ ساعته — مشاوره رایگان</Typography>
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
