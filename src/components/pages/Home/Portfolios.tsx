'use client';

import React, { useMemo, useState } from 'react';
import { Box, Button, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { TbHeart, TbHeartFilled } from 'react-icons/tb';
import Image from 'next/image';

// Types
interface PortfolioItem {
  logo: string;
  mockup: string;
  description: string;
  category: string[];
  alt: string;
}

const categories = ['همه', 'فروشگاهی', 'خدماتی', 'شخصی', 'شرکتی'] as const;
type Category = (typeof categories)[number];

// Data
const portfolioItems: PortfolioItem[] = [
  {
    logo: '/assets/logo/company-logo/chroma-ui.png',
    mockup: '/assets/image/mockups/chormaUI-mockup.png',
    description: 'کروما یو آی - طراحی رابط کاربری',
    category: ['شرکتی'],
    alt: 'نمونه کار طراحی رابط کاربری برای کروما یو آی',
  },
  {
    logo: '/assets/logo/company-logo/zichat-logo.png',
    mockup: '/assets/image/mockups/zichat-mockup.png',
    description: 'زیچت - پروژه پیام‌رسان ایرانی',
    category: ['خدماتی'],
    alt: 'نمونه کار پروژه پیام‌رسان زیچت',
  },
  {
    logo: '/assets/logo/company-logo/zephyr-logo.png',
    mockup: '/assets/image/mockups/zephyr-mockup.png',
    description: 'زفیـر - طراحی وب‌سایت شرکتی',
    category: ['شرکتی'],
    alt: 'نمونه کار طراحی وب‌سایت شرکتی زفیـر',
  },
  {
    logo: '/assets/logo/company-logo/dorna-logo.png',
    mockup: '/assets/image/mockups/dourna-mockup.png',
    description: 'کلینک زیبایی درنا - نمونه کار پروژه فروشگاهی',
    category: ['فروشگاهی', 'خدماتی'],
    alt: 'نمونه کار فروشگاهی کلینک زیبایی درنا',
  },
  {
    logo: '/assets/logo/company-logo/rabet-automatic-kasra-logo.png',
    mockup: '/assets/image/mockups/rabet-automatic-kasra-mockup.png',
    description: 'رابط اتوماتیک کسری - پروژه اختصاصی',
    category: ['خدماتی'],
    alt: 'نمونه کار پروژه اختصاصی رابط اتوماتیک کسری',
  },
  {
    logo: '/assets/logo/company-logo/personal-portfolio.png',
    mockup: '/assets/image/mockups/my-portfolio-mockup.png',
    description: 'پورتفولیو شخصی - طراحی رابط کاربری بصری',
    category: ['شخصی'],
    alt: 'نمونه کار پورتفولیو شخصی با طراحی بصری',
  },
];

// 1. Portfolio Header
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

// 2. Category Filters
interface CategoryFiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <Box display="flex" flexWrap="wrap" gap={{ xs: 2, md: 3 }} justifyContent="center" mb={{ xs: 8, md: 10 }} role="tablist" aria-label="دسته‌بندی نمونه کارها">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
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
            color: category === activeCategory ? '#fff' : '#fff',
            bgcolor: category === activeCategory ? 'rgba(107, 78, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            boxShadow: category === activeCategory ? '0 8px 32px rgba(107, 78, 255, 0.35)' : '0 4px 16px rgba(107, 78, 255, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': { bgcolor: category === activeCategory ? 'rgba(107, 78, 255, 0.35)' : 'rgba(107, 78, 255, 0.15)', transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(107, 78, 255, 0.3)', borderColor: '#fff' },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

// 3. Portfolio Card - طراحی جدید و مدرن
interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isLiked: boolean;
  onToggleLike: (index: number) => void;
}

