'use client';

import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function CompanyComments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  const comments = [
    {
      logo: '/assets/logo/company-logo/dorna-logo.png',
      name: 'کلینیک زیبایی درنا',
      rating: 5,
      text: 'تجربه همکاری با ورتکس فوق‌العاده بود. طراحی سایت ما کاملاً حرفه‌ای و مدرن شد و نرخ تبدیل مشتریانمان به طور چشمگیری افزایش پیدا کرد. پشتیبانی عالی و تحویل به موقع!',
    },
    {
      logo: '/assets/logo/company-logo/zichat-logo.png',
      name: 'زیچت',
      rating: 5,
      text: 'ورتکس نه تنها یک وبسایت زیبا برای ما ساخت، بلکه با بهینه‌سازی سئو کمک کرد تا در جستجوهای گوگل رتبه‌های اول را بگیریم. واقعاً از نتیجه راضی هستیم.',
    },
    {
      logo: '/assets/logo/company-logo/rabet-automatic-kasra-logo.png',
      name: 'رابط اتوماتیک کسری',
      rating: 5,
      text: 'طراحی رابط کاربری فروشگاه آنلاین ما توسط ورتکس انجام شد و بازخورد مشتریان بسیار مثبت بوده. سرعت سایت عالی و تجربه کاربری بی‌نقص است.',
    },
    {
      logo: '/assets/logo/company-logo/zephyr-logo.png',
      name: 'زفیـر',
      rating: 5,
      text: 'ما به دنبال یک تیم حرفه‌ای برای بازطراحی برند و وبسایت بودیم. ورتکس دقیقاً همان چیزی بود که نیاز داشتیم. خلاقیت و دقت در جزئیات تحسین‌برانگیز است.',
    },
    {
      logo: '/assets/logo/company-logo/chroma-ui.png',
      name: 'کروما یو آی',
      rating: 5,
      text: 'کتابخانه کامپوننت‌های کروما با کمک ورتکس توسعه داده شد. همکاری سریع، کد تمیز و طراحی زیبا. بهترین تجربه همکاری با یک تیم توسعه!',
    },
    {
      logo: '/assets/logo/company-logo/personal-portfolio.png',
      name: 'پورتفولیو شخصی',
      rating: 5,
      text: 'پورتفولیوی شخصی من حالا دقیقاً همان چیزی است که می‌خواستم: مینیمال، سریع و جذاب. از مشاوره اولیه تا تحویل نهایی، همه چیز حرفه‌ای بود.',
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Box
        key={i}
        component="span"
        sx={{
          color: i < rating ? '#FFD700' : 'rgba(255,255,255,0.2)',
          fontSize: '1.2rem',
        }}
      >
        ★
      </Box>
    ));
  };

  return (
    <Box component="section" sx={{ px: { xs: 2, md: 4, lg: 6 }, bgcolor: 'rgba(10, 5, 30, 0.95)', textAlign: 'center', position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
      {/* Header */}
      <Box mb={{ xs: 8, md: 12 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '3.3rem' }, fontWeight: 900, color: '#fff', mb: 3, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            🚀
          </Box>
          نظرات مشتریان
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            🚀
          </Box>
        </Typography>

        <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', maxWidth: '900px', mx: 'auto' }}>
          بازخورد افرادی که به ورتکس اعتماد کرده‌اند و نتیجه واقعی گرفته‌اند
        </Typography>
      </Box>

      {/* Comments Grid */}
      <Grid container spacing={4} justifyContent="center">
        {comments.map((comment, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Box
              sx={{
                bgcolor: 'linear-gradient(135deg, rgba(107, 78, 255, 0.3) 0%, rgba(80, 50, 150, 0.4) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(107, 78, 255, 0.5)',
                borderRadius: '32px',
                p: { xs: 4, md: 5 },
                boxShadow: '0 16px 50px rgba(107, 78, 255, 0.3)',
                transition: 'all 0.5s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { transform: 'translateY(-12px)', boxShadow: '0 28px 80px rgba(107, 78, 255, 0.45)', bgcolor: 'linear-gradient(135deg, rgba(107, 78, 255, 0.4) 0%, rgba(100, 70, 180, 0.5) 100%)' },
              }}
            >
              {/* Logo + Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 4 }}>
                <Box sx={{ width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 }, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                  <Image src={comment.logo} alt={comment.name} width={70} height={70} style={{ objectFit: 'contain', backgroundColor: '#fff' }} />
                </Box>
                <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 800, color: '#fff', textAlign: 'center' }}>{comment.name}</Typography>
              </Box>

              {/* Star Rating */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 3 }}>{renderStars(comment.rating)}</Box>

              {/* Comment Text with Quotes */}
              <Box sx={{ position: 'relative', flex: 1 }}>
                <FaQuoteLeft style={{ position: 'absolute', top: -10, left: isMobile ? -5 : 0, fontSize: '2.5rem', opacity: 0.2, color: theme.palette.primary.main }} />
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.8, fontWeight: 500, position: 'relative', zIndex: 1 }}>{comment.text}</Typography>
                <FaQuoteRight style={{ position: 'absolute', bottom: -20, right: isMobile ? -5 : 0, fontSize: '2.5rem', opacity: 0.2, color: theme.palette.primary.main }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
