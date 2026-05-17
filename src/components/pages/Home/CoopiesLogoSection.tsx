'use client';

import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { Box, Typography, Skeleton, useMediaQuery, useTheme, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaStar } from 'react-icons/fa';

export default function CoopiesLogoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSmallMobile) setItemsPerPage(2);
    else if (isMobile) setItemsPerPage(3);
    else setItemsPerPage(6);
  }, [isMobile, isSmallMobile]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/portfolios');
        const data = response?.data?.data || response?.data || [];
        const formattedData = data.map((item: any) => ({
          ...item,
          views: Number(item.views) || 0,
        }));
        setPortfolioItems(formattedData);
      } catch (err) {
        console.error('Error fetching portfolios:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  useEffect(() => {
    if (portfolioItems.length > 0 && !loading) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 8000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [portfolioItems.length, loading, currentIndex]);

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const visibleItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalPages - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 4, md: 5, lg: 6 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(15)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${12 + Math.random() * 10}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      {/* Glowing Orbs */}
      <Box sx={{ position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse 6s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', bottom: '20%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'pulse 6s ease-in-out infinite 3s' }} />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 3, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ TRUSTED BY ✦</Typography>
            </Box>

            <Typography component="h3" sx={{ fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 1 }}>
              بیش از {ConvertToPersianDigit(portfolioItems?.length)} کسب‌وکار
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }, color: 'rgba(255, 255, 255, 0.5)', maxWidth: '500px', mx: 'auto' }}>
              به تخصص و تجربه ما اعتماد کرده‌اند
            </Typography>
          </Box>
        </motion.div>

        {/* Loading Skeletons */}
        {loading ? (
          <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
            {[...Array(itemsPerPage)].map((_, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}>
                <Skeleton variant="rounded" width={120} height={80} sx={{ bgcolor: 'rgba(107, 78, 255, 0.1)', borderRadius: '20px' }} />
              </motion.div>
            ))}
          </Box>
        ) : (
          <>
            {/* Logos Slider */}
            <Box sx={{ position: 'relative', px: { xs: 4, sm: 6 } }}>
              {/* Navigation Buttons */}
              {portfolioItems.length > itemsPerPage && (
                <>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <IconButton onClick={prevSlide} sx={{ position: 'absolute', right: { xs: -15, sm: -20, md: -25 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(10px)', color: '#6B4EFF', zIndex: 10, transition: 'all 0.3s ease', width: { xs: 36, sm: 44 }, height: { xs: 36, sm: 44 }, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)', transform: 'translateY(-50%) scale(1.1)' } }}>
                      <FaChevronRight size={18} />
                    </IconButton>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <IconButton onClick={nextSlide} sx={{ position: 'absolute', left: { xs: -15, sm: -20, md: -25 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(10px)', color: '#6B4EFF', zIndex: 10, transition: 'all 0.3s ease', width: { xs: 36, sm: 44 }, height: { xs: 36, sm: 44 }, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)', transform: 'translateY(-50%) scale(1.1)' } }}>
                      <FaChevronLeft size={18} />
                    </IconButton>
                  </motion.div>
                </>
              )}

              {/* Items Grid with Animation */}
              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  {visibleItems.map((item: any, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05, duration: 0.3 }} whileHover={{ y: -8 }} onHoverStart={() => setHoveredIndex(idx)} onHoverEnd={() => setHoveredIndex(null)}>
                      <Tooltip title={item?.description} placement="top" arrow>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: { xs: 2.5, sm: 3 },
                            borderRadius: '24px',
                            bgcolor: hoveredIndex === idx ? 'rgba(107, 78, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            border: hoveredIndex === idx ? '1px solid rgba(107, 78, 255, 0.5)' : '1px solid rgba(107, 78, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            minWidth: { xs: '110px', sm: '130px', md: '140px' },
                            minHeight: { xs: 85, sm: 95, md: 105 },
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Glow Effect on Hover */}
                          {hoveredIndex === idx && <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(107, 78, 255, 0.2), transparent)', animation: 'glowPulse 1s ease-in-out' }} />}

                          <Image className="logo-image" src={item.logo} alt={item.alt || item.name || 'مشتری ورتکس'} width={100} height={70} priority style={{ width: 'auto', height: 'auto', maxWidth: '85px', maxHeight: '55px', borderRadius: '12px', objectFit: 'contain', filter: hoveredIndex === idx ? 'grayscale(0%) opacity(1) brightness(1.1)' : 'grayscale(100%) opacity(0.5)', transition: 'all 0.3s ease', position: 'relative', zIndex: 2 }} />
                        </Box>
                      </Tooltip>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* Pagination Dots with Animation */}
            {portfolioItems.length > itemsPerPage && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 5 }}>
                  {[...Array(totalPages)].map((_, idx) => (
                    <Box key={idx} onClick={() => goToSlide(idx)} sx={{ width: idx === currentIndex ? 32 : 8, height: 8, borderRadius: '4px', bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.3)', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden', '&:hover': { bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.6)' } }}>
                      {idx === currentIndex && <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', background: 'linear-gradient(90deg, #6B4EFF, #9B7BFF)', animation: 'slideWave 2s ease-in-out infinite' }} />}
                    </Box>
                  ))}
                </Box>
              </motion.div>
            )}

            {/* Trust Badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mt: 6, pt: 4, borderTop: '1px solid rgba(107, 78, 255, 0.1)' }}>
                {[...Array(3)].map((_, i) => (
                  <FaStar key={i} size={14} color="#FFD700" opacity={0.5} />
                ))}
                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', fontStyle: 'italic' }}>همراه با افتخار در کنار بهترین برندها</Typography>
                {[...Array(3)].map((_, i) => (
                  <FaStar key={i} size={14} color="#FFD700" opacity={0.5} />
                ))}
              </Box>
            </motion.div>
          </>
        )}
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(-30px) translateX(0px);
          }
          75% {
            transform: translateY(-15px) translateX(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.08);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
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
