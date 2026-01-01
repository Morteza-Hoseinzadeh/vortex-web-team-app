'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Chip, Divider, useTheme, TextField, Avatar, Grid, Skeleton } from '@mui/material';
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiShare2, FiMessageCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import axiosInstance from '@/utils/hooks/axiosInstance';
import { useParams } from 'next/navigation';

// Types
interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  author_avatar: string;
  publish_date: string;
  read_time: number;
  tags: string[];
  image: string;
  blog_images: string[];
  featured: number;
}

interface Comment {
  id: number;
  post_id: number;
  author: string;
  avatar: string;
  content: string;
  comment_date: string;
  created_at: string;
}

// Image Carousel
function ImageCarousel({ images }: { images: string[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const validImages = images.filter((img) => img && img.trim() !== '');
  const maxSteps = validImages.length;

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);

  if (maxSteps === 0) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: '32px',
        overflow: 'hidden',
        my: 8,
        boxShadow: '0 20px 60px rgba(107, 78, 255, 0.3)',
        bgcolor: 'rgba(20, 10, 40, 0.45)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(107, 78, 255, 0.5)',
        transition: 'all 0.5s ease',
        '&:hover': {
          borderColor: '#A78BFA',
          boxShadow: '0 28px 80px rgba(107, 78, 255, 0.4)',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: { xs: 400, md: 600 } }}>
        <Image src={validImages[activeStep] || '/placeholder.jpg'} alt={`تصویر ${activeStep + 1}`} fill priority={activeStep === 0} style={{ objectFit: 'cover' }} />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10,5,30,0.8), transparent 40%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: 'rgba(107, 78, 255, 0.7)',
            color: '#fff',
            px: 4,
            py: 1.5,
            borderRadius: '32px',
            fontWeight: 800,
            backdropFilter: 'blur(10px)',
            fontSize: '1.1rem',
          }}
        >
          {ConvertToPersianDigit(activeStep + 1)} / {ConvertToPersianDigit(maxSteps)}
        </Box>
      </Box>

      <Button
        onClick={handleBack}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          minWidth: 56,
          height: 56,
          bgcolor: 'rgba(107, 78, 255, 0.6)',
          color: '#fff',
          borderRadius: '50%',
          '&:hover': { bgcolor: '#A78BFA', transform: 'translateY(-50%) scale(1.1)' },
        }}
      >
        <FiChevronLeft size={32} />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          minWidth: 56,
          height: 56,
          bgcolor: 'rgba(107, 78, 255, 0.6)',
          color: '#fff',
          borderRadius: '50%',
          '&:hover': { bgcolor: '#A78BFA', transform: 'translateY(-50%) scale(1.1)' },
        }}
      >
        <FiChevronRight size={32} />
      </Button>
    </Box>
  );
}

// Share Buttons
function ShareButtons({ title }: { title: string }) {
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (!shareUrl) return null;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <Box sx={{ display: 'flex', gap: 2.5 }}>
      <Button component="a" href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener">
        <FaTwitter size={32} />
      </Button>
      <Button component="a" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener">
        <FaLinkedin size={32} />
      </Button>
      <Button component="a" href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener">
        <FaTelegram size={32} />
      </Button>
      <Button component="a" href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener">
        <FaWhatsapp size={32} />
      </Button>
    </Box>
  );
}

