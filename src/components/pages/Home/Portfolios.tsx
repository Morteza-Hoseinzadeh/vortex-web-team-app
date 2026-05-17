'use client';

import { useMemo, useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, useTheme, Skeleton, Chip, Fade } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { TbEye, TbArrowRight, TbArrowLeft, TbSparkles } from 'react-icons/tb';
import { FaCheck, FaSpinner, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import axiosInstance from '@/utils/hooks/axiosInstance';

interface PortfolioItem {
  id: string;
  views: number;
  mockup: string;
  logo: string;
  alt: string;
  description: string;
  category: string[];
  status: 'در حال توسعه' | 'توسعه یافته شده';
  live_url: string | null;
}

type Category = 'همه' | string;

function PortfolioHeader() {
  return (
    <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 3, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
          <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ PORTFOLIO ✦</Typography>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
          نمونه‌کارهای{' '}
          <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
            ورتکس
          </Box>
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
          هر پروژه یک داستان موفقیت است
        </Typography>
      </motion.div>
    </Box>
  );
}

function CategoryFilters({ categories, activeCategory, onCategoryChange }: { categories: string[]; activeCategory: Category; onCategoryChange: (cat: Category) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
      <Box display="flex" flexWrap="wrap" gap={{ xs: 1.5, md: 2 }} justifyContent="center" mb={{ xs: 6, md: 8 }}>
        {categories.map((category, idx) => (
          <motion.div key={category} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Chip
              label={category}
              onClick={() => onCategoryChange(category as Category)}
              variant={category === activeCategory ? 'filled' : 'outlined'}
              sx={{
                px: { xs: 1.5, md: 2.5 },
                py: { xs: 2.5, md: 3 },
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                fontWeight: 600,
                borderRadius: '30px',
                bgcolor: category === activeCategory ? '#6B4EFF' : 'transparent',
                color: category === activeCategory ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(107, 78, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { bgcolor: category === activeCategory ? '#6B4EFF' : 'rgba(107, 78, 255, 0.2)', transform: 'translateY(-2px)', boxShadow: category === activeCategory ? '0 4px 15px rgba(107, 78, 255, 0.4)' : 'none' },
              }}
            />
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectName = item.description.split(' - ')[0].trim();
  const projectDesc = item.description.split(' - ')[1]?.trim() || item.description;

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <Box component="article" sx={{ position: 'relative', width: '100%', height: { xs: '360px', sm: '400px', md: '440px' }, borderRadius: '28px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: isHovered ? '0 20px 40px rgba(107, 78, 255, 0.3)' : 'none' }}>
        {/* Image Container */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          {!imageLoaded && <Skeleton variant="rectangular" width="100%" height="100%" sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(107, 78, 255, 0.1)' }} />}
          <motion.div animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%' }}>
            <Image className="card-image" src={item.mockup} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} onLoad={() => setImageLoaded(true)} priority={index < 3} />
          </motion.div>
        </Box>

        {/* Views Counter */}
        {item?.views !== 0 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 + 0.2 }}>
            <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 3, bgcolor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', px: 1.5, py: 0.5, borderRadius: '20px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <TbEye size={14} color="#fff" />
              <Typography sx={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>{ConvertToPersianDigit(item.views * 12)}</Typography>
            </Box>
          </motion.div>
        )}

        {/* Gradient Overlay */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 5, 30, 0.95) 0%, rgba(107, 78, 255, 0.6) 40%, transparent 100%)', opacity: isHovered ? 1 : 0.9, transition: 'opacity 0.4s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: { xs: 2.5, sm: 3, md: 3.5 } }}>
          {/* Logo and Name */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 44, height: 44, borderRadius: '12px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                <Image src={item.logo} alt={item.alt} width={40} height={40} style={{ objectFit: 'contain' }} />
              </Box>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{projectName}</Typography>
            </Box>
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.4 }}>
            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item?.alt}</Typography>
          </motion.div>

          {/* Categories */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.5 }}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {item.category.slice(0, 2).map((cate, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Typography sx={{ fontSize: '0.65rem', px: 1.2, py: 0.4, borderRadius: '10px', bgcolor: cate === 'محرمانه' ? 'rgba(107, 78, 255, 0.4)' : 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(4px)' }}>#{cate}</Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Status */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              {item.status === 'در حال توسعه' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                  <FaSpinner size={12} color="#FFA500" />
                </motion.div>
              ) : (
                <FaCheck size={12} color="#4CAF50" />
              )}
              <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>{item.status}</Typography>
            </Box>
          </motion.div>

          {/* Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 + 0.7 }} whileHover={{ x: 5 }}>
            <Button
              disabled={!item.live_url}
              component="a"
              href={item.live_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<TbArrowLeft size={16} style={{ marginRight: '8px' }} />}
              sx={{ width: 'fit-content', py: 0.8, px: 2.5, borderRadius: '25px', fontSize: '0.75rem', fontWeight: 600, bgcolor: item.live_url ? '#6B4EFF' : 'rgba(255,255,255,0.1)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: item.live_url ? '#7B61FF' : 'rgba(255,255,255,0.15)' } }}
            >
              {item.live_url ? 'مشاهده پروژه' : item?.category.includes('محرمانه') ? 'امکان مشاهده پروژه وجود ندارد' : 'در حال بروزرسانی'}
            </Button>
          </motion.div>
        </Box>

        {/* Sparkle Effect on Hover */}
        {isHovered && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.2), transparent)', animation: 'sparkle 0.5s ease-in-out' }} />}
      </Box>
    </motion.div>
  );
}

function PortfolioCardSkeleton() {
  return (
    <Box sx={{ width: '100%', height: { xs: '360px', sm: '400px', md: '440px' }, borderRadius: '28px', overflow: 'hidden' }}>
      <Skeleton variant="rectangular" width="100%" height="100%" sx={{ bgcolor: 'rgba(107, 78, 255, 0.08)' }} />
    </Box>
  );
}

export default function Portfolios() {
  const [activeCategory, setActiveCategory] = useState<Category>('همه');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axiosInstance.get('/api/portfolios');
        const data = response?.data?.data || response?.data || [];
        const formattedData = data.map((item: any) => ({
          ...item,
          views: Number(item.views) || 0,
        }));
        setPortfolioItems(formattedData);
      } catch (err) {
        console.error('Error fetching portfolios:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    portfolioItems.forEach((item) => item.category.forEach((c) => cats.add(c)));
    return ['همه', ...Array.from(cats)];
  }, [portfolioItems]);

  const filteredItems = useMemo(() => {
    return activeCategory === 'همه' ? portfolioItems : portfolioItems.filter((item) => item.category.includes(activeCategory));
  }, [activeCategory, portfolioItems]);

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 8, md: 10, lg: 12 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Particles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(20)].map((_, i) => (
          <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </Box>

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2 }}>
        <PortfolioHeader />

        {!loading && categories.length > 1 && <CategoryFilters categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />}

        <AnimatePresence mode="wait">
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {loading ? (
              [...Array(6)].map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`skeleton-${i}`}>
                  <PortfolioCardSkeleton />
                </Grid>
              ))
            ) : error ? (
              <Grid size={12}>
                <Typography textAlign="center" color="error" py={8}>
                  خطایی در بارگذاری نمونه‌کارها رخ داد
                </Typography>
              </Grid>
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                  <PortfolioCard item={item} index={index} />
                </Grid>
              ))
            ) : (
              <Grid size={12}>
                <Typography textAlign="center" color="rgba(255,255,255,0.5)" py={8}>
                  پروژه‌ای در این دسته یافت نشد
                </Typography>
              </Grid>
            )}
          </Grid>
        </AnimatePresence>
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

        @keyframes sparkle {
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
      `}</style>
    </Box>
  );
}
