'use client';

import dynamic from 'next/dynamic';

import { Box, Button, Drawer, Typography, IconButton, List, ListItem, ListItemButton, useTheme, useMediaQuery } from '@mui/material';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();

  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'), {
    noSsr: true,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کار ها', href: '/portfolio' },
    { title: 'تعرفه ها', href: '/pricing' },
    { title: 'پشتیبانی', href: '/support' },
    { title: 'درباره ی ما', href: '/about' },
    { title: 'وبلاگ', href: '/blog' },
  ];

  return (
    <Box component="nav" sx={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'row-reverse', md: 'row' }, px: { xs: 2, md: 4 }, py: 4 }}>
      {/* Logo */}
      <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={matchMdDown ? 46 : 60} height={matchMdDown ? 46 : 56} priority quality={80} />

      {/* Desktop Links */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
        {links.map((link) => (
          <Typography
            key={link.href}
            component="a"
            href={link.href}
            sx={{
              ...styles.links,
              color: theme.palette.text.primary,
              opacity: pathname === link.href ? 1 : 0.6,
              '&::after': { ...styles.links.links_after, width: pathname === link.href ? '100%' : '0%', backgroundColor: theme.palette.text.primary },
              '&:hover': { opacity: 1 },
            }}
          >
            {link.title}
          </Typography>
        ))}
      </Box>

      {/* Desktop CTA Button */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Button sx={{ fontSize: 16, fontWeight: 'bold', px: 3, py: 1.5, borderRadius: 4, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', textTransform: 'none', transition: 'all ease-in-out 0.3s', '&:hover': { transform: 'translateY(-2px)', backgroundColor: theme.palette.primary.dark } }}>نیاز به مشاوره دارید؟</Button>
      </Box>

      {/* Mobile Hamburger */}
      <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setDrawerOpen(true)} aria-label="Open menu">
        <GiHamburgerMenu color={theme.palette.text.primary} />
      </IconButton>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component="a" href={link.href} onClick={() => setDrawerOpen(false)} sx={{ color: pathname === link.href ? theme.palette.primary.main : theme.palette.text.primary, fontWeight: 'bold' }}>
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* CTA Button in Drawer */}
          <Button fullWidth sx={{ mt: 2, fontSize: 16, fontWeight: 'bold', px: 3, py: 1.5, borderRadius: 4, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', textTransform: 'none', '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
            نیاز به مشاوره دارید؟
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

// ---------------- Hero Section Component ----------------
const HeroSection = () => {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <video ref={videoRef} muted loop playsInline preload="none" poster="/assets/images/hero-poster.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px)', position: 'absolute', inset: 0 }}>
        <source src="/assets/videos/hero-section-video.mp4" type="video/mp4" />
        <source src="/assets/videos/hero-section-video.mp4" type="video/webm" />
      </video>
      {/* Overlay for readability */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }} />

      {/* Hero Content */}
      <Box position="relative" zIndex={2} height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" px={2}>
        <Typography component="h1" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          تیم طراحی سایت ورتکس
        </Typography>
        <Typography component="p" variant={matchMdDown ? 'h5' : 'h4'} sx={{ fontWeight: 'bold', color: '#fff', mb: 4, maxWidth: { xs: '90%', md: 800 } }}>
          تیم طراحی سایت ورتکس ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، شرکتی و فروشگاهی با تمرکز بر سئو، سرعت و تجربه کاربری.
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" sx={{ boxShadow: 'none', fontSize: 22, border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            خدمات طراحی سایت
          </Button>
          <Button variant="contained" sx={{ boxShadow: 'none', fontSize: 22, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            مشاوره رایگان
          </Button>
        </Box>
      </Box>

      {/* Bottom fade */}
      <Box position="absolute" bottom={0} left={0} width="100%" height="250px" sx={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${theme.palette.background.default} 100%)`, zIndex: 1 }} />
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

const styles = {
  links: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 20,
    transition: 'color 0.2s',
    position: 'relative',

    links_after: {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -6,
      height: '2px',
      borderRadius: '100%',
      transition: 'width 0.3s ease',
    },
  },
};