function PortfolioCard({ item, index, isLiked, onToggleLike }: PortfolioCardProps) {
  const projectName = item.description.split(' - ')[0].trim();
  const projectDesc = item.description.split(' - ')[1]?.trim();

  return (
    <Box sx={styles.cardContainer} component="article">
      <Box sx={styles.imageWrapper}>
        <Image src={item.mockup} alt={item.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', filter: 'blur(3px)' }} priority={index < 3} loading={index >= 3 ? 'lazy' : undefined} />

        {/* Overlay با محتوا */}
        <Box sx={styles.contentOverlay}>
          <Box minWidth={'100%'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: 1.5 }} mb={1}>
            <Image src={item.logo} alt={item.alt} width={40} height={40} priority />
            <Typography variant="h5" sx={styles.projectTitle}>
              {projectName}
            </Typography>
          </Box>

          <Typography variant="body2" sx={styles.projectDesc}>
            {projectDesc}
          </Typography>

          <Box display={'flex'} alignItems={'center'} gap={1}>
            {item.category.map((cate, index) => (
              <Typography key={index} variant="caption" sx={styles.categoryTag}>
                {cate}
              </Typography>
            ))}
          </Box>

          <Button variant="contained" size="large" sx={styles.viewButton} aria-label={`مشاهده جزئیات پروژه ${projectName}`}>
            مشاهده پروژه
          </Button>
        </Box>

        {/* آیکون لایک در گوشه بالا راست */}
        <IconButton onClick={() => onToggleLike(index)} aria-label={isLiked ? 'حذف لایک از این پروژه' : 'لایک این پروژه'} aria-pressed={isLiked} sx={styles.likeButton}>
          {isLiked ? <TbHeartFilled color="#fff" size={24} /> : <TbHeart color="#fff" size={24} />}
        </IconButton>
      </Box>
    </Box>
  );
}

// 4. Empty State
function EmptyState() {
  return (
    <Grid size={12}>
      <Typography textAlign="center" color="text.secondary" py={8}>
        پروژه‌ای در این دسته‌بندی یافت نشد.
      </Typography>
    </Grid>
  );
}

// Main Component
export default function Portfolios() {
  const [activeCategory, setActiveCategory] = useState<Category>('همه');
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const filteredItems = useMemo<PortfolioItem[]>(() => {
    return activeCategory === 'همه' ? portfolioItems : portfolioItems.filter((item) => item.category?.includes(activeCategory));
  }, [activeCategory]);

  const handleToggleLike = (index: number) => {
    setLikedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box component="section" my={6} px={{ xs: 2, md: 6, lg: 8 }} aria-labelledby="portfolios-heading">
      <PortfolioHeader />

      <CategoryFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <Grid id="portfolio-grid" container spacing={{ xs: 3, md: 4 }} justifyContent="center" role="tabpanel" aria-live="polite">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <PortfolioCard item={item} index={index} isLiked={!!likedItems[index]} onToggleLike={handleToggleLike} />
            </Grid>
          ))
        ) : (
          <EmptyState />
        )}
      </Grid>
    </Box>
  );
}

// Styles - به‌روزرسانی شده برای رفع مشکل نمایش تگ‌ها در موبایل
const styles = {
  cardContainer: {
    position: 'relative' as const,
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0px 12px 32px rgba(107, 78, 255, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-16px) scale(1.03)',
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
    padding: { xs: '24px 16px 20px', md: '40px 24px 24px' }, // پدینگ کمتر در موبایل برای فضای بیشتر
    background: 'linear-gradient(to top, rgba(107, 78, 255, 0.92) 0%, rgba(107, 78, 255, 0.4) 60%, transparent 100%)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'center', md: 'flex-end' },
    transition: 'all 0.4s ease-in-out',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      background: 'linear-gradient(to top, rgba(107, 78, 255, 0.95) 0%, rgba(107, 78, 255, 0.5) 70%, transparent 100%)',
    },
  },
  projectTitle: {
    fontWeight: 900,
    fontSize: { xs: '1.35rem', sm: '2rem', md: '1.6rem' },
    lineHeight: 1.2,
  },
  projectDesc: {
    fontWeight: 500,
    opacity: 0.95,
    mb: 1,
    fontSize: { xs: '1.15rem', md: '1.1rem' },
    display: { xs: '-webkit-box', md: 'block' },
    WebkitLineClamp: { xs: 2, md: 'unset' },
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  categoryTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.25)',
    backdropFilter: 'blur(4px)',
    px: { xs: 1.5, md: 2 },
    py: { xs: 0.5, md: 0.75 },
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: { xs: '1rem', md: '0.85rem' },
    mb: 1,
  },
  viewButton: {
    mt: 0.5,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 800,
    borderRadius: '16px',
    px: { xs: 2.5, md: 4 },
    py: { xs: 1, md: 1.2 },
    fontSize: { xs: '1.1rem', md: '1rem' }, // کوچکتر در موبایل
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.08)',
      backgroundColor: '#fff',
    },
  },
  likeButton: {
    position: 'absolute' as const,
    top: { xs: 12, md: 16 },
    left: { xs: 12, md: 16 },
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    width: { xs: 42, md: 48 },
    height: { xs: 42, md: 48 },
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.5)',
      transform: 'scale(1.15)',
    },
  },
};
