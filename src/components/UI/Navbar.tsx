'use client';

import { Box, Button, Drawer, Typography, IconButton, List, ListItem, ListItemButton, useTheme, useMediaQuery } from '@mui/material';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import TypewriterComponent from 'typewriter-effect';

const Navbar = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
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
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1000,
          bgcolor: 'rgba(20, 10, 40, 0.45)',
          backdropFilter: 'blur(24px)',
          borderRadius: { xs: '24px', md: '32px' },
          border: '1px solid rgba(107, 78, 255, 0.3)',
          boxShadow: '0 12px 40px rgba(107, 78, 255, 0.2)',
          px: { xs: 3, md: 5 },
          py: { xs: 1.5, md: 2 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'row-reverse', md: 'row' },
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={isMobile ? 50 : 55} height={isMobile ? 50 : 55} priority quality={95} style={{ borderRadius: '18px', boxShadow: '0 10px 32px rgba(107, 78, 255, 0.35)' }} />

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 5 }}>
          {links.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              sx={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                position: 'relative',
                opacity: pathname === link.href ? 1 : 0.8,
                transition: 'all 0.45s ease',
                '&:hover': { opacity: 1 },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  bgcolor: theme.palette.primary.main,
                  borderRadius: '4px',
                  transform: pathname === link.href ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.45s ease',
                },
                '&:hover::after': { transform: 'scaleX(1)' },
              }}
            >
              {link.title}
            </Typography>
          ))}
        </Box>

        {/* Desktop CTA Button */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button sx={{ fontSize: 17, fontWeight: 800, px: 4.5, py: 1.6, borderRadius: '28px', bgcolor: 'rgba(107, 78, 255, 0.2)', backdropFilter: 'blur(14px)', border: '1px solid rgba(107, 78, 255, 0.5)', color: '#fff', textTransform: 'none', transition: 'all 0.45s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.35)', transform: 'translateY(-5px)', borderColor: '#fff' } }}>نیاز به مشاوره دارید؟</Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton onClick={() => setDrawerOpen(true)} aria-label="باز کردن منو" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <GiHamburgerMenu color="#fff" size={32} />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { bgcolor: 'rgba(15, 8, 35, 0.95)', backdropFilter: 'blur(28px)', borderLeft: '1px solid rgba(107, 78, 255, 0.5)', borderRadius: { xs: '24px 0 0 24px', md: '32px 0 0 32px' }, width: 300 } }}>
        <Box sx={{ p: 4 }}>
          <Box textAlign="center" mb={6}>
            <Image src="/assets/logo/vortex-logo.png" alt="تیم طراحی سایت ورتکس" width={80} height={80} priority style={{ borderRadius: '20px', boxShadow: '0 14px 40px rgba(107, 78, 255, 0.45)' }} />
          </Box>

          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding sx={{ mb: 2 }}>
                <ListItemButton component="a" href={link.href} onClick={() => setDrawerOpen(false)} sx={{ py: 2, borderRadius: '18px', bgcolor: pathname === link.href ? 'rgba(107, 78, 255, 0.3)' : 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 700, fontSize: '1.2rem', justifyContent: 'center', transition: 'all 0.4s', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.4)', transform: 'scale(1.03)' } }}>
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button fullWidth sx={{ mt: 6, fontSize: 18, fontWeight: 800, py: 2, borderRadius: '28px', bgcolor: 'rgba(107, 78, 255, 0.2)', backdropFilter: 'blur(14px)', border: '1px solid rgba(107, 78, 255, 0.5)', color: '#fff', textTransform: 'none', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.35)', transform: 'scale(1.03)' } }}>
            مشاوره رایگان
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

// ---------------- Hero Section Component ----------------
const HeroSection = () => {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  function textWriter({ string, delay = 30, onFinish }: { string: string; delay?: number; onFinish?: () => void }) {
    return (
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .changeDelay(delay)
            .typeString(string)
            .callFunction(() => {
              onFinish?.();
            })
            .start();
        }}
      />
    );
  }

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <video ref={videoRef} muted loop playsInline preload="none" poster="/assets/images/hero-poster.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px)', position: 'absolute', inset: 0 }}>
        <source src="/assets/videos/hero-section-video-2.mp4" type="video/mp4" />
        <source src="/assets/videos/hero-section-video-2.mp4" type="video/webm" />
      </video>
      {/* Overlay for readability */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.35)', zIndex: 1 }} />

      {/* Hero Content */}
      <Box position="relative" zIndex={2} height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" px={2}>
        <Typography component="h1" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          تیم طراحی سایت ورتکس
        </Typography>
        <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
          <TypewriterComponent
            options={{
              cursor: ' ',
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(30)
                .typeString('وب‌سایتی که دیده میشه، اعتماد می‌سازه، می‌فروشه')
                .callFunction(() => {
                  setHideFirstCursor(true);
                  setStartSecond(true);
                })
                .start();
            }}
          />
        </Typography>

        {startSecond && (
          <Typography component="div" variant={matchMdDown ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
            <div className={hideSecondCursor ? 'hide-cursor' : ''}>
              <TypewriterComponent
                options={{
                  cursor: ' ',
                }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(45)
                    .typeString('طراحی حرفه‌ای برای رشد واقعی کسب‌وکار 🚀')
                    .callFunction(() => {
                      setHideSecondCursor(true);
                    })
                    .start();
                }}
              />
            </div>
          </Typography>
        )}

        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" sx={{ transition: 'all ease-in-out 0.3s', boxShadow: 'none', fontSize: 22, border: `1px solid ${theme.palette.primary.main}50`, backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            مشاوره رایگان
          </Button>
          <Button variant="contained" sx={{ transition: 'all ease-in-out 0.3s', boxShadow: 'none', fontSize: 22, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            سفارش طراحی سایت
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
  const pathname = usePathname();
  return (
    <Box width="100%" position="relative" dir="rtl">
      <Navbar />
      {pathname === '/' ? <HeroSection /> : null}
    </Box>
  );
}
