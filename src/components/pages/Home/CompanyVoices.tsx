'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function CompanyComments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const comments = [
    {
      logo: '/assets/logo/company-logo/dorna-logo.png',
      name: 'رضا عظیمی',
      position: 'مدیر کلینیک زیبایی درنا',
      rating: 5,
      text: 'تجربه همکاری با ورتکس فوق‌العاده بود. طراحی سایت ما کاملاً حرفه‌ای و مدرن شد و نرخ تبدیل مشتریانمان به طور چشمگیری افزایش پیدا کرد. پشتیبانی عالی و تحویل به موقع!',
    },
    {
      logo: '/assets/logo/company-logo/cityagi-logo.png',
      name: 'میلاد',
      position: 'مدیر فروشگاه لباس ورزشی سیتی آگی',
      rating: 5,
      text: 'قبل از همکاری با ورتکس، دو تجربه ناموفق با تیم‌های دیگه داشتم. اما این بار کاملاً متفاوت بود. تیم ورتکس خیلی حرفه‌ای و زمان‌بندی رو دقیق رعایت کردن. فروشگاه ورزشی ما الان سرعت بالایی داره و مشتریها از طراحی راضی‌اند.',
    },
    {
      logo: '/assets/logo/company-logo/customs-vehicle-management.jpeg',
      name: 'رضا منصوری',
      position: 'مدیر سامانه خودروهای گمرکی',
      rating: 5,
      text: 'این پروژه با توجه به ماهیت حساس و محرمانه اطلاعات خودروهای گمرکی، نیازمند بالاترین سطح امنیت و دقت بود. تیم ورتکس با درک کامل الزامات امنیتی و فرآیندهای پیچیده گمرکی، سامانه‌ای پایدار و عاری از خطا تحویل دادند.',
    },
    {
      logo: '/assets/logo/company-logo/zichat-logo.png',
      name: 'جواد علائی',
      position: 'سرپرست برنامه زیچت',
      rating: 5,
      text: 'ورتکس نه تنها یک وبسایت زیبا برای ما ساخت، بلکه با بهینه‌سازی سئو کمک کرد تا در جستجوهای گوگل رتبه‌های اول را بگیریم.',
    },
    {
      logo: '/assets/logo/company-logo/rabet-automatic-kasra-logo.png',
      name: 'امیر',
      position: 'مدیر پروژه رابط اتوماتیک کسری',
      rating: 5,
      text: 'طراحی رابط کاربری فروشگاه آنلاین ما توسط ورتکس انجام شد و بازخورد مشتریان بسیار مثبت بوده. سرعت سایت عالی و تجربه کاربری بی‌نقص است.',
    },
    {
      logo: '/assets/logo/company-logo/zephyr-logo.png',
      name: 'زفیـر',
      position: 'مدیر برند زفیر',
      rating: 5,
      text: 'ما به دنبال یک تیم حرفه‌ای برای بازطراحی برند و وبسایت بودیم. ورتکس دقیقاً همان چیزی بود که نیاز داشتیم. خلاقیت و دقت در جزئیات تحسین‌برانگیز است.',
    },
    {
      logo: '/assets/logo/company-logo/chroma-ui.png',
      name: 'کروما یو آی',
      position: 'توسعه‌دهنده ارشد کروما',
      rating: 5,
      text: 'کتابخانه کامپوننت‌های کروما با کمک ورتکس توسعه داده شد. همکاری سریع، کد تمیز و طراحی زیبا. بهترین تجربه همکاری با یک تیم توسعه!',
    },
    {
      logo: '/assets/logo/company-logo/personal-portfolio.png',
      name: 'پورتفولیو شخصی',
      position: 'طراح و برنامه‌نویس فریلنسر',
      rating: 5,
      text: 'پورتفولیوی شخصی من حالا دقیقاً همان چیزی است که می‌خواستم: مینیمال، سریع و جذاب. از مشاوره اولیه تا تحویل نهایی، همه چیز حرفه‌ای بود.',
    },
  ];

  const itemsPerPage = isSmallMobile ? 1 : isMobile ? 1 : 1;
  const totalPages = comments.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Box key={i} component="span" sx={{ color: i < rating ? '#FFD700' : '#2a2a3e', fontSize: '1.1rem' }}>
        ★
      </Box>
    ));
  };

  const currentComment = comments[currentIndex];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12, lg: 15 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#05050A', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box sx={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,78,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', right: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,79,216,0.08) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />

      {/* Header */}
      <Box textAlign="center" mb={{ xs: 6, md: 8 }} sx={{ position: 'relative', zIndex: 1 }}>
        <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, letterSpacing: '4px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2 }}>TESTIMONIALS</Typography>
        <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>نظر مشتریان ما</Typography>
        <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, color: 'rgba(255,255,255,0.5)', maxWidth: '550px', mx: 'auto' }}>بیش از {ConvertToPersianDigit(comments?.length)} کسب‌وکار به ما اعتماد کرده‌اند</Typography>
      </Box>

      {/* Carousel */}
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '900px', mx: 'auto' }}>
        {/* Main Card */}
        <Box sx={{ bgcolor: '#0A0A12', borderRadius: '32px', p: { xs: 3, sm: 4, md: 5 }, border: '1px solid rgba(107, 78, 255, 0.2)', transition: 'all 0.3s ease', opacity: isAnimating ? 0.5 : 1, transform: isAnimating ? 'scale(0.98)' : 'scale(1)' }}>
          {/* Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: 2.5, mb: 2 }}>
            <Box sx={{ width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 }, borderRadius: '50%', overflow: 'hidden', bgcolor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(107, 78, 255, 0.3)' }}>
              <Image src={currentComment.logo} alt={currentComment.name} width={70} height={70} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.2rem' }, fontWeight: 600, color: '#FFFFFF' }}>{currentComment.name}</Typography>
              {currentComment.position && <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', mt: 0.3 }}>{currentComment.position}</Typography>}
              <Box sx={{ display: 'flex', gap: 0.3, mt: 0.8 }}>{renderStars(currentComment.rating)}</Box>
            </Box>
          </Box>

          {/* Comment Text */}
          <Box display={'flex'} alignItems={'center'} position={'relative'}>
            {/* Quote icon top */}
            <Box position={'absolute'} right={0} top={0}>
              <FaQuoteLeft style={{ color: '#6B4EFF', opacity: 0.2, fontSize: '2.5rem', marginBottom: '1.5rem' }} />
            </Box>
            <Box mt={2}>
              <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', mb: 4, textAlign: 'right', fontWeight: 400 }}>"{currentComment.text}"</Typography>
            </Box>
            {/* Quote icon bottom */}
            <Box position={'absolute'} left={0} bottom={0}>
              <FaQuoteLeft style={{ color: '#6B4EFF', opacity: 0.2, fontSize: '2.5rem', marginBottom: '1.5rem' }} />
            </Box>
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: { xs: -10, sm: -20, md: -30 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#6B4EFF', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)' }, zIndex: 2 }}>
          <FaChevronLeft />
        </IconButton>

        <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: { xs: -10, sm: -20, md: -30 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#6B4EFF', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)' }, zIndex: 2 }}>
          <FaChevronRight />
        </IconButton>
      </Box>

      {/* Dots Indicator */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 5, position: 'relative', zIndex: 1 }}>
        {comments.map((_, idx) => (
          <Box key={idx} onClick={() => goToSlide(idx)} sx={{ width: idx === currentIndex ? 32 : 8, height: 8, borderRadius: '4px', bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.3)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.5)' } }} />
        ))}
      </Box>
    </Box>
  );
}
