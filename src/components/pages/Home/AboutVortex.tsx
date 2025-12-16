'use client';

import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

export default function AboutVortex() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 6, lg: 4 } }}>
      {/* Text Section */}
      <Box sx={{ width: '100%', textAlign: { xs: 'center', lg: 'right' }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', lg: 'flex-start' }, gap: 4 }}>
        <Box maxWidth={750}>
          <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 900, color: theme.palette.text.primary }}>
            🔥چرا تیم طراحی سایت ورتکس؟
          </Typography>

          <Typography component="p" sx={{ mt: 2, fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 700, color: theme.palette.text.secondary, lineHeight: 1.9 }}>
            در ورتکس، ما وب‌سایت‌هایی طراحی می‌کنیم که در همان لحظه اول توجه بازدیدکننده را جلب می‌کنند. طراحی‌های ما نه‌تنها زیبا و چشم‌نواز هستند، بلکه با هوشمندی و کاربرپسندی، بازدیدکننده را به مشتری واقعی تبدیل می‌کنند. ما هر پروژه را با دقت و خلاقیت پیش می‌بریم تا کسب‌وکار شما به سطحی بالاتر برسد.
          </Typography>
        </Box>

        {/* Buttons */}
        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" sx={{ fontSize: '1.2rem', px: 3, py: 1, fontWeight: 'bold', borderRadius: 3, boxShadow: 'none', background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, transition: '0.3s', '&:hover': { transform: 'translateY(-2px)' } }}>
            مشاهده نمونه‌کارها
          </Button>

          <Button variant="outlined" sx={{ fontSize: '1.2rem', px: 3, py: 1, fontWeight: 'bold', borderRadius: 3, borderColor: `${theme.palette.primary.main}70`, color: theme.palette.primary.main, backdropFilter: 'blur(4px)', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)' } }}>
            همکاری با ما
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box sx={{ width: '100%', maxWidth: 800, position: 'relative' }}>
        <Image src="/assets/image/background-overlay.png" alt="تیم طراحی سایت ورتکس" width={800} height={450} priority style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </Box>
    </Box>
  );
}
