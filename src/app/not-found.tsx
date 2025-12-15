// src/app/not-found.tsx
'use client';

import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import { FiHome, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import ChildrenLayout from '@/components/ChildrenLayout';

const NotFoundContainer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100%', display: 'flex', alignItems: 'center', py: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
        {/* سمت چپ: تصویر خلاقانه */}
        <Box sx={{ flex: 1, textAlign: 'center', position: 'relative', maxWidth: 400 }}>
          <motion.div initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, type: 'spring' }}>
            <Box sx={{ width: 280, height: 280, mx: 'auto', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)', position: 'relative', overflow: 'hidden' }}>
              {/* عدد 404 داخل دایره */}
              <Typography variant="h1" sx={{ fontSize: '7rem', fontWeight: 900, color: 'white', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                404
              </Typography>
              {/* افکت خطوط مورب */}
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)' }} />
            </Box>
          </motion.div>

          {/* ذرات کوچک متحرک */}
          {[...Array(6)]?.map((_, i) => <motion.div key={i} initial={{ opacity: 0, y: 100 }} animate={{ opacity: [0, 1, 0], y: [100, -50], x: [0, Math.random() * 100 - 50] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }} style={{ position: 'absolute', width: 8, height: 8, background: '#ffd700', borderRadius: '50%', bottom: 20, left: '50%', transform: 'translateX(-50%)' }} />)}
        </Box>

        {/* سمت راست: متن و دکمه‌ها */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'right' }, maxWidth: 500 }}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Typography variant="h3" fontWeight={800} sx={{ background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 2 }}>
              اوپس! گم شدید؟
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              صفحه‌ای که دنبالش هستید یا وجود نداره، یا آدرسش اشتباهه. نگران نباشید، ما کمکتون می‌کنیم راهتون رو پیدا کنید!
            </Typography>

            <Typography variant="body1" color="text.disabled" sx={{ mb: 3, lineHeight: 1.7 }}>
              همچین صفحه‌ای وجود ندارد {pathname}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} display={'flex'} gap={2} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 4 }}>
              <Button component={Link} href="/" variant="contained" size="large" startIcon={<FiHome style={{ margin: '0 0 8px 8px' }} />} sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 600, boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)', bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: '#1565c0', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                بازگشت به خانه
              </Button>

              <Button variant="outlined" size="large" startIcon={<FiSearch style={{ margin: '0 0 8px 8px' }} />} onClick={() => router.push('/store')} sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 600, borderColor: '#42a5f5', color: '#42a5f5', '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main, bgcolor: 'rgba(25, 118, 210, 0.05)' } }}>
                جستجوی محصولات
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};

export default function NotFound() {
  return (
    <ChildrenLayout>
      <NotFoundContainer />
    </ChildrenLayout>
  );
}
