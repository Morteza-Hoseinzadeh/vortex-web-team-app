'use client';

import { useMemo, useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, useTheme, Skeleton } from '@mui/material';
import { TbEye } from 'react-icons/tb'; // Eye icon for views
import Image from 'next/image';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import axiosInstance from '@/utils/hooks/axiosInstance';

// Types
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

// Portfolio Header (unchanged)
function PortfolioHeader() {
  const theme = useTheme();

  return (
    <Box textAlign="center" mb={6}>
      <Typography id="portfolios-heading" component="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 900, color: theme.palette.text.primary }}>
        ✨نمونه کارها✨
      </Typography>
      <Typography component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.6rem' }, fontWeight: 600, color: theme.palette.text.secondary, mt: 2 }}>
        این‌ها فقط نمونه‌کار نیستند؛ هر پروژه یک داستان موفقیت است
      </Typography>
    </Box>
  );
}

// Category Filters (unchanged)
function CategoryFilters({ categories, activeCategory, onCategoryChange }: { categories: string[]; activeCategory: Category; onCategoryChange: (cat: Category) => void }) {
  return (
    <Box display="flex" flexWrap="wrap" gap={{ xs: 2, md: 3 }} justifyContent="center" mb={{ xs: 8, md: 10 }} role="tablist" aria-label="دسته‌بندی نمونه کارها">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category as Category)}
          variant={category === activeCategory ? 'contained' : 'outlined'}
          role="tab"
          aria-selected={category === activeCategory}
          aria-controls="portfolio-grid"
          sx={{
            minWidth: { xs: 130, md: 150 },
            px: { xs: 4, md: 5 },
            py: { xs: 1.8, md: 2.2 },
            borderRadius: '32px',
            border: '2px solid',
            borderColor: category === activeCategory ? 'primary.main' : 'rgba(107, 78, 255, 0.4)',
            fontWeight: 800,
            fontSize: { xs: '1.05rem', md: '1.25rem' },
            textTransform: 'none',
            color: '#fff',
            bgcolor: category === activeCategory ? 'rgba(107, 78, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            boxShadow: category === activeCategory ? '0 8px 32px rgba(107, 78, 255, 0.35)' : '0 4px 16px rgba(107, 78, 255, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              bgcolor: category === activeCategory ? 'rgba(107, 78, 255, 0.35)' : 'rgba(107, 78, 255, 0.15)',
              transform: 'translateY(-6px)',
              boxShadow: '0 12px 40px rgba(107, 78, 255, 0.3)',
              borderColor: '#fff',
            },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

// Portfolio Card Skeleton (unchanged)
function PortfolioCardSkeleton() {
  return (
    <Box sx={styles.cardContainer}>
      <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '24px' }} />
      <Box sx={{ ...styles.contentOverlay, opacity: 1, background: 'rgba(107, 78, 255, 0.7)' }}>
        <Skeleton width="60%" height={40} sx={{ mb: 2 }} />
        <Skeleton width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton width="70%" height={20} />
        <Skeleton width="100%" height={56} sx={{ borderRadius: '28px', mt: 'auto' }} />
      </Box>
    </Box>
  );
}

// Portfolio Card with Views Counter
function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const projectName = item.description.split(' - ')[0].trim();
  const projectDesc = item.description.split(' - ')[1]?.trim();

  return (
    <Box sx={styles.cardContainer} component="article">
      <Box sx={styles.imageWrapper}>
        <Image src={item.mockup} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', filter: 'blur(3px)' }} priority={index < 3} loading={index >= 3 ? 'lazy' : undefined} />

        <Box sx={styles.contentOverlay}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: { xs: 1.5, md: 2 } }} mb={{ xs: 1.5, md: 2 }}>
            <Image src={item.logo} alt={item.alt} width={40} height={40} priority style={{ borderRadius: '8px' }} />
            <Typography variant="h5" sx={styles.projectTitle}>
              {projectName}
            </Typography>
          </Box>

          <Typography variant="body2" sx={styles.projectDesc}>
            {projectDesc}
          </Typography>

          <Box display={'flex'} alignItems={'center'} gap={1} flexWrap="wrap" mb={{ xs: 2, md: 3 }}>
            {item.category.map((cate, i) => (
              <Typography key={i} variant="caption" sx={styles.categoryTag}>
                #{cate}
              </Typography>
            ))}
          </Box>

          <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 700, color: '#fff', mb: { xs: 1.5, md: 2 }, bgcolor: 'rgba(0,0,0,0.3)', px: { xs: 2, md: 2.5 }, py: { xs: 0.6, md: 0.8 }, borderRadius: '16px', alignSelf: 'flex-start' }}>{item.status === 'در حال توسعه' ? '🔄 در حال توسعه' : '✅ توسعه یافته شده'}</Typography>

          <Button
            fullWidth
            disabled={!item.live_url}
            component="a"
            variant="contained"
            href={item.live_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 'auto',
              py: { xs: 1.6, md: 2 },
              px: { xs: 2, md: 3 },
              borderRadius: '28px',
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 800,
              bgcolor: '#6B4EFF',
              background: 'linear-gradient(135deg, #6B4EFF 100%, #A78BFA 0%)',
              color: '#fff',
              boxShadow: '0 10px 28px rgba(107, 78, 255, 0.3)',
              backdropFilter: 'blur(12px)',
              border: 'none',
              transition: 'all 0.4s ease',
              textDecoration: 'none',
              minHeight: '44px',
              '&:hover': {
                bgcolor: '#7B61FF',
                transform: 'scale(1.05)',
                boxShadow: '0 16px 40px rgba(107, 78, 255, 0.4)',
              },
            }}
          >
            مشاهده پروژه
          </Button>
        </Box>

        {/* Views Counter */}
        <Box sx={styles.viewsButton} display={'flex'} alignItems={'center'}>
          <Typography component={'span'} variant="body1" color={'#FFF'} fontWeight={'bold'}>
            {ConvertToPersianDigit(item.views)}
          </Typography>
          <TbEye color="#fff" size={26} style={{ marginRight: '4px' }} />
        </Box>
      </Box>
    </Box>
  );
}

