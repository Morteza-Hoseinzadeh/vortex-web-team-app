'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ---------------- Navbar Component ----------------
const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();

  const links = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کار ها', href: '/portfolio' },
    { title: 'تعرفه ها', href: '/pricing' },
    { title: 'پشتیبانی', href: '/support' },
    { title: 'درباره ی ما', href: '/about' },
    { title: 'وبلاگ', href: '/blog' },
  ];

  return (
    <Box component="nav" sx={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, md: 6 }, py: 3 }}>
      {/* Logo */}
      <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={60} height={56} loading="lazy" />

      {/* Links */}
      <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
        {links.map((link) => (
          <Typography key={link.href} component="a" href={link.href} sx={{ textDecoration: 'none', fontWeight: 'bold', fontSize: { xs: 16, md: 20 }, color: pathname === link.href ? theme.palette.primary.main : theme.palette.text.primary, transition: 'color 0.2s', '&:hover': { color: theme.palette.primary.light } }}>
            {link.title}
          </Typography>
        ))}
      </Box>

      {/* CTA Button */}
      <Button sx={{ fontSize: 16, fontWeight: 'bold', px: 3, py: 1.5, borderRadius: 4, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', textTransform: 'none', transition: 'all ease-in-out 0.3s', '&:hover': { transform: 'translateY(-2px)', backgroundColor: theme.palette.primary.dark } }}>نیاز به مشاوره دارید؟</Button>
    </Box>
  );
};

// ---------------- Hero Section Component ----------------
const HeroSection = () => {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Background Video */}
      <video src="/assets/videos/hero-section-video.mp4" autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(5px)', position: 'absolute', top: -5, left: 0, zIndex: 0 }} />

      {/* Overlay for readability */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" sx={{ backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1 }} />

      {/* Hero Content */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" zIndex={2} px={2}>
        <Typography component="h1" variant="h2" sx={{ fontWeight: 'bold', color: '#fff', mb: 2, fontSize: { xs: 32, md: 64 } }}>
          تیم طراحی سایت ورتکس🚀
        </Typography>
        <Typography component="p" variant={matchMdDown ? 'h5' : 'h4'} sx={{ fontWeight: 'bold', color: '#fff', mb: 4, maxWidth: { xs: '90%', md: 800 } }}>
          تیم طراحی سایت ورتکس ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، شرکتی و فروشگاهی با تمرکز بر سئو، سرعت و تجربه کاربری.
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" sx={{ boxShadow: 'none', fontSize: 22, border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(4px)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            خدمات طراحی سایت
          </Button>
          <Button variant="contained" sx={{ boxShadow: 'none', fontSize: 22, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            مشاوره رایگان
          </Button>
        </Box>
      </Box>

      {/* Bottom fade */}
      <Box position="absolute" bottom={0} left={0} width="100%" height="250px" sx={{ background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${theme.palette.background.default} 100%)`, zIndex: 1 }} />

      {/* Left fade */}
      <Box position="absolute" top={0} left={0} width="250px" height="100%" sx={{ background: `linear-gradient(to right, ${theme.palette.background.default} 0%, rgba(0,0,0,0) 100%)`, zIndex: 1 }} />

      {/* Right fade */}
      <Box position="absolute" top={0} right={0} width="250px" height="100%" sx={{ background: `linear-gradient(to left, ${theme.palette.background.default} 0%, rgba(0,0,0,0) 100%)`, zIndex: 1 }} />
    </Box>
  );
};

// ---------------- Exported Layout Component ----------------
export default function HomePage() {
  return (
    <Box width="100%" position="relative" dir="rtl">
      <Navbar />
      <HeroSection />
    </Box>
  );
}
