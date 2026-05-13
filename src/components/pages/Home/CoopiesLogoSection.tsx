'use client';

import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { Box, Typography, Skeleton, useMediaQuery, useTheme, IconButton } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export default function CoopiesLogoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // تنظیم تعداد آیتم‌ها بر اساس عرض صفحه
    if (isSmallMobile) setItemsPerPage(2);
    else if (isMobile) setItemsPerPage(3);
    else setItemsPerPage(5);
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

  // اتوپلی اسلایدر
  useEffect(() => {
    if (portfolioItems.length > 0 && !loading) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
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
    <Box component="section" sx={{ width: '100%', py: { xs: 6, md: 8, lg: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, position: 'relative', overflow: 'hidden', bgcolor: '#0A0D1A' }}>
      {/* Background Gradient */}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 5, md: 6 }}>
          <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
            OUR TRUSTED PARTNERS
          </Typography>

          <Typography component="h3" sx={{ fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' }, fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
            مورد اعتماد برندهای موفق
          </Typography>

          <Typography component="p" sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }, color: 'rgba(255, 255, 255, 0.5)', maxWidth: '500px', mx: 'auto' }}>
            بیش از {ConvertToPersianDigit(portfolioItems?.length)} کسب‌وکار به ما اعتماد کرده‌اند
          </Typography>
        </Box>

        {/* Loading Skeletons */}
        {loading ? (
          <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
            {[...Array(itemsPerPage)].map((_, idx) => (
              <Box key={idx} sx={{ width: { xs: 100, sm: 120 }, textAlign: 'center' }}>
                <Skeleton variant="rounded" width={100} height={80} sx={{ bgcolor: 'rgba(107, 78, 255, 0.1)', borderRadius: '16px' }} />
              </Box>
            ))}
          </Box>
        ) : (
          <>
            {/* Logos Slider */}
            <Box sx={{ position: 'relative', px: { xs: 4, sm: 6 } }}>
              {/* Navigation Buttons */}
              {portfolioItems.length > itemsPerPage && (
                <>
                  <IconButton onClick={prevSlide} sx={{ position: 'absolute', right: { xs: -10, sm: -15 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#6B4EFF', zIndex: 2, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)' }, width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}>
                    <FaChevronRight size={18} />
                  </IconButton>

                  <IconButton onClick={nextSlide} sx={{ position: 'absolute', left: { xs: -10, sm: -15 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#6B4EFF', zIndex: 2, '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)' }, width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}>
                    <FaChevronLeft size={18} />
                  </IconButton>
                </>
              )}

              {/* Items Grid */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, sm: 3, md: 4 }, flexWrap: 'wrap', transition: 'all 0.3s ease' }}>
                {visibleItems.map((item: any, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: '20px',
                      bgcolor: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(107, 78, 255, 0.12)',
                      transition: 'all 0.3s ease',
                      minWidth: { xs: '100px', sm: '120px' },
                      minHeight: { xs: 80, sm: 90, md: 100 },
                      cursor: 'pointer',
                      flex: '0 1 auto',
                      '&:hover': { transform: 'translateY(-4px)', bgcolor: 'rgba(107, 78, 255, 0.06)', borderColor: 'rgba(107, 78, 255, 0.3)', '& .logo-image': { filter: 'grayscale(0%) opacity(1)' } },
                    }}
                  >
                    <Image className="logo-image" src={item.logo} alt={item.alt || item.name || 'مشتری ورتکس'} width={100} height={70} priority style={{ width: 'auto', height: 'auto', maxWidth: '80px', maxHeight: '50px', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)', transition: 'all 0.3s ease' }} />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Pagination Dots */}
            {portfolioItems.length > itemsPerPage && (
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
                {[...Array(totalPages)].map((_, idx) => (
                  <Box key={idx} onClick={() => goToSlide(idx)} sx={{ width: idx === currentIndex ? 28 : 8, height: 8, borderRadius: '4px', bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.3)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { bgcolor: idx === currentIndex ? '#6B4EFF' : 'rgba(107, 78, 255, 0.5)' } }} />
                ))}
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
