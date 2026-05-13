'use client';

import React, { useState } from 'react';
import { Box, Button, Grid, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Chip, Divider } from '@mui/material';
import Image from 'next/image';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { TbCheck, TbRocket, TbPlanet, TbBuildingStore, TbCrown, TbSun } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function PricingTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const plans = [
    {
      id: 'atarod',
      title: 'پکیج عطارد',
      slogan: 'شروع سریع',
      delivery_time: '۷–۱۲ روز کاری',
      price: '۶–۱۲ میلیون',
      price_value: 9000000,
      img: '/assets/image/pricing-table-planets/atarod.png',
      icon: <TbRocket size={24} />,
      color: '#6B4EFF',
      features: ['طراحی آماده حرفه‌ای', '۱–۳ صفحه', 'معرفی ساده خدمات', 'اتصال واتساپ', 'سرعت مناسب', '۷ روز پشتیبانی'],
      offers_for: ['افراد شخصی', 'فریلنسرها', 'پیج‌های تازه‌کار'],
      recommended: false,
    },
    {
      id: 'merikh',
      title: 'پکیج مریخ',
      slogan: 'اقتصادی حرفه‌ای',
      delivery_time: '۱۵–۲۵ روز کاری',
      price: '۱۲–۲۵ میلیون',
      price_value: 18500000,
      img: '/assets/image/pricing-table-planets/merikh.png',
      icon: <TbPlanet size={24} />,
      color: '#FF4FD8',
      features: ['طراحی نیمه‌اختصاصی', 'سایت ۵ صفحه', 'معرفی خدمات', 'فرم تماس', 'سئو پایه', 'سرعت مناسب', '۱ ماه پشتیبانی'],
      offers_for: ['کسب‌وکارهای نوپا', 'پیج‌های کاری'],
      recommended: true,
    },
    {
      id: 'zohre',
      title: 'پکیج زهره',
      slogan: 'شرکتی لاکچری',
      delivery_time: '۲۵–۴۰ روز کاری',
      price: '۲۵–۴۵ میلیون',
      price_value: 35000000,
      img: '/assets/image/pricing-table-planets/zohre.png',
      icon: <TbBuildingStore size={24} />,
      color: '#4A7DFF',
      features: ['طراحی شرکتی اختصاصی', '۵–۱۰ صفحه', 'نمونه‌کار', 'فرم تماس', 'سئو پایه', 'سرعت و امنیت استاندارد', 'اتصال واتساپ', '۲ ماه پشتیبانی', 'آموزش مدیریت سایت'],
      offers_for: ['شرکت‌ها', 'کلینیک‌ها', 'تیم‌های خدماتی'],
      recommended: false,
    },
    {
      id: 'zohal',
      title: 'پکیج زحل',
      slogan: 'فروش‌ساز حرفه‌ای',
      delivery_time: '۳۵–۵۵ روز کاری',
      price: '۴۵–۷۵ میلیون',
      price_value: 60000000,
      img: '/assets/image/pricing-table-planets/zohal.png',
      icon: <TbCrown size={24} />,
      color: '#FFA500',
      features: ['طراحی اختصاصی', 'فروشگاه کامل', 'درگاه پرداخت', 'پنل مدیریت محصولات', 'سئو صفحات محصول', 'تخفیف', 'اتصال واتساپ', '۳ ماه پشتیبانی', 'آموزش مدیریت فروشگاه'],
      offers_for: ['فروشگاه‌های حرفه‌ای', 'برندهای اینستاگرامی بزرگ'],
      recommended: false,
    },
    {
      id: 'khorshid',
      title: 'پکیج خورشید',
      slogan: 'لوکس خورشید',
      delivery_time: '۶۰–۹۰ روز کاری',
      price: '۹۰–۱۴۰ میلیون',
      price_value: 115000000,
      img: '/assets/image/pricing-table-planets/khorshid.png',
      icon: <TbSun size={24} />,
      color: '#FFD700',
      features: ['طراحی UX/UI اختصاصی', 'Next.js + Backend اختصاصی', 'چندزبانه', 'سئو فول', 'سرعت زیر ۱.۵ ثانیه', 'امنیت بالا', 'اتصال درگاه/واتساپ/ایمیل', 'پنل مدیریت', '۶ ماه پشتیبانی', 'آموزش مدیریت', 'قرارداد رسمی'],
      offers_for: ['استارتاپ‌های سرمایه‌دار'],
      recommended: false,
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

  // موبایل: نمایش جدول به صورت آکاردئونی
  const ComparisonTableMobile = () => (
    <Box sx={{ mt: 4 }}>
      {featureGroups.map((group) => (
        <Accordion key={group.category} sx={{ mb: 2, bgcolor: 'rgba(15, 12, 35, 0.6)', borderRadius: '20px !important', '&:before': { display: 'none' }, border: '1px solid rgba(107, 78, 255, 0.2)' }}>
          <AccordionSummary expandIcon={<MdExpandMore size={28} style={{ color: '#fff' }} />}>
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
      ))}
    </Box>
  );

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 2, md: 4, lg: 6 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradients */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
          <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
            PRICING
          </Typography>

          <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            جدول{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              تعرفه‌ها
            </Box>
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '600px', mx: 'auto' }}>
            هر پکیج مانند یک سیاره، امکانات و قدرتی منحصر به فرد دارد
          </Typography>
        </Box>

        {/* Pricing Cards Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {plans.map((plan) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={plan.id}>
              <Box sx={{ position: 'relative', height: '100%', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: `1px solid ${plan.recommended ? plan.color : 'rgba(107, 78, 255, 0.15)'}`, borderRadius: '28px', p: { xs: 3, md: 3.5 }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', borderColor: plan.color, bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                {/* Recommended Badge */}
                {plan.recommended && <Chip label="پیشنهادی" size="small" sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', bgcolor: plan.color, color: '#fff', fontWeight: 700, fontSize: '0.7rem' }} />}

                {/* Planet Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ width: 80, height: 80, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.3)', borderRadius: '50%' }}>
                    <Image src={plan.img} alt={plan.title} width={70} height={70} priority />
                  </Box>
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
                  زمان تحویل: {plan.delivery_time}
                </Typography>

                {/* Price */}
                <Typography textAlign="center" sx={{ fontSize: '1.8rem', fontWeight: 800, background: `linear-gradient(135deg, ${plan.color}, ${plan.color}80)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 0.5 }}>
                  {plan.price}{' '}
                  <Typography component="span" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                    تومان
                  </Typography>
                </Typography>

                {/* Offers For */}
                {plan.offers_for && (
                  <Typography textAlign="center" sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', mt: 1, mb: 2 }}>
                    مناسب برای: {plan.offers_for.join('، ')}
                  </Typography>
                )}

                <Divider sx={{ my: 2, bgcolor: 'rgba(107, 78, 255, 0.15)' }} />

                {/* Features Accordion */}
                <Accordion sx={{ bgcolor: 'transparent', boxShadow: 'none', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<MdExpandMore size={22} style={{ color: plan.color }} />} sx={{ px: 0, minHeight: 'auto' }}>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: plan.color }}>مشاهده امکانات ({ConvertToPersianDigit(plan.features.length)} مورد)</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pt: 1 }}>
                    {plan.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <TbCheck size={14} color={plan.color} />
                        <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>

                {/* CTA Button */}
                <Button
                  fullWidth
                  component="a"
                  href={`https://wa.me/989309363715?text=${encodeURIComponent(`سلام تیم ورتکس 👋\nعلاقه‌مند به ${plan.title} هستم (${plan.price} تومان)\n${plan.slogan}\nزمان تحویل: ${plan.delivery_time}\nلطفاً راهنمایی کنید 🙏`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<FaWhatsapp size={16} style={{ marginLeft: '8px' }} />}
                  sx={{ mt: 2, py: 1.2, borderRadius: '40px', fontSize: '0.75rem', fontWeight: 600, bgcolor: plan.recommended ? '#25D366' : `rgba(107, 78, 255, 0.15)`, color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', border: plan.recommended ? 'none' : '1px solid rgba(107, 78, 255, 0.3)', '&:hover': { transform: 'translateY(-2px)', bgcolor: plan.recommended ? '#128C7E' : 'rgba(107, 78, 255, 0.25)' } }}
                >
                  {plan.recommended ? 'دریافت مشاوره ویژه' : 'دریافت مشاوره'}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Comparison Table Section */}
        <Box sx={{ mt: { xs: 10, md: 12 } }}>
          <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 4 }}>
            مقایسه کامل پکیج‌ها
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
                        <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{plan.price}</Typography>
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

        {/* Footer Note */}
        <Typography textAlign="center" sx={{ mt: 6, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
          * قیمت‌ها بستگی به جزئیات پروژه دارد و ممکن است تغییر کند
        </Typography>
      </Box>
    </Box>
  );
}
