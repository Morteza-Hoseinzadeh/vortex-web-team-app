'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Chip, useTheme, Pagination, InputBase, IconButton } from '@mui/material';
import { FiSearch, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import { useSearchParams } from 'next/navigation';

// Mock Data - مقالات حرفه‌ای و واقعی‌مانند (بر اساس سبک روکت)
const blogPosts = [
  {
    id: 1,
    title: 'بهترین فریم‌ ورک‌ های فرانت‌ اند در سال ۲۰۲۵: React یا Vue یا Svelte؟',
    excerpt: 'در این مقاله به مقایسه جامع React، Vue و Svelte می‌پردازیم و مزایا، معایب و موارد استفاده هر کدام را بررسی می‌کنیم تا بهترین انتخاب برای پروژه بعدی‌تون رو پیدا کنید.',
    author: 'مرتضی حسین زاده',
    date: '۱۴۰۴/۰۹/۱۵',
    readTime: '۸ دقیقه',
    category: 'فرانت‌ اند',
    tags: ['React', 'Vue', 'Svelte', 'مقایسه'],
    image: '',
    featured: true,
  },
];

const categories = ['همه', 'فرانت‌اند', 'بک‌اند', 'طراحی', 'Next.js', 'منابع'];

export default function BlogPage() {
  const theme = useTheme();
  const searchParams = useSearchParams();
  const HasSearchParams = searchParams.get('tags');

  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [searchQuery, setSearchQuery] = useState(HasSearchParams?.length ? HasSearchParams : '');

  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const filtersRef = React.useRef<HTMLDivElement | any>(null);
  const postsRef = React.useRef<HTMLDivElement | any>(null);

  useScrollAnimation(headerRef, { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0, duration: 1.4 } });
  useScrollAnimation(filtersRef, { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0, duration: 1 } });
  useScrollAnimation(postsRef, { stagger: { each: 0.15, from: 'center' } });

  // فیلتر مقالات
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'همه' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // صفحه‌بندی
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  // مقالات ویژه
  const featuredPosts = blogPosts.filter((post) => post.featured);

  const slugify = (text: string) => encodeURIComponent(text.trim().replace(/\s+/g, '-').replace(/‌/g, ''));

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }} mt={28} mb={8}>
        {/* هدر اصلی - طراحی حرفه‌ای مثل روکت */}
        {!HasSearchParams?.length ? (
          <>
            <Box ref={headerRef} textAlign="center" my={{ xs: 10, md: 14 }}>
              <Typography component="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' }, fontWeight: 900, color: '#fff', mb: 4, lineHeight: 1.2, background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                وبلاگ ورتکس
              </Typography>

              <Typography sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.9)', maxWidth: '900px', mx: 'auto', lineHeight: 1.8 }}>جدیدترین مقالات، آموزش‌ها و نکات کاربردی در زمینه طراحی وب، توسعه فرانت‌اند و بک‌اند، Next.js و ابزارهای مدرن</Typography>
            </Box>

            {featuredPosts.length > 0 && (
              <Box mb={{ xs: 12, md: 16 }}>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  {featuredPosts.map((post) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
                      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', bgcolor: 'rgba(107, 78, 255, 0.18)', backdropFilter: 'blur(20px)', border: '1px solid rgba(107, 78, 255, 0.4)', borderRadius: '32px', overflow: 'hidden', height: '100%', transition: 'all 0.5s ease', '&:hover': { transform: 'translateY(-16px)', boxShadow: '0 28px 70px rgba(107, 78, 255, 0.3)' } }}>
                        <Box>
                          <Box sx={{ position: 'relative', height: { xs: 240, md: 300 } }}>
                            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,5,30,0.9), transparent 50%)' }} />
                            <Chip label="ویژه" sx={{ position: 'absolute', top: 20, left: 20, bgcolor: theme.palette.primary.main, color: '#fff', fontWeight: 800 }} />
                          </Box>
                          <Box p={{ xs: 4, md: 5 }}>
                            <Typography sx={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', mb: 2 }}>{post.title}</Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.7 }}>{post.excerpt}</Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'rgba(255,255,255,0.7)' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FiUser />
                                <Typography variant="body2">{post.author}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FiCalendar />
                                <Typography variant="body2">{post.date}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FiClock />
                                <Typography variant="body2">{post.readTime}</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box width={'95%'} mb={2}>
                          <Button
                            component={Link}
                            href={`/blog/${slugify(post.category)}/${slugify(post.title)}`}
                            fullWidth
                            sx={{
                              mt: 3,
                              py: { xs: 1.8, md: 2.2 },
                              borderRadius: '32px',
                              fontSize: { xs: '1.1rem', md: '1.3rem' },
                              fontWeight: 800,
                              bgcolor: '#6B4EFF',
                              background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                              color: '#fff',
                              boxShadow: '0 12px 36px rgba(107, 78, 255, 0.35)',
                              textTransform: 'none',
                              transition: 'all 0.4s ease',
                              '&:hover': { bgcolor: '#7B61FF', transform: 'translateY(-4px) scale(1.03)', boxShadow: '0 20px 50px rgba(107, 78, 255, 0.45)' },
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
            )}
          </>
        ) : null}

        {/* فیلترها و جستجو */}
        <Box ref={filtersRef} mb={{ xs: 8, md: 12 }} mt={HasSearchParams?.length ? 16 : 0}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', p: 2, display: 'flex', alignItems: 'center', borderRadius: '32px' }}>
                <InputBase placeholder="جستجو در مقالات..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ ml: 2, flex: 1, color: '#fff', borderRadius: '32px' }} />
                <IconButton sx={{ color: '#fff' }}>
                  <FiSearch />
                </IconButton>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                {categories.map((cat) => (
                  <Chip key={cat} label={cat} onClick={() => setSelectedCategory(cat)} sx={{ bgcolor: selectedCategory === cat ? theme.palette.primary.main : 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', '&:hover': { bgcolor: selectedCategory === cat ? theme.palette.primary.main : 'rgba(255,255,255,0.2)' } }} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* لیست مقالات */}
        <Box ref={postsRef}>
          {paginatedPosts.length > 0 ? (
            <Grid container spacing={{ xs: 4, md: 6 }}>
              {paginatedPosts.map((post) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.id}>
                  <Paper sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', backdropFilter: 'blur(16px)', border: '1px solid rgba(107, 78, 255, 0.3)', borderRadius: '28px', overflow: 'hidden', height: '100%', transition: 'all 0.5s ease', '&:hover': { transform: 'translateY(-12px)', boxShadow: '0 24px 60px rgba(107, 78, 255, 0.25)' } }}>
                    <Box sx={{ position: 'relative', height: 220 }}>
                      <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                    </Box>

                    <Box p={{ xs: 4, md: 5 }}>
                      <Chip label={post.category} sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)', color: '#fff' }} />

                      <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', mb: 2, lineHeight: 1.4 }}>{post.title}</Typography>

                      <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 3, lineHeight: 1.7 }}>{post.excerpt}</Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FiUser />
                          {post.author}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FiCalendar />
                          {post.date}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <FiClock />
                          {post.readTime}
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {post.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                        ))}
                      </Box>

                      <Box width={'100%'}>
                        <Button
                          component={Link}
                          href={`/blog/${slugify(post.category)}/${slugify(post.title)}`}
                          fullWidth
                          sx={{ mt: 2, py: { xs: 1.8, md: 2.2 }, borderRadius: '32px', fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 800, bgcolor: '#6B4EFF', background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)', color: '#fff', boxShadow: '0 12px 36px rgba(107, 78, 255, 0.35)', textTransform: 'none', transition: 'all 0.4s ease', '&:hover': { bgcolor: '#7B61FF', transform: 'translateY(-4px) scale(1.03)', boxShadow: '0 20px 50px rgba(107, 78, 255, 0.45)' } }}
                        >
                          ادامه مطلب
                        </Button>
                      </Box>
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
                  '& .MuiPagination-ul': {
                    gap: 1,
                  },
                  '& .MuiPaginationItem-root': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: '1px solid rgba(107, 78, 255, 0.4)',
                    borderRadius: '16px',
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    minWidth: { xs: 44, md: 52 },
                    height: { xs: 44, md: 52 },
                    transition: 'all 0.4s ease',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      bgcolor: 'rgba(107, 78, 255, 0.25)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(107, 78, 255, 0.3)',
                      borderColor: '#A78BFA',
                    },
                  },
                  '& .Mui-selected': {
                    bgcolor: '#6B4EFF',
                    background: 'linear-gradient(135deg, #6B4EFF 0%, #A78BFA 100%)',
                    color: '#fff',
                    borderColor: '#A78BFA',
                    boxShadow: '0 12px 36px rgba(107, 78, 255, 0.4)',
                    '&:hover': {
                      bgcolor: '#7B61FF',
                      boxShadow: '0 16px 44px rgba(107, 78, 255, 0.5)',
                    },
                  },
                  '& .MuiPaginationItem-ellipsis': {
                    color: 'rgba(255,255,255,0.7)',
                    bgcolor: 'transparent',
                    border: 'none',
                  },
                  '& .MuiPaginationItem-previousNext': {
                    bgcolor: 'rgba(107, 78, 255, 0.2)',
                    borderColor: 'rgba(107, 78, 255, 0.6)',
                    '&:hover': {
                      bgcolor: 'rgba(107, 78, 255, 0.4)',
                    },
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
