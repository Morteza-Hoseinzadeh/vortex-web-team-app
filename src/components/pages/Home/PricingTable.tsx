'use client';

import React, { useState } from 'react';
import { Box, Button, Grid, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { TbCheck, TbRocket, TbPlanet, TbBuildingStore, TbCrown, TbSun, TbSparkles, TbDiscount } from 'react-icons/tb';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function PricingTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // تاریخ پایان تخفیف
  const discountEndDate = '۳۱ تیر ۱۴۰۵';
  const discountTitle = 'همبستگی با مردم ایران 🇮🇷';
  const discountSubtitle = 'به پاس همراهی شما در شرایط سخت کشور، تمام پکیج‌ها رو با ۵۰٪ تخفیف ویژه قرار دادیم.';

  const plans = [
    {
      id: 'atarod',
      title: 'پکیج عطارد',
      slogan: 'شروع سریع',
      delivery_time: '۷–۱۲ روز کاری',
      original_price: '۱۵–۲۵ میلیون',
      price: '۷.۵–۱۲.۵ میلیون',
      price_value: 10000000,
      original_price_value: 20000000,
      discount: 50,
      img: '/assets/image/pricing-table-planets/atarod.png',
      icon: <TbRocket size={24} />,
      color: '#6B4EFF',
      gradient: 'linear-gradient(135deg, #6B4EFF, #4A7DFF)',
      features: ['قالب آماده حرفه‌ای', '۱–۳ صفحه', 'معرفی ساده خدمات', 'اتصال واتساپ', 'سرعت مناسب', '۷ روز پشتیبانی'],
      offers_for: ['افراد شخصی', 'فریلنسرها', 'شروع سریع'],
      recommended: false,
      type: 'template_based', // قالب آماده
    },
    {
      id: 'merikh',
      title: 'پکیج مریخ',
      slogan: 'نیمه اختصاصی',
      delivery_time: '۱۵–۲۵ روز کاری',
      original_price: '۳۰–۵۰ میلیون',
      price: '۱۵–۲۵ میلیون',
      price_value: 20000000,
      original_price_value: 40000000,
      discount: 50,
      img: '/assets/image/pricing-table-planets/merikh.png',
      icon: <TbPlanet size={24} />,
      color: '#FF4FD8',
      gradient: 'linear-gradient(135deg, #FF4FD8, #9B7BFF)',
      features: ['طراحی نیمه‌اختصاصی', '۵–۸ صفحه', 'فرم تماس', 'سئو پایه', 'سرعت خوب', '۱ ماه پشتیبانی', 'آموزش مقدماتی'],
      offers_for: ['کسب‌وکارهای نوپا', 'استارتاپ‌های کوچک'],
      recommended: true,
      type: 'semi_custom', // نیمه اختصاصی
    },
    {
      id: 'zohre',
      title: 'پکیج زهره',
      slogan: 'طراحی اختصاصی حرفه‌ای',
      delivery_time: '۲۵–۳۵ روز کاری',
      original_price: '۶۰–۹۰ میلیون',
      price: '۳۰–۴۵ میلیون',
      price_value: 37500000,
      original_price_value: 75000000,
      discount: 50,
      img: '/assets/image/pricing-table-planets/zohre.png',
      icon: <TbBuildingStore size={24} />,
      color: '#4A7DFF',
      gradient: 'linear-gradient(135deg, #4A7DFF, #6B4EFF)',
      features: ['طراحی اختصاصی کامل', '۸–۱۲ صفحه', 'نمونه‌کار حرفه‌ای', 'فرم تماس پیشرفته', 'سئو استاندارد', 'سرعت عالی', 'امنیت بالا', '۲ ماه پشتیبانی', 'آموزش کامل'],
      offers_for: ['شرکت‌های متوسط', 'کلینیک‌ها', 'برندهای معتبر'],
      recommended: false,
      type: 'full_custom', // اختصاصی کامل
    },
    {
      id: 'zohal',
      title: 'پکیج زحل',
      slogan: 'فروشگاه اینترنتی اختصاصی',
      delivery_time: '۳۵–۵۰ روز کاری',
      original_price: '۹۰–۱۴۰ میلیون',
      price: '۴۵–۷۰ میلیون',
      price_value: 57500000,
      original_price_value: 115000000,
      discount: 50,
      img: '/assets/image/pricing-table-planets/zohal.png',
      icon: <TbCrown size={24} />,
      color: '#FFA500',
      gradient: 'linear-gradient(135deg, #FFA500, #FF6B00)',
      features: ['طراحی فروشگاه اختصاصی', 'محصولات نامحدود', 'درگاه پرداخت', 'پنل پیشرفته', 'سیستم تخفیف', 'سئو حرفه‌ای', 'بکاپ خودکار', '۳ ماه پشتیبانی', 'آموزش مدیریت فروشگاه'],
      offers_for: ['فروشگاه‌های بزرگ', 'برندهای اینستاگرامی', 'کسب‌وکارهای آنلاین'],
      recommended: false,
      type: 'ecommerce', // فروشگاهی
    },
    {
      id: 'khorshid',
      title: 'پکیج خورشید',
      slogan: 'سوپر اپلیکیشن / لوکس',
      delivery_time: '۵۰–۷۰ روز کاری',
      original_price: '۱۶۰–۲۵۰ میلیون',
      price: '۸۰–۱۲۵ میلیون',
      price_value: 102500000,
      original_price_value: 205000000,
      discount: 50,
      img: '/assets/image/pricing-table-planets/khorshid.png',
      icon: <TbSun size={24} />,
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      features: ['طراحی اختصاصی لوکس', 'تیم تخصصی جداگانه', 'پنل اختصاصی', 'سئو فوق حرفه‌ای', 'سرعت زیر ۱ ثانیه', 'امنیت نظامی', 'چندزبانه', 'اپلیکیشن PWA', '۶ ماه پشتیبانی', 'گارانتی کد', 'قرارداد رسمی'],
      offers_for: ['استارتاپ‌های بزرگ', 'سرمایه‌گذاران', 'برندهای بین‌المللی'],
      recommended: false,
      type: 'enterprise', // سازمانی / لوکس
    },
  ];

  const featureGroups = [
    {
      category: 'طراحی و ساختار',
      items: [
        { name: 'تعداد صفحه', atarod: '۱–۳ صفحه', merikh: '۵ صفحه', zohre: '۵–۱۰ صفحه', zohal: 'نامحدود', khorshid: 'نامحدود' },
        { name: 'نوع طراحی', atarod: 'آماده حرفه‌ای', merikh: 'نیمه‌اختصاصی', zohre: 'شرکتی اختصاصی', zohal: 'اختصاصی', khorshid: 'UX/UI اختصاصی' },
        { name: 'قالب ریسپانسیو', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'طراحی سئو شده', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'بک‌اند اختصاصی', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'فروشگاه آنلاین', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'سیستم عضویت', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'وبلاگ اختصاصی', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
      ],
    },
    {
      category: 'امکانات ارتباطی',
      items: [
        { name: 'فرم تماس', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'اتصال واتساپ', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'اتصال اینستاگرام', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'درگاه پرداخت', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'اتصال زرین‌پال', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'اتصال پی‌پل', atarod: false, merikh: false, zohre: false, zohal: false, khorshid: true },
        { name: 'چندزبانه (فارسی/انگلیسی)', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'خبرنامه ایمیلی', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
      ],
    },
    {
      category: 'سئو و عملکرد',
      items: [
        { name: 'سئو پایه', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'سئو پیشرفته', atarod: false, merikh: false, zohre: false, zohal: 'صفحات محصول', khorshid: 'فول' },
        { name: 'سرعت بارگذاری', atarod: 'مناسب', merikh: 'مناسب', zohre: 'استاندارد', zohal: 'استاندارد', khorshid: 'زیر ۱.۵ ثانیه' },
        { name: 'امنیت سایت', atarod: 'پایه', merikh: 'پایه', zohre: 'استاندارد', zohal: 'استاندارد', khorshid: 'بالا + SSL' },
        { name: 'بهینه‌سازی تصاویر', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'Schema Markup', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'گواهی SSL رایگان', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'Google Analytics', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'Google Search Console', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
      ],
    },
    {
      category: 'پشتیبانی و خدمات',
      items: [
        { name: 'زمان پشتیبانی', atarod: '۷ روز', merikh: '۱ ماه', zohre: '۲ ماه', zohal: '۳ ماه', khorshid: '۶ ماه' },
        { name: 'اولویت پشتیبانی', atarod: 'عادی', merikh: 'عادی', zohre: 'نرمال', zohal: 'ویژه', khorshid: 'ویژه + ۲۴/۷' },
        { name: 'آموزش مدیریت سایت', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'آموزش ویدئویی', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'مستندات فنی', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'قرارداد رسمی', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'فاکتور رسمی', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'گارانتی ۳۰ روزه', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'بکاپ ماهانه', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'مشاوره رایگان', atarod: true, merikh: true, zohre: true, zohal: true, khorshid: true },
      ],
    },
    {
      category: 'امکانات فروشگاهی (ویژه فروشگاه‌ها)',
      items: [
        { name: 'محصولات نامحدود', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'مدیریت انبار', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'سیستم تخفیف و کوپن', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'بخش نظرات محصولات', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'سیگنال‌های فروش', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'ارسال خودکار پیام', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'گزارشات فروش', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'افزونه‌های تخفیف', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
      ],
    },
  ];

  const ComparisonTableMobile = () => (
    <Box sx={{ mt: 4 }}>
      {featureGroups.map((group, idx) => (
        <motion.div key={group.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
          <Accordion sx={{ mb: 2, bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', borderRadius: '20px !important', '&:before': { display: 'none' }, border: '1px solid rgba(107, 78, 255, 0.2)' }}>
            <AccordionSummary expandIcon={<MdExpandMore size={28} style={{ color: '#6B4EFF' }} />}>
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{group.category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {group.items.map((item: any) => (
                <Box key={item.name} sx={{ mb: 3, pb: 2, borderBottom: '1px solid rgba(107, 78, 255, 0.1)' }}>
                  <Typography sx={{ color: '#6B4EFF', fontWeight: 700, mb: 2, fontSize: '0.9rem' }}>{item.name}</Typography>
                  {plans.map((plan: any) => {
                    const value = item[plan.id];
                    const hasValue = value === true || (typeof value === 'string' && value !== '');
                    return (
                      <Box key={plan.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, py: 1, px: 2, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600 }}>{plan.title}</Typography>
                        <Box>{hasValue ? typeof value === 'boolean' ? <TbCheck style={{ color: '#4ade80', fontSize: '1.2rem' }} /> : <Typography sx={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>{value}</Typography> : <MdClose style={{ color: '#f87171', fontSize: '1.2rem' }} />}</Box>
                      </Box>
                    );
                  })}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 4, md: 6, lg: 8 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header with Discount Banner */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* تخفیف ویژه بنر */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center', background: 'linear-gradient(135deg, #FF4FD8, #FFA500, #6B4EFF)', borderRadius: '60px', px: { xs: 3, sm: 5 }, py: 2, boxShadow: '0 0 30px rgba(255, 79, 216, 0.3)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
                <TbDiscount size={32} style={{ color: '#fff' }} />
                <Box>
                  <Typography sx={{ fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' }, color: '#fff', fontWeight: 800 }}>{discountTitle}</Typography>
                  <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{discountSubtitle}</Typography>
                </Box>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '40px', px: 2, py: 0.8, display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>۵۰٪ تخفیف ویژه</Typography>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#fff', animation: 'pulse 1s infinite' }} />
                </Box>
              </Box>
            </motion.div>
          </Box>

          <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ OFFER ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              جدول{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                تعرفه‌ها
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '600px', mx: 'auto' }}>
              🌟 به مناسبت بهار، همه پکیج‌ها با ۵۰٪ تخفیف ویژه
            </Typography>
          </Box>
        </motion.div>

        {/* Pricing Cards Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={plan.id}>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} onHoverStart={() => setHoveredPlan(plan.id)} onHoverEnd={() => setHoveredPlan(null)}>
                <Box sx={{ position: 'relative', height: '100%', bgcolor: hoveredPlan === plan.id ? 'rgba(20, 16, 45, 0.8)' : 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: `1.5px solid ${plan.recommended ? plan.color : hoveredPlan === plan.id ? plan.color : 'rgba(107, 78, 255, 0.15)'}`, borderRadius: '28px', p: { xs: 3, md: 3.5 }, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden' }}>
                  {/* Discount Badge */}
                  <motion.div initial={{ rotate: -15, x: 20, y: -20 }} animate={{ rotate: 0, x: 0, y: 0 }} transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}>
                    <Box sx={{ position: 'absolute', top: 12, right: 12, bgcolor: '#FF4FD8', borderRadius: '50%', width: 50, height: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(255, 79, 216, 0.5)', zIndex: 1 }}>
                      <Typography sx={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>تخفیف</Typography>
                      <Typography sx={{ fontSize: '1rem', color: '#fff', fontWeight: 800, lineHeight: 1 }}>۵۰٪</Typography>
                    </Box>
                  </motion.div>

                  {/* Animated Border Gradient */}
                  {hoveredPlan === plan.id && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: plan.gradient, animation: 'slideIn 0.5s ease' }} />}

                  {/* Recommended Badge */}
                  {plan.recommended && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.3 }}>
                      <Chip label="پیشنهادی ویژه" size="small" sx={{ position: 'absolute', top: 0, left: '50%', borderRadius: '0 0 8px 8px', transform: 'translateX(-50%)', bgcolor: plan.color, color: '#fff', fontWeight: 700, fontSize: '0.7rem', px: 1.5, py: 1 }} />
                    </motion.div>
                  )}

                  {/* Planet Image */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <motion.div animate={{ rotate: hoveredPlan === plan.id ? 10 : 0, scale: hoveredPlan === plan.id ? 1.05 : 1 }} transition={{ duration: 0.3 }}>
                      <Box sx={{ width: 80, height: 80, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: '50%' }}>
                        <Image src={plan.img} alt={plan.title} width={70} height={70} priority />
                      </Box>
                    </motion.div>
                  </Box>

                  {/* Title & Slogan */}
                  <Typography textAlign="center" sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 0.5 }}>
                    {plan.title}
                  </Typography>
                  <Typography textAlign="center" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', mb: 2 }}>
                    {plan.slogan}
                  </Typography>

                  <Divider sx={{ my: 2, bgcolor: 'rgba(107, 78, 255, 0.15)' }} />

                  {/* Delivery Time */}
                  <Typography textAlign="center" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', mb: 1 }}>
                    ⏱ زمان تحویل: {plan.delivery_time}
                  </Typography>

                  {/* Original Price with Strike */}
                  <Typography textAlign="center" sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through', mb: 0.5 }}>
                    {plan.original_price} تومان
                  </Typography>

                  {/* Discounted Price */}
                  <Typography textAlign="center" sx={{ fontSize: '1.8rem', fontWeight: 800, background: `linear-gradient(135deg, ${plan.color}, #FFFFFF)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 0.5 }}>
                    {plan.price}{' '}
                    <Typography component="span" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                      تومان
                    </Typography>
                  </Typography>

                  {/* Discount Label */}
                  <Typography textAlign="center" sx={{ fontSize: '0.6rem', color: '#4ade80', mb: 1 }}>
                    🔥 با ۵۰٪ تخفیف ویژه
                  </Typography>

                  {/* Offers For */}
                  {plan.offers_for && (
                    <Typography textAlign="center" sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', mt: 1, mb: 2 }}>
                      🎯 مناسب برای: {plan.offers_for.join('، ')}
                    </Typography>
                  )}

                  <Divider sx={{ my: 2, bgcolor: 'rgba(107, 78, 255, 0.15)' }} />

                  {/* Features Accordion */}
                  <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none', '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<MdExpandMore size={22} style={{ color: plan.color }} />} sx={{ px: 0, minHeight: 'auto' }}>
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: plan.color }}>✨ مشاهده امکانات ({ConvertToPersianDigit(plan.features.length)} مورد)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pt: 1 }}>
                      {plan.features.map((feature, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                            <TbCheck size={14} color={plan.color} />
                            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{feature}</Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      fullWidth
                      component="a"
                      href="https://ble.ir/vortexwebteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 2,
                        py: 1.2,
                        borderRadius: '40px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        bgcolor: plan.recommended ? '#25D366' : `rgba(107, 78, 255, 0.15)`,
                        color: '#fff',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        border: plan.recommended ? 'none' : '1px solid rgba(107, 78, 255, 0.3)',
                        '&:hover': { transform: 'translateY(-2px)', bgcolor: plan.recommended ? '#128C7E' : 'rgba(107, 78, 255, 0.25)', boxShadow: plan.recommended ? '0 5px 20px rgba(37, 211, 102, 0.3)' : `0 5px 20px ${plan.color}20` },
                      }}
                    >
                      {plan.recommended ? '🔥 دریافت مشاوره ویژه' : '💬 دریافت مشاوره'}
                    </Button>
                  </motion.div>

                  {/* Sparkle Decoration */}
                  {hoveredPlan === plan.id && (
                    <Box sx={{ position: 'absolute', bottom: 16, right: 16, opacity: 0.5 }}>
                      <TbSparkles size={20} color={plan.color} />
                    </Box>
                  )}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Comparison Table Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Box sx={{ mt: { xs: 10, md: 12 } }}>
            <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 4 }}>
              📊 مقایسه کامل پکیج‌ها
            </Typography>

            {/* Desktop Table */}
            {!isMobile && (
              <TableContainer component={Paper} sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', borderRadius: '24px', overflowX: 'auto', border: '1px solid rgba(107, 78, 255, 0.15)' }}>
                <Table sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ bgcolor: 'rgba(107, 78, 255, 0.2)', color: '#fff', fontWeight: 700, fontSize: '1rem', textAlign: 'right', py: 2 }}>ویژگی</TableCell>
                      {plans.map((plan) => (
                        <TableCell key={plan.id} align="center" sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', color: plan.color, fontWeight: 700, fontSize: '0.9rem', py: 2 }}>
                          {plan.title}
                          <Typography sx={{ fontSize: '0.65rem', color: '#4ade80', textDecoration: 'line-through', opacity: 0.6 }}>{plan.original_price}</Typography>
                          <Typography sx={{ fontSize: '0.7rem', color: plan.color }}>{plan.price}</Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {featureGroups.map((group) => (
                      <React.Fragment key={group.category}>
                        <TableRow>
                          <TableCell colSpan={6} sx={{ bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#6B4EFF', fontWeight: 700, fontSize: '0.9rem', textAlign: 'right', py: 1.5 }}>
                            {group.category}
                          </TableCell>
                        </TableRow>
                        {group.items.map((item: any) => (
                          <TableRow key={item.name} sx={{ '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.05)' } }}>
                            <TableCell sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textAlign: 'right', py: 1.5 }}>{item.name}</TableCell>
                            {plans.map((plan) => {
                              const value = item[plan.id];
                              const hasValue = value === true || (typeof value === 'string' && value !== '');
                              return (
                                <TableCell key={plan.id} align="center" sx={{ py: 1.5 }}>
                                  {hasValue ? typeof value === 'boolean' ? <TbCheck style={{ color: '#4ade80', fontSize: '1.2rem' }} /> : <Typography sx={{ color: '#fff', fontSize: '0.75rem' }}>{value}</Typography> : <MdClose style={{ color: '#f87171', fontSize: '1.2rem' }} />}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Mobile Accordion Table */}
            {isMobile && <ComparisonTableMobile />}
          </Box>
        </motion.div>

        {/* Footer Note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Typography textAlign="center" sx={{ mt: 6, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
            * قیمت‌ها با ۵۰٪ تخفیف ویژه تا {discountEndDate} نمایش داده شده است
          </Typography>
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

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}