export default function CurrentBlogPage() {
  const theme = useTheme();
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const headerRef = React.useRef<HTMLDivElement | any>(null);
  const contentRef = React.useRef<HTMLDivElement | any>(null);
  const sidebarRef = React.useRef<HTMLDivElement | any>(null);

  useScrollAnimation(headerRef, { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0, duration: 1.4 } });
  useScrollAnimation(contentRef, { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0, duration: 1.2 } });
  useScrollAnimation(sidebarRef, { from: { opacity: 0, x: 60 }, to: { opacity: 1, x: 0, duration: 1.2 } });

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(false);

        const res = await axiosInstance.get(`/api/blogs/${id}`);

        if (res.data.status === 200) {
          const { post: apiPost, comments: apiComments, related_posts: apiRelated } = res.data.data;

          // Format read_time
          const formattedPost = {
            ...apiPost,
            read_time: `${ConvertToPersianDigit(apiPost.read_time)} دقیقه`,
          };

          setPost(formattedPost);
          setComments(apiComments || []);

          // Format related posts read_time
          const formattedRelated = (apiRelated || []).map((p: BlogPost) => ({
            ...p,
            read_time: `${ConvertToPersianDigit(p.read_time)} دقیقه`,
          }));
          setRelatedPosts(formattedRelated);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return (
          <Typography key={i} sx={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', mt: 6, mb: 3 }}>
            {line.replace('### ', '')}
          </Typography>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <Typography key={i} component="span" sx={{ fontWeight: 900, color: theme.palette.primary.light }}>
            {line.replace(/\*\*/g, '')}
          </Typography>
        );
      }
      if (line.trim() === '') return <Box key={i} mb={3} />;
      return (
        <Typography key={i} sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, mb: 3 }}>
          {line}
        </Typography>
      );
    });
  };

  const cardStyle = {
    bgcolor: 'rgba(20, 10, 40, 0.45)',
    backdropFilter: 'blur(24px)',
    border: '2px solid rgba(107, 78, 255, 0.5)',
    borderRadius: '32px',
    p: { xs: 4, md: 5 },
    boxShadow: '0 16px 50px rgba(107, 78, 255, 0.2)',
    transition: 'all 0.5s ease',
    '&:hover': {
      borderColor: '#A78BFA',
      boxShadow: '0 24px 70px rgba(107, 78, 255, 0.35)',
      transform: 'translateY(-8px)',
    },
  };

  const titleStyle = {
    fontSize: { xs: '1.5rem', md: '1.8rem' },
    fontWeight: 900,
    color: '#fff',
    mb: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    textShadow: '0 0 12px rgba(107, 78, 255, 0.5)',
  };

  if (loading) {
    return (
      <ChildrenLayout>
        <Box sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 28 }}>
          <Skeleton variant="rectangular" height={600} sx={{ borderRadius: '40px', mb: 6 }} />
          <Skeleton width="70%" height={60} sx={{ mb: 3 }} />
          <Skeleton width="100%" height={20} />
        </Box>
      </ChildrenLayout>
    );
  }

  if (error || !post) {
    return (
      <ChildrenLayout>
        <Box sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 28, py: 16, textAlign: 'center' }}>
          <Typography color="error" sx={{ fontSize: '2rem', fontWeight: 700 }}>
            مقاله مورد نظر یافت نشد
          </Typography>
          <Typography color="text.secondary" mt={3}>
            ممکن است حذف شده باشد یا آدرس اشتباه باشد.
          </Typography>
          <Button component={Link} href="/blog" variant="contained" sx={{ mt: 6, py: 2, px: 6, borderRadius: '32px', fontSize: '1.2rem' }}>
            بازگشت به وبلاگ
          </Button>
        </Box>
      </ChildrenLayout>
    );
  }

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }} mt={28} mb={8}>
        {/* Header */}
        <Box ref={headerRef}>
          <Box
            sx={{
              position: 'relative',
              height: { xs: 400, md: 600 },
              borderRadius: '40px',
              overflow: 'hidden',
              mb: { xs: 6, md: 8 },
              boxShadow: '0 24px 70px rgba(107, 78, 255, 0.3)',
            }}
          >
            <Image src={post.image || '/placeholder.jpg'} alt={post.title} fill priority style={{ objectFit: 'cover' }} />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,5,30,0.95), transparent 40%)',
              }}
            />
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 4, md: 6 } }}>
              <Chip label={post.category} sx={{ mb: 3, bgcolor: theme.palette.primary.main, color: '#fff', fontWeight: 800 }} />
              <Typography
                sx={{
                  fontSize: { xs: '2.4rem', md: '3.8rem', lg: '4.5rem' },
                  fontWeight: 900,
                  color: '#fff',
                  mb: 3,
                  lineHeight: 1.2,
                  textShadow: '0 0 20px rgba(0,0,0,0.8)',
                }}
              >
                {post.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3, color: 'rgba(255,255,255,0.9)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={post.author_avatar || '/default-avatar.png'} sx={{ width: 48, height: 48, border: '3px solid #fff' }} />
                  <Typography sx={{ fontWeight: 700 }}>{post.author}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FiCalendar />
                  <Typography>{post.publish_date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FiClock />
                  <Typography>{post.read_time}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Content + Sidebar */}
        <Grid container spacing={{ xs: 6, md: 8 }} ref={contentRef}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ maxWidth: '900px' }}>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, color: 'rgba(255,255,255,0.9)', lineHeight: 2, mb: 6 }}>{post.excerpt}</Typography>
              <Divider sx={{ borderColor: 'rgba(107, 78, 255, 0.3)', mb: 6 }} />

              <Box sx={{ '& > *': { mb: 4 } }}>{renderContent(post.content)}</Box>

              {post.blog_images.length > 0 && <ImageCarousel images={post.blog_images} />}

              <Box sx={cardStyle} my={8} display="flex" alignItems="center" justifyContent="space-between">
                <Typography sx={titleStyle}>
                  <FiShare2 size={28} style={{ color: theme.palette.primary.main }} />
                  اشتراک‌گذاری
                </Typography>
                <ShareButtons title={post.title} />
              </Box>

              <Box sx={cardStyle} mt={10}>
                <Typography sx={titleStyle}>
                  <FiMessageCircle size={28} style={{ color: theme.palette.primary.main }} />
                  نظرات ({ConvertToPersianDigit(comments.length)})
                </Typography>

                <Box sx={{ mb: 8 }}>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', mb: 4 }}>نظر خود را بنویسید</Typography>
                  <TextField placeholder="نام شما" value={name} onChange={(e) => setName(e.target.value)} fullWidth variant="outlined" sx={{ mb: 3, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px' } }} />
                  <TextField placeholder="نظر شما..." value={comment} onChange={(e) => setComment(e.target.value)} multiline rows={4} fullWidth variant="outlined" sx={{ mb: 4, '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px' } }} />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      py: 1.8,
                      px: 5,
                      borderRadius: '32px',
                      fontWeight: 800,
                      '&:hover': { bgcolor: '#7B61FF', transform: 'scale(1.05)' },
                    }}
                  >
                    ارسال نظر
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {comments.length > 0 ? (
                    comments.map((c) => (
                      <Box key={c.id} sx={{ bgcolor: 'rgba(107, 78, 255, 0.15)', borderRadius: '24px', p: { xs: 4, md: 5 }, border: '1px solid rgba(107, 78, 255, 0.4)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                          <Avatar>{c?.author[0]?.toUpperCase()}</Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 800, color: '#fff' }}>{c.author}</Typography>
                            <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>{new Date(c.created_at).toLocaleDateString('fa-IR')}</Typography>
                          </Box>
                        </Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.9 }}>{c.content}</Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography color="text.secondary" textAlign="center" py={6}>
                      هنوز نظری ثبت نشده است. اولین نفر باشید!
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box textAlign="center" mt={10}>
                <Button
                  component={Link}
                  href="/blog"
                  endIcon={<FiArrowLeft style={{ marginRight: '8px' }} />}
                  sx={{
                    py: 2.2,
                    px: 6,
                    borderRadius: '32px',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    bgcolor: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    border: '2px solid rgba(255,255,255,0.3)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.22)', transform: 'translateY(-6px)' },
                  }}
                >
                  بازگشت به لیست مقالات
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }} ref={sidebarRef}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              {relatedPosts.length > 0 && (
                <Box sx={cardStyle} mb={6}>
                  <Typography sx={titleStyle}>مقالات مرتبط</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {relatedPosts.map((p) => (
                      <Box
                        key={p.id}
                        component={Link}
                        href={`/blog/${p.id}`}
                        sx={{
                          display: 'flex',
                          gap: 3,
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'all 0.4s ease',
                          '&:hover': { transform: 'translateX(-12px)' },
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            width: 120,
                            height: 90,
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                          }}
                        >
                          <Image src={p.image || '/placeholder.jpg'} alt={p.title} fill style={{ objectFit: 'cover' }} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 800, color: '#fff', mb: 1.5, lineHeight: 1.4 }}>{p.title}</Typography>
                          <Chip label={p.category} size="small" sx={{ bgcolor: 'rgba(107, 78, 255, 0.3)', color: '#fff', fontWeight: 700 }} />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              <Box sx={cardStyle}>
                <Typography gutterBottom sx={titleStyle}>
                  <FiTag size={28} style={{ color: theme.palette.primary.main }} />
                  برچسب‌ها
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      clickable
                      component={Link}
                      href={`/blog?tags=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      sx={{
                        bgcolor: 'rgba(107, 78, 255, 0.25)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        p: 2,
                        borderRadius: '24px',
                        border: '1px solid rgba(107, 78, 255, 0.6)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 8px 24px rgba(107, 78, 255, 0.2)',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          bgcolor: 'rgba(167, 139, 250, 0.4)',
                          transform: 'translateY(-6px) scale(1.05)',
                          boxShadow: '0 16px 40px rgba(167, 139, 250, 0.4)',
                          borderColor: '#E0AAFF',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ChildrenLayout>
  );
}