// Empty & Error States (unchanged)
function EmptyState() {
  return (
    <Grid size={12}>
      <Typography textAlign="center" color="text.secondary" py={8}>
        پروژه‌ای در این دسته‌بندی یافت نشد.
      </Typography>
    </Grid>
  );
}

function ErrorState() {
  return (
    <Grid size={12}>
      <Typography textAlign="center" color="error" py={8}>
        خطایی در بارگذاری نمونه‌کارها رخ داد. لطفاً دوباره تلاش کنید.
      </Typography>
    </Grid>
  );
}

// Main Component
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

        // Ensure views  is a number
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
    <Box component="section" my={6} px={{ xs: 2, md: 6, lg: 8 }} aria-labelledby="portfolios-heading">
      <PortfolioHeader />

      {!loading && <CategoryFilters categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />}

      <Grid id="portfolio-grid" container spacing={{ xs: 3, md: 4 }} justifyContent="center" role="tabpanel" aria-live="polite">
        {loading ? (
          <>
            {[...Array(6)].map((_, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} key={`skeleton-${i}`}>
                <PortfolioCardSkeleton />
              </Grid>
            ))}
          </>
        ) : error ? (
          <ErrorState />
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} key={item.id}>
              <PortfolioCard item={item} index={index} />
            </Grid>
          ))
        ) : (
          <EmptyState />
        )}
      </Grid>
    </Box>
  );
}

// Updated Styles - replaced likeButton with viewsButton
const styles = {
  cardContainer: {
    position: 'relative' as const,
    width: '100%',
    height: { xs: '320px', sm: '360px', md: '400px', lg: '360px' },
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0px 12px 32px rgba(107, 78, 255, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: '0px 24px 48px rgba(107, 78, 255, 0.3)',
    },
    '&:focus-within': {
      outline: '3px solid #6B4EFF',
      outlineOffset: '4px',
    },
  },
  imageWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
  },
  contentOverlay: {
    position: 'absolute' as const,
    inset: 0,
    padding: { xs: '20px 16px', sm: '28px 20px', md: '32px 24px' },
    background: 'linear-gradient(to top, rgba(107, 78, 255, 0.92) 0%, rgba(107, 78, 255, 0.5) 60%, transparent 100%)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    transition: 'all 0.4s ease-in-out',
    opacity: 0.95,
    '&:hover': {
      opacity: 1,
      background: 'linear-gradient(to top, rgba(107, 78, 255, 0.95) 0%, rgba(107, 78, 255, 0.6) 70%, transparent 100%)',
    },
  },
  projectTitle: {
    fontWeight: 900,
    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
    lineHeight: 1.3,
  },
  projectDesc: {
    fontWeight: 500,
    opacity: 0.95,
    mb: { xs: 1.5, md: 2 },
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    display: '-webkit-box',
    WebkitLineClamp: { xs: 3, md: 4 },
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  categoryTag: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    backdropFilter: 'blur(4px)',
    px: { xs: 1.5, md: 2 },
    py: { xs: 0.5, md: 0.75 },
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: { xs: '0.85rem', md: '0.9rem' },
  },
  viewsButton: {
    position: 'absolute' as const,
    top: { xs: 12, md: 16 },
    left: { xs: 12, md: 16 },
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    width: 'fit-content',
    px: 1.5,
    py: 0.5,
    borderRadius: '32px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.5)',
      transform: 'scale(1.1)',
    },
  },
};
