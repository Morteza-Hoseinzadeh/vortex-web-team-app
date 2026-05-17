'use client';

import React, { useState } from 'react';
import { Box, Typography, useTheme, Link, IconButton, Modal, Fade, Backdrop, Paper, useMediaQuery, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiX, FiCheck, FiShield, FiAward, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { TbRocket, TbSparkles } from 'react-icons/tb';
import Image from 'next/image';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleOpen = (title: string, content: React.ReactNode) => {
    setModalContent(
      <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 2, sm: 4 } }}>
          <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.8rem' }, fontWeight: 900, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>{title}</Typography>
          <IconButton onClick={handleClose} sx={{ color: '#fff', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)', transform: 'rotate(90deg)', transition: 'all 0.3s ease' } }}>
            <FiX size={isMobile ? 24 : 28} />
          </IconButton>
        </Box>
        {content}
      </>
    );
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const faqContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
      {[
        { q: 'مدت زمان طراحی سایت چقدر است؟', a: 'بسته به نوع پروژه (سایت شرکتی، فروشگاه آنلاین یا اختصاصی) بین ۲ تا ۸ هفته طول می‌کشد.' },
        { q: 'آیا سایت‌ها کاملاً ریسپانسیو هستند؟', a: 'بله، تمام پروژه‌های ما کاملاً ریسپانسیو و بهینه برای نمایش در موبایل، تبلت و دسکتاپ طراحی می‌شوند.' },
        { q: 'پشتیبانی پس از تحویل سایت چگونه است؟', a: 'تا ۶ ماه پشتیبانی رایگان فنی و رفع باگ داریم. همچنین بسته‌های پشتیبانی سالیانه ارائه می‌شود.' },
        { q: 'آیا سئو اولیه روی سایت انجام می‌شود؟', a: 'بله، تمام سایت‌ها با رعایت کامل اصول سئو تکنیکال تحویل داده می‌شوند.' },
      ].map((item, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
          <Box>
            <Typography sx={{ fontWeight: 700, color: '#6B4EFF', mb: 1, fontSize: '1rem' }}>✦ {item.q}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.9rem' }}>{item.a}</Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );

  const guideContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 1 }}>همکاری با تیم ورتکس در ۶ مرحله ساده:</Typography>
      {['تماس اولیه از طریق فرم سایت یا شبکه‌های اجتماعی', 'برگزاری جلسه مشاوره رایگان (حضوری یا آنلاین)', 'ارائه پیشنهاد فنی دقیق همراه با قیمت و زمان‌بندی', 'عقد قرارداد رسمی و پرداخت پیش‌پرداخت', 'شروع طراحی و توسعه + ارائه گزارش هفتگی', 'تحویل نهایی + آموزش پنل مدیریت + شروع پشتیبانی'].map((step, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FiCheck color="#6B4EFF" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '0.9rem' }}>{step}</Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );

  const contactContent = (
    <Box sx={{ textAlign: 'center', py: { xs: 2, sm: 4 } }}>
      <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 3 }}>آماده همکاری هستید؟</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FiPhone size={24} color="#6B4EFF" />
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 600 }}>+989309363715</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FiMail size={24} color="#6B4EFF" />
          <Typography sx={{ fontSize: '0.9rem' }}>vortexwebteam@info.com</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>پاسخگویی در کمتر از ۱ ساعت</Typography>
    </Box>
  );

  const termsContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9 }}>شرایط ارائه خدمات:</Typography>
      {['پرداخت در چند مرحله: پیش‌پرداخت، پرداخت‌های میانی و تسویه نهایی', 'مالکیت کامل کد و طراحی پس از تسویه نهایی به کارفرما منتقل می‌شود', 'رعایت کامل محرمانگی اطلاعات پروژه', 'تضمین کیفیت و رفع رایگان هرگونه مشکل تا رضایت کامل'].map((term, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FiCheck color="#6B4EFF" size={20} style={{ flexShrink: 0 }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{term}</Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );

  const supportLinks = [
    { title: 'سوالات متداول', content: faqContent, icon: '❓' },
    { title: 'راهنمای استفاده', content: guideContent, icon: '📖' },
    { title: 'تماس با ما', content: contactContent, icon: '📞' },
    { title: 'شرایط خدمات', content: termsContent, icon: '⚖️' },
  ];

  const trustBadges = [
    { id: 1, name: 'اینماد', logo: '/assets/badges/enamad.png', link: 'https://enamad.ir/' },
    { id: 2, name: 'سامانه ساماندهی', logo: '/assets/badges/samanandehi.webp', link: 'https://samanandehi.ir/' },
    { id: 3, name: 'اتحادیه کشوری', logo: '/assets/badges/ettehadie.webp', link: '#' },
  ];

  const socialIcons = [
    { icon: <FiInstagram size={20} />, link: 'https://instagram.com/vortexweb.team', color: '#E4405F', name: 'Instagram' },
    { icon: <FaWhatsapp size={20} />, link: 'https://wa.me/989309363715', color: '#25D366', name: 'WhatsApp' },
    { icon: <FaTelegramPlane size={20} />, link: 'https://t.me/vortexwebteam', color: '#26A5E4', name: 'Telegram' },
    { icon: <FiTwitter size={20} />, link: '#', color: '#1DA1F2', name: 'Twitter' },
    { icon: <FiLinkedin size={20} />, link: '#', color: '#0077B5', name: 'LinkedIn' },
    { icon: <FaGithub size={20} />, link: '#', color: '#333', name: 'GitHub' },
  ];

  const links = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کارها', href: '/portfolio' },
    { title: 'تعرفه‌ها', href: '/pricing' },
    { title: 'پشتیبانی', href: '/support' },
    { title: 'درباره ما', href: '/about' },
    // { title: 'پنل کاربری', href: '/dashboard' },
  ];

  return (
    <>
      <Box component="footer" dir="rtl" sx={{ bgcolor: '#0A0D1A', color: '#fff', py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden' }}>
        {/* Animated Background Particles */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(15)].map((_, i) => (
            <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${12 + Math.random() * 12}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
          ))}
        </Box>

        {/* Glowing Orbs */}
        <Box sx={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse 6s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse 6s ease-in-out infinite 3s' }} />

        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* Main Footer Content */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'flex-start', justifyContent: 'space-between', gap: { xs: 6, md: 8 }, mb: { xs: 6, md: 8 } }}>
            {/* Logo & Description */}
            <Box sx={{ maxWidth: { xs: '100%', lg: '280px' }, textAlign: { xs: 'center', lg: 'right' } }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' }, mb: 2, gap: 2 }}>
                  <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" width={55} height={55} priority style={{ borderRadius: '16px', boxShadow: '0 8px 25px rgba(107, 78, 255, 0.3)' }} />
                  <Box sx={{ display: 'block', textAlign: 'right' }}>
                    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>تیم طراحی سایت ورتکس</Typography>
                    <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.70rem', md: '0.75rem' }, fontWeight: 500, color: 'rgba(107, 78, 255, 0.7)', letterSpacing: '2px', mb: 0.3 }}>VORTEX WEB TEAM</Typography>
                  </Box>
                </Box>
              </motion.div>
              <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>متخصص در طراحی و توسعه وب‌سایت‌های حرفه‌ای، فروشگاهی و اختصاصی با تمرکز بر تجربه کاربری عالی. ما با بهره‌گیری از جدیدترین تکنولوژی‌ها مانند Next.js، React و Tailwind، وب‌سایت‌هایی می‌سازیم که نه تنها زیبا هستند، بلکه سرعت بالا، امنیت کامل، سئو شده و کاملاً ریسپانسیو را نیز تضمین می‌کنند. تیم ما همراه شماست از ایده تا اجرا و پشتیبانی.</Typography>
            </Box>

            {/* Links Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 4, md: 6 }, flex: 1 }}>
              {/* Quick Links */}
              <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#6B4EFF', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <TbRocket size={18} /> لینک‌های سریع
                </Typography>
                {links.map((link, idx) => (
                  <motion.div key={link?.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                    <Link href={link?.href} underline="none" onMouseEnter={() => setHoveredLink(link?.title)} onMouseLeave={() => setHoveredLink(null)} sx={{ display: 'block', color: hoveredLink === link?.title ? '#6B4EFF' : 'rgba(255,255,255,0.6)', fontSize: '0.85rem', py: 0.8, transition: 'all 0.3s ease', '&:hover': { transform: 'translateX(-8px)' } }}>
                      {link?.title}
                    </Link>
                  </motion.div>
                ))}
              </Box>

              {/* Services */}
              <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#6B4EFF', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <TbSparkles size={18} /> خدمات ما
                </Typography>
                {['سایت شرکتی', 'فروشگاه آنلاین', 'UI/UX اختصاصی', 'سئو حرفه‌ای', 'پنل مدیریتی', 'مشاوره دیجیتال'].map((service, idx) => (
                  <motion.div key={service} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', py: 0.8, transition: 'all 0.3s ease', '&:hover': { color: '#6B4EFF', transform: 'translateX(-5px)' } }}>{service}</Typography>
                  </motion.div>
                ))}
              </Box>

              {/* Support */}
              <Box sx={{ textAlign: { xs: 'center', lg: 'right' } }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#6B4EFF', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                  <FiShield size={18} /> پشتیبانی
                </Typography>
                {supportLinks.map((item, idx) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                    <Link onClick={() => handleOpen(item.title, item.content)} href="#" underline="none" sx={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', py: 0.8, cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { color: '#6B4EFF', transform: 'translateX(-8px)' } }}>
                      {item.icon} {item.title}
                    </Link>
                  </motion.div>
                ))}
              </Box>

              {/* Contact Info & Social */}
              <Box sx={{ textAlign: { xs: 'center', lg: 'right' }, minWidth: { lg: '220px' } }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#6B4EFF', mb: 2.5 }}>ارتباط با ما</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    <FiPhone size={16} color="#6B4EFF" />
                    <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>989309363715+</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    <FiMail size={16} color="#6B4EFF" />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>vortexwebteam@info.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    <FiMapPin size={16} color="#6B4EFF" />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>تهران، ایران</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    <FiClock size={16} color="#6B4EFF" />
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>پاسخگویی ۲۴/۷</Typography>
                  </Box>
                </Box>

                {/* Social Icons */}
                <Box sx={{ display: 'flex', gap: 1.5, justifyContent: { xs: 'center', lg: 'flex-start' }, flexWrap: 'wrap' }}>
                  {socialIcons.map((social, idx) => (
                    <motion.div key={idx} whileHover={{ y: -5, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Tooltip title={social.name} arrow>
                        <IconButton component="a" href={social.link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: '#fff', width: 38, height: 38, '&:hover': { bgcolor: social.color, transform: 'translateY(-3px)' }, transition: 'all 0.3s ease' }}>
                          {social.icon}
                        </IconButton>
                      </Tooltip>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Trust Badges Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ py: 4, px: 3, my: 4, borderRadius: '24px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.08), rgba(255, 79, 216, 0.05))', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3 }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <FiShield size={14} />
                  ورتکس دارای نماد اعتماد الکترونیکی (اینماد)، مجوز رسمی از اتحادیه کشوری کسب‌وکارهای اینترنتی، نماد ساماندهی و گواهی ثبت اختراع می‌باشد.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
                  {trustBadges.map((badge, idx) => (
                    <motion.div key={badge.id} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Tooltip title={badge.name} arrow>
                        <Link href={badge.link} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
                          <Image src={badge.logo} alt={badge.name} width={60} height={60} style={{ width: 'auto', height: 50, objectFit: 'contain', opacity: 0.8 }} onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                        </Link>
                      </Tooltip>
                    </motion.div>
                  ))}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(107, 78, 255, 0.1)', px: 2, py: 1, borderRadius: '40px' }}>
                    <FiAward size={14} color="#6B4EFF" />
                    <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>عضویت در اتحادیه کسب‌وکارهای دیجیتال</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Bottom Copyright */}
          <Box sx={{ pt: 4, borderTop: '1px solid rgba(107, 78, 255, 0.1)', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} تمامی حقوق برای تیم طراحی سایت ورتکس محفوظ است. | توسعه با ❤️ در ایران</Typography>
          </Box>
        </Box>
      </Box>

      {/* Custom Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={open}>
          <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '95%', sm: '550px', md: '600px' }, maxHeight: '85vh', bgcolor: 'rgba(10, 5, 30, 0.98)', backdropFilter: 'blur(24px)', border: '1px solid rgba(107, 78, 255, 0.3)', borderRadius: '32px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', p: { xs: 3, sm: 4, md: 5 }, outline: 'none', overflowY: 'auto' }}>{modalContent}</Paper>
        </Fade>
      </Modal>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-30px) translateX(0px);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
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
      `}</style>
    </>
  );
}
