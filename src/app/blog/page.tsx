'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Grid, Paper, Button, Chip, useTheme, Pagination, InputBase, IconButton, Skeleton } from '@mui/material';
import { FiSearch, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import { useSearchParams } from 'next/navigation';
import axiosInstance from '@/utils/hooks/axiosInstance';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';

// Types - دقیقاً مطابق با فیلدهای دیتابیس شما
interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  excerpt: string;
  content: string; // اگر در صفحه لیست استفاده شود
  author: string;
  author_avatar: string;
  publish_date: string; // مثلاً "۱۴۰۴/۰۹/۱۵"
  read_time: string; // مثلاً "۸ دقیقه"
  tags: string[]; // آرایه از تگ‌ها
  image: string; // تصویر اصلی مقاله
  blog_images?: string[]; // تصاویر داخل مقاله (اختیاری)
  featured: boolean;
  created_at: string;
  updated_at: string;
}

const categories = ['همه', 'فرانت‌اند', 'بک‌اند', 'طراحی', 'Next.js', 'منابع'];

export default function BlogPage() {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const urlTag = searchParams.get('tags');

  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [searchQuery, setSearchQuery] = useState(urlTag || '');
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const filtersRef = React.useRef<HTMLDivElement | any>(null);
  const postsRef = React.useRef<HTMLDivElement | any>(null);

  useScrollAnimation(headerRef, { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0, duration: 1.4 } });
  useScrollAnimation(filtersRef, { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0, duration: 1 } });
  useScrollAnimation(postsRef, { stagger: { each: 0.15, from: 'center' } });

  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axiosInstance.get('/api/blogs');
        const data = response?.data?.data || response?.data || [];
        setBlogPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // فیلتر مقالات
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'همه' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, searchQuery]);

  // صفحه‌بندی
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  // مقالات ویژه
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Slug برای لینک‌ها
  const slugify = (text: string) => encodeURIComponent(text.trim().replace(/\s+/g, '-').replace(/‌/g, ''));

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }} mt={28} mb={8}>
        {/* هدر اصلی */}
        {!urlTag && (
          <>
            <Box ref={headerRef} textAlign="center" my={{ xs: 10, md: 14 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 900,
                  color: '#fff',
                  mb: 4,
                  lineHeight: 1.2,
                  background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                وبلاگ ورتکس
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '900px',
                  mx: 'auto',
                  lineHeight: 1.8,
                }}
              >
                جدیدترین مقالات، آموزش‌ها و نکات کاربردی در زمینه طراحی وب، توسعه فرانت‌اند و بک‌اند، Next.js و ابزارهای مدرن
              </Typography>
            </Box>

            {/* مقالات ویژه */}
            {loading ? (
              <Grid container spacing={{ xs: 4, md: 6 }} mb={{ xs: 12, md: 16 }}>
                {[...Array(3)].map((_, i) => (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                    <Paper sx={{ borderRadius: '32px', overflow: 'hidden', bgcolor: 'rgba(107, 78, 255, 0.18)' }}>
                      <Skeleton variant="rectangular" height={300} />
                      <Box p={5}>
                        <Skeleton width="60%" height={40} sx={{ mb: 2 }} />
                        {Array.from({ length: 3 }).map((_, j) => (
                          <Skeleton key={j} width="100%" height={24} sx={{ mb: 1.5 }} />
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ) : featuredPosts.length > 0 ? (
              <Box mb={{ xs: 12, md: 16 }}>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  {featuredPosts.map((post) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
                      <Paper
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          bgcolor: 'rgba(107, 78, 255, 0.18)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(107, 78, 255, 0.4)',
                          borderRadius: '32px',
                          overflow: 'hidden',
                          height: '100%',
                          transition: 'all 0.5s ease',
                          '&:hover': { transform: 'translateY(-16px)', boxShadow: '0 28px 70px rgba(107, 78, 255, 0.3)' },
                        }}
                      >
                        <Box>
                          <Box sx={{ position: 'relative', height: { xs: 240, md: 300 } }}>
                            <Image src={post.image || '/placeholder.jpg'} alt={post.title} fill style={{ objectFit: 'cover' }} />
                            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,5,30,0.9), transparent 50%)' }} />
                            <Chip label="ویژه" sx={{ position: 'absolute', top: 20, left: 20, bgcolor: theme.palette.primary.main, color: '#fff', fontWeight: 800 }} />
                          </Box>

                          <Box p={{ xs: 4, md: 5 }}>
                            <Typography sx={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', mb: 2 }}>{post.title}</Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.7 }}>{post.excerpt}</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'rgba(255,255,255,0.7)' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Image src={post.author_avatar || '/default-avatar.png'} alt={post.author} width={24} height={24} style={{ borderRadius: '50%' }} />
                                <Typography variant="body2">{post.author}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FiCalendar />
                                <Typography variant="body2">{post.publish_date}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FiClock />
                                <Typography variant="body2">{ConvertToPersianDigit(post.read_time)} دقیقه</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>

                        <Box width="95%" mx="auto" mb={3}>
                          <Button
                            component={Link}
                            href={`/blog/${slugify(post.category)}/${post?.id}`}
                            fullWidth
                            sx={{
                              py: { xs: 1.8, md: 2.2 },
                              borderRadius: '32px',
                              fontSize: { xs: '1.1rem', md: '1.3rem' },
                              fontWeight: 800,
                              bgcolor: '#6B4EFF',
                              background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                              color: '#fff',
                              boxShadow: '0 12px 36px rgba(107, 78, 255, 0.35)',
                              textTransform: 'none',
                              '&:hover': {
                                bgcolor: '#7B61FF',
                                transform: 'translateY(-4px) scale(1.03)',
                                boxShadow: '0 20px 50px rgba(107, 78, 255, 0.45)',
                              },
                            }}
                          >
                            ادامه مطلب
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : null}
          </>
        )}

        {/* فیلترها و جستجو */}
        <Box ref={filtersRef} mb={{ xs: 8, md: 12 }} mt={urlTag ? 16 : 0}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', p: 2, display: 'flex', alignItems: 'center', borderRadius: '32px' }}>
                <InputBase placeholder="جستجو در مقالات..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ ml: 2, flex: 1, color: '#fff' }} />
                <IconButton sx={{ color: '#fff' }}>
                  <FiSearch />
                </IconButton>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                {categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() => setSelectedCategory(cat)}
                    sx={{
                      bgcolor: selectedCategory === cat ? theme.palette.primary.main : 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.2)',
                      '&:hover': { bgcolor: selectedCategory === cat ? theme.palette.primary.main : 'rgba(255,255,255,0.2)' },
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* لیست مقالات */}
        <Box ref={postsRef}>
          {loading ? (
            <Grid container spacing={{ xs: 4, md: 6 }}>
              {[...Array(6)].map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                  <Paper sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', borderRadius: '28px', overflow: 'hidden' }}>
                    <Skeleton variant="rectangular" height={220} />
                    <Box p={5}>
                      <Skeleton width="40%" height={30} sx={{ mb: 2 }} />
                      {Array.from({ length: 3 }).map((_, j) => (
                        <Skeleton key={j} width="100%" height={24} />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : error ? (
            <Typography textAlign="center" color="error" py={12} sx={{ fontSize: '1.6rem' }}>
              خطایی در بارگذاری مقالات رخ داد.
            </Typography>
          ) : paginatedPosts.length > 0 ? (
            <Grid container spacing={{ xs: 4, md: 6 }}>
              {paginatedPosts.map((post) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.id}>
                  <Paper sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(16px)', border: '1px solid rgba(107, 78, 255, 0.3)', borderRadius: '28px', overflow: 'hidden', height: '100%', transition: 'all 0.5s ease', '&:hover': { transform: 'translateY(-12px)', boxShadow: '0 24px 60px rgba(107, 78, 255, 0.25)' } }}>
                    <Box sx={{ position: 'relative', height: 220 }}>
                      <Image src={post.image || '/placeholder.jpg'} alt={post.title} fill style={{ objectFit: 'cover' }} />
                    </Box>

                    <Box p={{ xs: 4, md: 5 }}>
                      <Chip label={post.category} sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)', color: '#fff' }} />

                      <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', mb: 2, lineHeight: 1.4 }}>{post.title}</Typography>

                      <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 3, lineHeight: 1.7 }}>{post.excerpt}</Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Image src={post.author_avatar || '/default-avatar.png'} alt={post.author} width={20} height={20} style={{ borderRadius: '50%' }} />
                          {post.author}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FiCalendar />
                          {post.publish_date}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FiClock />
                          {ConvertToPersianDigit(post.read_time)} دقیقه
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {post.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                        ))}
                      </Box>

                      <Button
                        component={Link}
                        href={`/blog/${slugify(post.category)}/${post?.id}`}
                        fullWidth
                        sx={{
                          py: { xs: 1.8, md: 2.2 },
                          borderRadius: '32px',
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 800,
                          bgcolor: '#6B4EFF',
                          background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                          color: '#fff',
                          boxShadow: '0 12px 36px rgba(107, 78, 255, 0.35)',
                          textTransform: 'none',
                          '&:hover': {
                            bgcolor: '#7B61FF',
                            transform: 'translateY(-4px) scale(1.03)',
                            boxShadow: '0 20px 50px rgba(107, 78, 255, 0.45)',
                          },
                        }}
                      >
                        ادامه مطلب
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography textAlign="center" color="rgba(255,255,255,0.7)" py={12} sx={{ fontSize: '1.6rem' }}>
              مقاله‌ای با این مشخصات یافت نشد.
            </Typography>
          )}

          {/* صفحه‌بندی */}
          {totalPages > 1 && (
            <Box mt={{ xs: 8, md: 12 }} display="flex" justifyContent="center">
              <Pagination
                dir="ltr"
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                size="large"
                sx={{
                  '& .MuiPagination-ul': { gap: 1 },
                  '& .MuiPaginationItem-root': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: '1px solid rgba(107, 78, 255, 0.4)',
                    borderRadius: '16px',
                    fontWeight: 700,
                    minWidth: { xs: 44, md: 52 },
                    height: { xs: 44, md: 52 },
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      bgcolor: 'rgba(107, 78, 255, 0.25)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(107, 78, 255, 0.3)',
                    },
                  },
                  '& .Mui-selected': {
                    bgcolor: '#6B4EFF',
                    background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                    color: '#fff',
                    boxShadow: '0 12px 36px rgba(107, 78, 255, 0.4)',
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
