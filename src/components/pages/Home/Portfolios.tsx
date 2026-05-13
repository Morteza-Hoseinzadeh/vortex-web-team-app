'use client';

import { useMemo, useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, useTheme, Skeleton, Chip, Fade } from '@mui/material';
import { TbEye, TbArrowRight, TbArrowLeft } from 'react-icons/tb';
import { FaCheck, FaSpinner } from 'react-icons/fa';
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
  const theme = useTheme();

  return (
    <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
      <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
        PORTFOLIO
      </Typography>

      <Typography component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
        نمونه‌کارهای{' '}
        <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          ورتکس
        </Box>
      </Typography>

      <Typography component="p" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '550px', mx: 'auto' }}>
        هر پروژه یک داستان موفقیت است
      </Typography>
    </Box>
  );
}

function CategoryFilters({ categories, activeCategory, onCategoryChange }: { categories: string[]; activeCategory: Category; onCategoryChange: (cat: Category) => void }) {
  return (
    <Box display="flex" flexWrap="wrap" gap={{ xs: 1.5, md: 2 }} justifyContent="center" mb={{ xs: 6, md: 8 }}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onCategoryChange(category as Category)}
          variant={category === activeCategory ? 'filled' : 'outlined'}
          sx={{
            px: { xs: 1, md: 2 },
            py: { xs: 2, md: 2.5 },
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
            fontWeight: 600,
            borderRadius: '30px',
            bgcolor: category === activeCategory ? '#6B4EFF' : 'transparent',
            color: category === activeCategory ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
            borderColor: 'rgba(107, 78, 255, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: category === activeCategory ? '#6B4EFF' : 'rgba(107, 78, 255, 0.15)',
              transform: 'translateY(-2px)',
            },
          }}
        />
      ))}
    </Box>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const projectName = item.description.split(' - ')[0].trim();
  const projectDesc = item.description.split(' - ')[1]?.trim() || item.description;

  return (
    <Fade in={true} timeout={index * 100}>
      <Box component="article" sx={{ position: 'relative', width: '100%', height: { xs: '340px', sm: '380px', md: '420px' }, borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.4s ease', '& .card-overlay': { opacity: 1 }, '&:hover': { transform: 'translateY(-8px)', '& .card-image': { transform: 'scale(1.05)' } } }}>
        {/* Image */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          {!imageLoaded && <Skeleton variant="rectangular" width="100%" height="100%" sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(107, 78, 255, 0.1)' }} />}
          <Image className="card-image" src={item.mockup} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} onLoad={() => setImageLoaded(true)} priority={index < 3} />
        </Box>

        {/* Views Counter */}
        <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 3, bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', px: 1.5, py: 0.5, borderRadius: '20px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TbEye size={16} color="#fff" />
          <Typography sx={{ fontSize: '0.75rem', color: '#fff', fontWeight: 600 }}>{ConvertToPersianDigit(item.views)}</Typography>
        </Box>

        {/* Overlay */}
        <Box className="card-overlay" sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 5, 30, 0.95) 0%, rgba(107, 78, 255, 0.7) 50%, transparent 100%)', opacity: { xs: 1, md: 0 }, transition: 'opacity 0.4s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: { xs: 2.5, sm: 3, md: 3.5 } }}>
          {/* Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '10px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={item.logo} alt={item.alt} width={36} height={36} style={{ objectFit: 'contain' }} />
            </Box>
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{projectName}</Typography>
          </Box>

          {/* Description */}
          <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{projectDesc}</Typography>

          {/* Categories */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {item.category.slice(0, 2).map((cate, i) => (
              <Typography key={i} sx={{ fontSize: '0.65rem', px: 1, py: 0.3, borderRadius: '8px', bgcolor: cate === 'محرمانه' ? 'rgba(107, 78, 255, 0.3)' : 'rgba(255,255,255,0.15)', color: '#fff' }}>
                #{cate}
              </Typography>
            ))}
          </Box>

          {/* Status */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            {item.status === 'در حال توسعه' ? <FaSpinner size={14} color="#FFA500" /> : <FaCheck size={14} color="#4CAF50" />}
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{item.status}</Typography>
          </Box>

          {/* Button */}
          <Button
            disabled={!item.live_url}
            component="a"
            href={item.live_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<TbArrowLeft style={{ marginRight: '8px' }} />}
            sx={{ width: 'fit-content', py: 0.8, px: 2, borderRadius: '25px', fontSize: '0.75rem', fontWeight: 600, bgcolor: item.live_url ? '#6B4EFF' : 'rgba(255,255,255,0.1)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: item.live_url ? '#7B61FF' : 'rgba(255,255,255,0.15)', transform: 'translateX(4px)' } }}
          >
            {item.live_url ? 'مشاهده پروژه' : 'در حال بروزرسانی'}
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}

function PortfolioCardSkeleton() {
  return (
    <Box sx={{ width: '100%', height: { xs: '340px', sm: '380px', md: '420px' }, borderRadius: '24px', overflow: 'hidden' }}>
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
    <Box component="section" sx={{ width: '100%', py: { xs: 6, md: 8, lg: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 8 }, bgcolor: '#0A0D1A' }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <PortfolioHeader />

        {!loading && categories.length > 1 && <CategoryFilters categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />}

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
      </Box>
    </Box>
  );
}
