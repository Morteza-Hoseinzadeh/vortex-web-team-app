'use client';

import { Box, Button, Typography, useTheme } from '@mui/material';

export default function AboutVortex() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12, lg: 14 },
        px: { xs: 3, md: 6, lg: 8 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'rgba(20, 10, 40, 0.4)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(107, 78, 255, 0.2)',
        borderBottom: '1px solid rgba(107, 78, 255, 0.2)',
      }}
      aria-labelledby="about-heading"
    >
      <Box
        sx={{
          maxWidth: '960px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Heading */}
        <Typography
          id="about-heading"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3.5rem', lg: '4.5rem' },
            fontWeight: 900,
            color: '#fff',
            mb: 4,
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, #6B4EFF, #A78BFA)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              borderRadius: '4px',
            },
          }}
        >
          چرا تیم طراحی سایت ورتکس؟
        </Typography>

        {/* Description */}
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '1.05rem', md: '1.25rem', lg: '1.4rem' },
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.88)',
            lineHeight: 1.85,
            maxWidth: '820px',
            mx: 'auto',
          }}
        >
          در ورتکس، ما وب‌سایت‌هایی طراحی می‌کنیم که در همان لحظه اول توجه بازدیدکننده را جلب می‌کنند. طراحی‌های ما نه‌تنها زیبا و چشم‌نواز هستند، بلکه با هوشمندی و کاربرپسندی، بازدیدکننده را به مشتری واقعی تبدیل می‌کنند. ما هر پروژه را با دقت و خلاقیت پیش می‌بریم تا کسب‌وکار شما به سطحی بالاتر برسد.
        </Typography>

        {/* Buttons */}
        <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            href="/portfolio"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              fontWeight: 800,
              px: { xs: 5, md: 6 },
              py: { xs: 1.8, md: 2.2 },
              borderRadius: '32px',
              bgcolor: 'primary.main',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: '#fff',
              textTransform: 'none',
              boxShadow: '0 10px 30px rgba(107, 78, 255, 0.35)',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 18px 45px rgba(107, 78, 255, 0.45)',
              },
            }}
          >
            مشاهده نمونه‌کارها
          </Button>

          <Button
            variant="outlined"
            href="/contact"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              fontWeight: 800,
              px: { xs: 5, md: 6 },
              py: { xs: 1.8, md: 2.2 },
              borderRadius: '32px',
              border: '2px solid rgba(107, 78, 255, 0.6)',
              bgcolor: 'transparent',
              color: '#fff',
              textTransform: 'none',
              transition: 'all 0.4s ease',
              '&:hover': {
                bgcolor: 'rgba(107, 78, 255, 0.15)',
                borderColor: '#fff',
                transform: 'translateY(-6px)',
              },
            }}
          >
            همکاری با ما
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
