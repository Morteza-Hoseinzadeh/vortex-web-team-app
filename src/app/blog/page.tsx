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
    author: 'علی رضایی',
    date: '۱۴۰۴/۰۹/۱۵',
    readTime: '۸ دقیقه',
    category: 'فرانت‌ اند',
    tags: ['React', 'Vue', 'Svelte', 'مقایسه'],
    image:
      'data:image/jpeg;base64,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',
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
                وبلاگح ورتکس
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
