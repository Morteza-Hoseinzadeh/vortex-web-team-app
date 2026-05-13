'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Drawer, Typography, IconButton, List, ListItem, ListItemButton, useTheme, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbUser } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';

const NavbarContainer = ({ setSnackbarState }: { setSnackbarState: (state: any) => void }) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تشخیص اسکرول برای تغییر استایل navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSnackbar = () => {
    return router.push('/dashboard');
  };

  const links = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کارها', href: '/portfolio' },
    { title: 'تعرفه‌ها', href: '/pricing' },
    { title: 'پشتیبانی', href: '/support' },
    { title: 'درباره ما', href: '/about' },
    { title: 'پنل کاربری', href: '/dashboard' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <Box component="nav" sx={{ width: '100%', position: 'fixed', left: 0, right: 0, zIndex: 1300, pointerEvents: 'none', top: 0 }}>
        <Box
          sx={{
            width: 'calc(100% - 32px)',
            maxWidth: '1400px',
            mx: 'auto',
            mt: { xs: 2, lg: 3 },
            bgcolor: scrolled ? 'rgba(10, 5, 30, 0.85)' : 'rgba(20, 10, 40, 0.5)',
            boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.3)' : '0 16px 50px rgba(107, 78, 255, 0.15)',
            borderRadius: '40px',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { xs: 1.5, lg: 2 },
            px: { xs: 3, sm: 4, lg: 5 },
            pointerEvents: 'all',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(107, 78, 255, 0.15)',
            '&:hover': { borderColor: 'rgba(107, 78, 255, 0.3)' },
          }}
        >
          {/* Logo */}
          <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ position: 'relative', width: isMobile ? 42 : 50, height: isMobile ? 42 : 50, borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(107, 78, 255, 0.3)' }}>
              <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" fill style={{ objectFit: 'contain', backgroundColor: '#fff' }} priority />
            </Box>
            <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #FFFFFF, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', display: { xs: 'none', sm: 'block' } }}>ورتکس</Typography>
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: { lg: 3, xl: 4 } }}>
            {links.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: isActive(link.href) ? '#A78BFA' : 'rgba(255,255,255,0.8)',
                  fontWeight: isActive(link.href) ? 700 : 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  position: 'relative',
                  px: 1,
                  py: 0.5,
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#A78BFA' },
                  '&::after': { content: '""', position: 'absolute', bottom: -4, left: '50%', width: isActive(link.href) ? '100%' : 0, height: '2px', bgcolor: '#A78BFA', borderRadius: '2px', transform: 'translateX(-50%)', transition: 'width 0.3s ease' },
                  '&:hover::after': { width: '100%' },
                }}
              >
                {link.title}
              </Typography>
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button component={Link} href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" sx={{ px: 3, py: 1.2, borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)' } }}>
              مشاوره رایگان
            </Button>

            <IconButton onClick={openSnackbar} sx={{ width: 42, height: 42, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(107, 78, 255, 0.3)', color: '#fff', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)', borderColor: '#6B4EFF', transform: 'translateY(-2px)' } }}>
              <TbUser size={22} />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'flex', lg: 'none' }, color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.2)' } }}>
            <GiHamburgerMenu size={24} />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: 280, bgcolor: 'rgba(10, 5, 25, 0.98)', backdropFilter: 'blur(20px)', borderLeft: '1px solid rgba(107, 78, 255, 0.3)', boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)' } }}>
        <Box sx={{ p: 3 }}>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 40, height: 40, position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" fill style={{ objectFit: 'contain', backgroundColor: '#fff' }} />
              </Box>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>ورتکس</Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
              <IoClose size={24} />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 3, bgcolor: 'rgba(107, 78, 255, 0.2)' }} />

          {/* Drawer Links */}
          <List sx={{ p: 0 }}>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
                <ListItemButton component={Link} href={link.href} onClick={() => setDrawerOpen(false)} sx={{ py: 1.5, px: 2, borderRadius: '16px', justifyContent: 'flex-start', fontWeight: isActive(link.href) ? 700 : 500, fontSize: '0.95rem', color: isActive(link.href) ? '#A78BFA' : 'rgba(255,255,255,0.7)', bgcolor: isActive(link.href) ? 'rgba(107, 78, 255, 0.15)' : 'transparent', transition: 'all 0.2s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.1)', color: '#fff' } }}>
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 3, bgcolor: 'rgba(107, 78, 255, 0.2)' }} />

          {/* Drawer Actions */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Button fullWidth component={Link} href="https://wa.me/989309363715" target="_blank" rel="noopener noreferrer" onClick={() => setDrawerOpen(false)} sx={{ py: 1.5, borderRadius: '24px', fontSize: '0.85rem', fontWeight: 600, background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', textTransform: 'none', '&:hover': { transform: 'translateY(-1px)' } }}>
              مشاوره رایگان
            </Button>

            <Button fullWidth onClick={openSnackbar} sx={{ py: 1.5, borderRadius: '24px', fontSize: '0.85rem', fontWeight: 600, color: '#fff', border: '1px solid rgba(107, 78, 255, 0.4)', textTransform: 'none', '&:hover': { borderColor: '#6B4EFF', bgcolor: 'rgba(107, 78, 255, 0.1)' } }}>
              ورود / ثبت نام
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default function Navbar({ snackbarState, setSnackbarState }: { snackbarState: any; setSnackbarState: (state: any) => void }) {
  return (
    <Box width="100%" position="relative" dir="rtl">
      <NavbarContainer setSnackbarState={setSnackbarState} />
    </Box>
  );
}
