'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronRight, FaChevronLeft, FaStar } from 'react-icons/fa';
import { TbSparkles } from 'react-icons/tb';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

export default function CompanyComments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const comments = [
    {
      logo: '/assets/logo/company-logo/Farur-Logo.png',
      name: 'فارور صنعت هرمز',
      position: 'مدیرعامل | فارور صنعت هرمز',
      rating: 5,
      text: 'همکاری با ورتکس یک تجربه حرفه‌ای و لذت‌بخش بود. از مشاوره اولیه تا طراحی، توسعه و تحویل نهایی، همه چیز دقیق و مطابق زمان‌بندی پیش رفت. سایت ما اکنون سرعت بالایی دارد و مشتریانمان به راحتی می‌توانند با ما در ارتباط باشند.',
    },
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
      name: 'امیر خیرالهی',
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
      text: `The Chromaui component library was built in collaboration with Vortex. We experienced fast and efficient teamwork, clean and maintainable code, and a beautifully designed output. Without a doubt, the best development team we've worked with!`,
    },
    {
      logo: '/assets/logo/company-logo/personal-portfolio.png',
      name: 'پورتفولیو شخصی',
      position: 'طراح و برنامه‌نویس فریلنسر',
      rating: 5,
      text: 'پورتفولیوی شخصی من حالا دقیقاً همان چیزی است که می‌خواستم: مینیمال، سریع و جذاب. از مشاوره اولیه تا تحویل نهایی، همه چیز حرفه‌ای بود.',
    },
  ];

  const totalPages = comments.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isAutoPlaying, currentIndex]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
        <Box component="span" sx={{ color: i < rating ? '#FFD700' : 'rgba(255,255,255,0.15)', fontSize: '1.1rem', textShadow: i < rating ? '0 0 8px #FFD700' : 'none' }}>
          ★
        </Box>
      </motion.span>
    ));
  };

  const currentComment = comments[currentIndex];

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7, lg: 9 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(25)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${12 + Math.random() * 12}s ease-in-out infinite`, animationDelay: `${Math.random() * 6}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.12) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 5s ease-in-out infinite 2.5s' }} />

      <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ TESTIMONIALS ✦</Typography>
            </Box>

            <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              نظر{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                مشتریان{' '}
              </Box>
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
              بیش از {ConvertToPersianDigit(comments?.length)} کسب‌وکار به ما اعتماد کرده‌اند
            </Typography>
          </Box>
        </motion.div>

        {/* Carousel Section */}
        <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }} onMouseEnter={pauseAutoPlay} onMouseLeave={resumeAutoPlay}>
          {/* Animated Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={currentIndex} custom={direction} initial={{ opacity: 0, x: direction === 1 ? 100 : -100, rotateY: direction === 1 ? -15 : 15 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: direction === 1 ? -100 : 100, rotateY: direction === 1 ? 15 : -15 }} transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}>
              <Box sx={{ bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', borderRadius: '40px', p: { xs: 3, sm: 4, md: 5 }, position: 'relative', overflow: 'hidden' }}>
                {/* Animated Border Gradient */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF, #6B4EFF)', backgroundSize: '200% 100%', animation: 'borderFlow 3s linear infinite' }} />

                {/* Decorative Sparkles */}
                <Box sx={{ position: 'absolute', top: 20, left: 20, opacity: 0.3 }}>
                  <TbSparkles size={24} color="#6B4EFF" />
                </Box>
                <Box sx={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.3 }}>
                  <TbSparkles size={24} color="#FF4FD8" />
                </Box>

                {/* Profile Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2.5, mb: 3, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'right' } }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
                    <Box sx={{ width: { xs: 70, md: 80 }, height: { xs: 70, md: 80 }, borderRadius: '50%', overflow: 'hidden', bgcolor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(107, 78, 255, 0.4)', boxShadow: '0 0 30px rgba(107, 78, 255, 0.3)' }}>
                      <Image src={currentComment.logo} alt={currentComment.name} width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  </motion.div>

                  <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                    <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>{currentComment.name}</Typography>
                    {currentComment.position && <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', mt: 0.5 }}>{currentComment.position}</Typography>}
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>{renderStars(currentComment.rating)}</Box>
                  </Box>
                </Box>

                {/* Quote Icon */}
                <Box sx={{ position: 'relative', mt: 3 }}>
                  <FaQuoteLeft style={{ position: 'absolute', top: -15, right: 0, color: '#6B4EFF', opacity: 0.15, fontSize: '4rem' }} />

                  {/* Comment Text */}
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }, lineHeight: 1.9, color: 'rgba(255, 255, 255, 0.85)', textAlign: currentComment?.name === 'کروما یو آی' ? 'left' : 'right', fontWeight: 400, fontStyle: 'italic', px: { xs: 1, sm: 2 }, py: 2 }}>"{currentComment.text}"</Typography>

                  <FaQuoteLeft style={{ position: 'absolute', bottom: -15, left: 0, color: '#6B4EFF', opacity: 0.15, fontSize: '4rem', transform: 'rotate(180deg)' }} />
                </Box>

                {/* Rating Badge */}
                <Box sx={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', alignItems: 'center', gap: 0.5, bgcolor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', px: 1.5, py: 0.5, borderRadius: '20px' }}>
                  <FaStar size={12} color="#FFD700" />
                  <Typography sx={{ fontSize: '0.7rem', color: '#fff' }}>{ConvertToPersianDigit(`${currentComment.rating}.0`)}</Typography>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: { xs: -15, sm: -25, md: -35 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(10px)', color: '#6B4EFF', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)', transform: 'translateY(-50%) scale(1.1)' }, transition: 'all 0.3s ease', zIndex: 10 }}>
              <FaChevronLeft size={20} />
            </IconButton>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: { xs: -15, sm: -25, md: -35 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(10px)', color: '#6B4EFF', width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)', transform: 'translateY(-50%) scale(1.1)' }, transition: 'all 0.3s ease', zIndex: 10 }}>
              <FaChevronRight size={20} />
            </IconButton>
          </motion.div>
        </Box>

        {/* Dots Indicator */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 5 }}>
            {comments.map((_, idx) => (
              <Box key={idx} onClick={() => goToSlide(idx)} sx={{ width: idx === currentIndex ? 40 : 8, height: 8, borderRadius: '4px', bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.3)', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&:hover': { bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.6)' } }}>
                {idx === currentIndex && <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', background: 'linear-gradient(90deg, #6B4EFF, #9B7BFF)', animation: 'slideWave 2s ease-in-out infinite' }} />}
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Trust Badge */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mt: 6, pt: 4, borderTop: '1px solid rgba(107, 78, 255, 0.1)' }}>
            {[...Array(3)].map((_, i) => (
              <FaStar key={i} size={12} color="#FFD700" opacity={0.5} />
            ))}
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', fontStyle: 'italic' }}>نظرات واقعی مشتریان واقعی</Typography>
            {[...Array(3)].map((_, i) => (
              <FaStar key={i} size={12} color="#FFD700" opacity={0.5} />
            ))}
          </Box>
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

        @keyframes slideWave {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
}
