'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiClock, FiShield, FiHeadphones, FiGlobe, FiZap, FiStar } from 'react-icons/fi';
import { MdExpandMore } from 'react-icons/md';
import { TbHeadset } from 'react-icons/tb';
import ChildrenLayout from '@/components/ChildrenLayout';
import ContactForm from '@/components/pages/Home/ContactForm';
import CoopWays from '@/components/pages/Home/CoopWays';
import Loading from '../loading';

export default function SupportPage() {
  const theme = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  const faqItems = [
    { q: 'بعد از تحویل سایت، پشتیبانی چطور است؟', a: 'بسته به پکیج، از ۷ روز تا مادام‌العمر پشتیبانی کامل داریم. تغییرات کوچک و محتوایی رایگان انجام می‌شود و برای تغییرات بزرگ تخفیف ویژه داریم.' },
    { q: 'اگر بعداً بخواهم امکان جدیدی اضافه کنم؟', a: 'کاملاً امکان‌پذیر است! هر امکان جدیدی (فروشگاه، رزرو، وبلاگ، چندزبانه و ...) را می‌توانیم با بهترین قیمت اضافه کنیم — بدون نیاز به بازسازی سایت.' },
    { q: 'سئو سایت چگونه انجام می‌شود؟', a: 'سئو پایه در همه پکیج‌ها موجود است. سئو حرفه‌ای و فول هم در پکیج‌های بالاتر ارائه می‌شود.' },
    { q: 'آیا سایت من ریسپانسیو خواهد بود؟', a: '۱۰۰٪ — همه سایت‌ها کاملاً responsive و مناسب موبایل، تبلت و دسکتاپ طراحی می‌شوند.' },
    { q: 'قرارداد رسمی دارید؟', a: 'بله، در پکیج خورشید قرارداد رسمی با جزئیات کامل ارائه می‌شود.' },
  ];

  const features = [
    { icon: <FiClock size={32} />, title: 'پاسخگویی ۲۴ ساعته', desc: 'هر ساعت از شبانه‌روز، تیم ما آماده پاسخگویی است', color: '#6B4EFF' },
    { icon: <FiShield size={32} />, title: 'تضمین امنیت', desc: 'SSL رایگان، بک‌آپ روزانه، امنیت تضمین شده', color: '#4A7DFF' },
    { icon: <FiZap size={32} />, title: 'سرعت بهینه', desc: 'بهینه‌سازی کامل سرعت — زیر ۲ ثانیه لود', color: '#FF4FD8' },
    { icon: <FiHeadphones size={32} />, title: 'پشتیبانی اختصاصی', desc: 'هر پروژه یک مدیر پشتیبانی دارد', color: '#9B7BFF' },
    { icon: <FiGlobe size={32} />, title: 'به‌روزرسانی رایگان', desc: 'تغییرات جزئی تا ۶ ماه رایگان', color: '#6B4EFF' },
    { icon: <FiMessageCircle size={32} />, title: 'آموزش کامل', desc: 'ویدیوهای آموزشی اختصاصی + راهنما', color: '#FF4FD8' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ChildrenLayout>
      <Box sx={{ mt: 24, pb: { xs: 8, md: 12 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
        {/* Animated Background Particles */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(20)].map((_, i) => (
            <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
          ))}
        </Box>

        {/* Glowing Orbs */}
        <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 6s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 6s ease-in-out infinite 3s' }} />

        <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}>
            <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
              {/* Badge */}
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
                <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ 24/7 SUPPORT ✦</Typography>
              </Box>

              {/* Title */}
              <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
                پشتیبانی
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite', mx: 1 }}>
                  ۲۴ ساعته
                </Box>
              </Typography>

              {/* Description */}
              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '700px', mx: 'auto', mb: 3, lineHeight: 1.8 }}>ما فقط سایت نمی‌سازیم — تا آخرین لحظه همراهتان هستیم. هر سؤالی، هر مشکلی، هر تغییری — تیم ما همیشه در دسترس است.</Typography>

              {/* Trust Badge */}
              <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, color: 'rgba(107, 78, 255, 0.7)', display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2.5, py: 0.8, borderRadius: '30px' }}>
                <FiStar size={14} color="#FFD700" />
                💎 تضمین رضایت ۱۰۰٪ — پشتیبانی مادام‌العمر در پکیج‌های ویژه
              </Typography>
            </Box>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" sx={{ mb: { xs: 8, md: 10 } }}>
              {/* Phone */}
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                  <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '28px', p: { xs: 4, md: 4.5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.5)', bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                    <Box sx={{ width: 64, height: 64, mx: 'auto', mb: 2, borderRadius: '20px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF' }}>
                      <FiPhone size={32} />
                    </Box>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>تماس مستقیم</Typography>
                    <Button component="a" href="tel:989309363715" fullWidth sx={{ py: 1.3, borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600, bgcolor: 'rgba(107, 78, 255, 0.15)', color: '#fff', border: '1px solid rgba(107, 78, 255, 0.3)', textTransform: 'none', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
                      📞 تماس بگیرید
                    </Button>
                  </Box>
                </motion.div>
              </Grid>

              {/* WhatsApp */}
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                  <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(37, 211, 102, 0.2)', borderRadius: '28px', p: { xs: 4, md: 4.5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                    <Box sx={{ width: 'fit-content', mx: 'auto', mb: 2, borderRadius: '20px', bgcolor: 'rgba(37, 211, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                      <img src={'/assets/logo/app-logo/bale-logo.jpg'} alt="ارتباط با ما - تیم طراحی سایت ورتکس (بله)" width={64} height={64} style={{ borderRadius: '12px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>چت در بله</Typography>
                    <Button component="a" href="https://ble.ir/vortexwebteam" target="_blank" rel="noopener noreferrer" fullWidth sx={{ py: 1.3, borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', '&:hover': { bgcolor: '#128C7E' } }}>
                      💬 شروع چت
                    </Button>
                  </Box>
                </motion.div>
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                  <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.2)', borderRadius: '28px', p: { xs: 4, md: 4.5 }, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.5)', bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                    <Box sx={{ width: 64, height: 64, mx: 'auto', mb: 2, borderRadius: '20px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF' }}>
                      <FiMail size={32} />
                    </Box>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>ایمیل پشتیبانی</Typography>
                    <Button component="a" href="mailto:vortexwebteam@info.com" fullWidth sx={{ py: 1.3, borderRadius: '40px', fontSize: '0.85rem', fontWeight: 600, bgcolor: 'rgba(107, 78, 255, 0.15)', color: '#fff', border: '1px solid rgba(107, 78, 255, 0.3)', textTransform: 'none', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.25)' } }}>
                      ✉️ ارسال ایمیل
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>

          {/* CoopWays Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ mb: { xs: 8, md: 10 } }}>
              <CoopWays />
            </Box>
          </motion.div>

          {/* Features Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ mb: { xs: 8, md: 10 } }}>
              <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: { xs: 6, md: 8 } }}>
                چرا پشتیبانی
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mx: 1 }}>
                  ورتکس
                </Box>
                متفاوت است؟
              </Typography>

              <Grid container spacing={3}>
                {features.map((item, i) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                    <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Box sx={{ p: 3.5, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', textAlign: 'center', height: '100%', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.4)', bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                        <Box sx={{ width: 56, height: 56, mx: 'auto', mb: 2, borderRadius: '16px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>{item.icon}</Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#fff', mb: 1 }}>{item.title}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>{item.desc}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* FAQ Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ mb: { xs: 8, md: 10 } }}>
              <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: { xs: 6, md: 8 } }}>
                سوالات متداول
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {faqItems.map((faq, i) => (
                  <Grid size={{ xs: 12, md: 6 }} key={i}>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                      <Accordion sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', borderRadius: '20px !important', '&:before': { display: 'none' }, mb: 2 }}>
                        <AccordionSummary expandIcon={<MdExpandMore style={{ color: '#6B4EFF' }} />}>
                          <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{faq.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{faq.a}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ mb: { xs: 8, md: 10 } }}>
              <ContactForm />
            </Box>
          </motion.div>

          {/* Final CTA */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: 'spring' }} viewport={{ once: true }}>
            <Box sx={{ textAlign: 'center', py: { xs: 6, sm: 7, md: 8 }, px: { xs: 3, sm: 4, md: 5 }, bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', borderRadius: '48px', border: '1px solid rgba(107, 78, 255, 0.2)', maxWidth: '850px', mx: 'auto', position: 'relative', overflow: 'hidden' }}>
              {/* Animated Border */}
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF, #6B4EFF)', backgroundSize: '200% 100%', animation: 'borderFlow 3s linear infinite' }} />

              <TbHeadset size={50} style={{ margin: '0 auto 20px', opacity: 0.3, color: '#6B4EFF' }} />

              <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>هنوز سؤالی دارید؟</Typography>

              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', mb: 4, maxWidth: '500px', mx: 'auto' }}>تیم پشتیبانی ما آماده پاسخگویی به همه سؤالات شماست</Typography>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  component="a"
                  href="https://ble.ir/vortexwebteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: { xs: 1.2, sm: 1.3, md: 1.5 },
                    px: { xs: 4, sm: 5, md: 6 },
                    borderRadius: '50px',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 600,
                    bgcolor: '#25D366',
                    color: '#fff',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)' },
                  }}
                >
                  💬 چت با پشتیبانی
                </Button>
              </motion.div>

              <Typography sx={{ mt: 4, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: 'rgba(255, 255, 255, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                <span>⏰ پاسخگویی ۲۴ ساعته</span>
                <span>•</span>
                <span>💎 مشاوره رایگان</span>
                <span>•</span>
                <span>✅ بدون تعهد خرید</span>
              </Typography>
            </Box>
          </motion.div>
        </Box>
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

        @keyframes borderFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </ChildrenLayout>
  );
}
