'use client';

import React from 'react';
import { Box, Button, Grid, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Image from 'next/image';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { TbCheck } from 'react-icons/tb';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function PricingTable() {
  const theme = useTheme();

  const plans = [
    { id: 'atarod', title: 'پکیج عطارد', slogan: 'شروع سریع', delivery_time: '۷–۱۲ روز کاری', price: 'از ۶–۱۲ میلیون', img: '/assets/image/pricing-table-planets/atarod.png', features: ['طراحی آماده حرفه‌ای', '۱–۳ صفحه', 'معرفی ساده خدمات', 'اتصال واتساپ', 'سرعت مناسب', '۷ روز پشتیبانی'], offers_for: ['افراد شخصی', 'فریلنسرها', 'پیج‌های تازه‌کار'], recommended: false },
    { id: 'merikh', title: 'پکیج مریخ', slogan: 'اقتصادی حرفه‌ای', delivery_time: '۱۵–۲۵ روز کاری', price: 'از ۱۲–۲۵ میلیون', img: '/assets/image/pricing-table-planets/merikh.png', features: ['طراحی نیمه‌اختصاصی', 'سایت ۵ صفحه', 'معرفی خدمات', 'فرم تماس', 'سئو پایه', 'سرعت مناسب', '۱ ماه پشتیبانی'], offers_for: ['کسب‌وکارهای نوپا', 'پیج‌های کاری'], recommended: true },
    { id: 'zohre', title: 'پکیج زهره', slogan: 'شرکتی لاکچری', delivery_time: '۲۵–۴۰ روز کاری', price: 'از ۲۵–۴۵ میلیون', img: '/assets/image/pricing-table-planets/zohre.png', features: ['طراحی شرکتی اختصاصی', '۵–۱۰ صفحه', 'نمونه‌کار', 'فرم تماس', 'سئو پایه', 'سرعت و امنیت استاندارد', 'اتصال واتساپ', '۲ ماه پشتیبانی', 'آموزش مدیریت سایت'], offers_for: ['شرکت‌ها', 'کلینیک‌ها', 'تیم‌های خدماتی'], recommended: false },
    { id: 'zohal', title: 'پکیج زحل', slogan: 'فروش‌ساز حرفه‌ای', delivery_time: '۳۵–۵۵ روز کاری', price: 'از ۴۵–۷۵ میلیون', img: '/assets/image/pricing-table-planets/zohal.png', features: ['طراحی اختصاصی', 'فروشگاه کامل', 'درگاه پرداخت', 'پنل مدیریت محصولات', 'سئو صفحات محصول', 'تخفیف', 'اتصال واتساپ', '۳ ماه پشتیبانی', 'آموزش مدیریت فروشگاه'], offers_for: ['فروشگاه‌های حرفه‌ای', 'برندهای اینستاگرامی بزرگ'], recommended: false },
    { id: 'khorshid', title: 'پکیج خورشید', slogan: 'لوکس خورشید', delivery_time: '۶۰–۹۰ روز کاری', price: 'از ۹۰–۱۴۰ میلیون', img: '/assets/image/pricing-table-planets/khorshid.png', features: ['طراحی UX/UI اختصاصی', 'Next.js + Backend اختصاصی', 'چندزبانه', 'سئو فول', 'سرعت زیر ۱.۵ ثانیه', 'امنیت بالا', 'اتصال درگاه/واتساپ/ایمیل', 'پنل مدیریت', '۶ ماه پشتیبانی', 'آموزش مدیریت', 'قرارداد رسمی'], offers_for: ['استارتاپ‌های سرمایه‌دار'], recommended: false },
  ];

  // گروه‌بندی ویژگی‌ها برای جدول مقایسه
  const featureGroups = [
    {
      category: 'طراحی و ساختار',
      items: [
        { name: 'تعداد صفحه', atarod: '۱–۳ صفحه', merikh: '۵ صفحه', zohre: '۵–۱۰ صفحه', zohal: 'نامحدود', khorshid: 'نامحدود' },
        { name: 'نوع طراحی', atarod: 'آماده حرفه‌ای', merikh: 'نیمه‌اختصاصی', zohre: 'شرکتی اختصاصی', zohal: 'اختصاصی', khorshid: 'UX/UI اختصاصی' },
        { name: 'بک‌اند اختصاصی', atarod: false, merikh: false, zohre: false, zohal: false, khorshid: true },
        { name: 'فروشگاه آنلاین', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
      ],
    },
    {
      category: 'امکانات ارتباطی',
      items: [
        { name: 'فرم تماس', atarod: false, merikh: true, zohre: true, zohal: true, khorshid: true },
        { name: 'اتصال واتساپ', atarod: true, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'درگاه پرداخت', atarod: false, merikh: false, zohre: false, zohal: true, khorshid: true },
        { name: 'چندزبانه', atarod: false, merikh: false, zohre: false, zohal: false, khorshid: true },
      ],
    },
    {
      category: 'سئو و عملکرد',
      items: [
        { name: 'سئو', atarod: false, merikh: 'پایه', zohre: 'پایه', zohal: 'صفحات محصول', khorshid: 'فول' },
        { name: 'سرعت و امنیت', atarod: 'مناسب', merikh: 'مناسب', zohre: 'استاندارد', zohal: 'استاندارد', khorshid: 'زیر ۱.۵ ثانیه + امنیت بالا' },
      ],
    },
    {
      category: 'پشتیبانی و خدمات',
      items: [
        { name: 'زمان پشتیبانی', atarod: '۷ روز', merikh: '۱ ماه', zohre: '۲ ماه', zohal: '۳ ماه', khorshid: '۶ ماه' },
        { name: 'آموزش مدیریت', atarod: false, merikh: false, zohre: true, zohal: true, khorshid: true },
        { name: 'قرارداد رسمی', atarod: false, merikh: false, zohre: false, zohal: false, khorshid: true },
      ],
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 2, md: 4, lg: 6 }, px: { xs: 1, md: 3, lg: 5 }, bgcolor: 'rgba(10, 5, 30, 0.95)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <Box mb={{ xs: 4, md: 8 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem', lg: '4.2rem' }, fontWeight: 900, color: '#fff', mb: 3, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
          جدول تعرفه‌ها
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            💎
          </Box>
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '800px', mx: 'auto' }}>
          هر پکیج مانند یک سیاره، امکانات و قدرتی منحصر به فرد دارد <br />
          بهترین را برای کسب‌وکارتان انتخاب کنید
        </Typography>
      </Box>

      {/* Pricing Cards - همان طراحی قبلی شما */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }} key={plan.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 420,
                position: 'relative',
                bgcolor: 'rgba(107, 78, 255, 0.22)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(107, 78, 255, 0.4)',
                borderRadius: '40px',
                p: { xs: 4, md: 5 },
                boxShadow: plan.recommended ? '0 24px 70px rgba(107, 78, 255, 0.5)' : '0 16px 50px rgba(107, 78, 255, 0.25)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: plan.recommended ? 10 : 1,
                overflow: 'hidden',
                '&:hover': { transform: 'translateY(-30px) scale(1.02)', bgcolor: 'rgba(107, 78, 255, 0.32)', boxShadow: '0 32px 90px rgba(107, 78, 255, 0.5)' },
                '&::before': plan.recommended ? { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, #6B4EFF, #A78BFA, #E0AAFF)', borderRadius: '40px 40px 0 0' } : {},
              }}
            >
              {/* Planet Image */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: 140, md: 180 }, height: { xs: 140, md: 180 }, mx: 'auto', mb: 4, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.5), inset 0 8px 32px rgba(0,0,0,0.4)', transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.1) rotate(8deg)' } }}>
                <Image src={plan.img} alt={plan.title} width={180} height={180} priority style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </Box>

              {/* Title & Slogan */}
              <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 900, color: '#fff', mb: 1 }}>{plan.title}</Typography>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.8)', mb: 3 }}>{plan.slogan}</Typography>

              {/* Deployment Time */}
              <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', mb: 2 }}>زمان تحویل: {plan.delivery_time}</Typography>

              {/* Price */}
              <Typography gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 900, color: theme.palette.primary.light }}>
                {plan.price}
              </Typography>

              {/* Offers For */}
              {plan.offers_for && <Typography sx={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', mb: 4, fontStyle: 'italic' }}>مناسب برای: {plan.offers_for.join('، ')}</Typography>}

              {/* Features List inside Accordion */}
              <Accordion sx={{ my: 2, bgcolor: 'transparent', boxShadow: 'none', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: '0 !important' } }}>
                <AccordionSummary expandIcon={<MdExpandMore size={28} style={{ color: '#fff' }} />} sx={{ px: 0, minHeight: '48px', '& .MuiAccordionSummary-content': { margin: 0 } }}>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>مشاهده امکانات کامل ({ConvertToPersianDigit(plan.features.length)} مورد)</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0, pt: 2 }}>
                  <Box component="ul" sx={{ textAlign: 'right', mb: 0 }}>
                    {plan.features.map((feature, i) => (
                      <Typography key={i} component="li" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.95)', mb: 2.5, pl: 3, position: 'relative', '&::before': { content: '"✦"', position: 'absolute', right: -20, color: theme.palette.primary.main, fontSize: '1.3rem' } }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>

              {/* CTA Button */}
              <Button fullWidth sx={{ py: { xs: 2, md: 2.5 }, borderRadius: '32px', fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 800, bgcolor: plan.recommended ? '#fff' : 'rgba(255,255,255,0.12)', color: plan.recommended ? '#000' : '#fff', backdropFilter: 'blur(12px)', border: plan.recommended ? 'none' : '2px solid rgba(255,255,255,0.3)', transition: 'all 0.4s ease', '&:hover': { bgcolor: plan.recommended ? '#f0f0f0' : 'rgba(255,255,255,0.22)', transform: 'scale(1.06)' } }}>
                انتخاب این پکیج
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Comparison Table Section */}
      <Box sx={{ mt: { xs: 10, md: 12 }, overflowX: 'auto' }}>
        <Typography component="h3" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 900, color: '#fff', mb: { xs: 2, md: 4 }, textAlign: 'center' }}>
          مقایسه کامل پکیج‌ها
        </Typography>

        <TableContainer component={Paper} sx={{ bgcolor: 'rgba(20, 10, 40, 0.85)', backdropFilter: 'blur(20px)', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(107, 78, 255, 0.3)' }}>
          <Table sx={{ minWidth: 1000 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'rgba(107, 78, 255, 0.4)', color: '#fff', fontWeight: 800, fontSize: '1.3rem', textAlign: 'right', py: 3 }}>ویژگی</TableCell>
                {plans.map((plan, index) => (
                  <TableCell key={plan.id} align="center" sx={{ bgcolor: index % 2 === 0 ? 'rgba(107, 78, 255, 0.5)' : 'rgba(107, 78, 255, 0.3)', color: '#fff', fontWeight: 800, fontSize: '1.15rem', py: 3 }}>
                    {plan.title}
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
                      {plan.price}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {featureGroups.map((group) => (
                <React.Fragment key={group.category}>
                  {/* Category Header */}
                  <TableRow>
                    <TableCell colSpan={plans.length + 1} sx={{ bgcolor: 'rgba(107, 78, 255, 0.35)', color: '#fff', fontWeight: 700, fontSize: '1.2rem', textAlign: 'right', py: 2.5 }}>
                      {group.category}
                    </TableCell>
                  </TableRow>

                  {/* Features in Group */}
                  {group.items.map((item: any) => (
                    <TableRow key={item.name} sx={{ '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.1)' } }}>
                      <TableCell sx={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.05rem', textAlign: 'right', py: 2.5, fontWeight: 600 }}>{item.name}</TableCell>
                      {plans.map((plan: any) => {
                        const value = item[plan.id];
                        const hasValue = value === true || (typeof value === 'string' && value !== '');

                        return (
                          <TableCell key={plan.id} align="center" sx={{ py: 2.5 }}>
                            {hasValue ? typeof value === 'boolean' ? <TbCheck style={{ color: '#4ade80', fontSize: '2.2rem' }} /> : <Typography sx={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{value}</Typography> : <MdClose style={{ color: '#f87171', fontSize: '2.2rem' }} />}
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
      </Box>
    </Box>
  );
}
