'use client';

import React, { useState } from 'react';
import { Box, Button, Drawer, Typography, IconButton, List, ListItem, ListItemButton, useTheme, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbUser } from 'react-icons/tb';

const NavbarContainer = ({ setSnackbarState }: { setSnackbarState: (state: any) => void }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarState({ open: true, message: 'پنل کاربری در حال توسعه میباشد', variant: 'warning' });
  };

  // منوی سبک‌تر و متمرکزتر — فقط موارد اصلی
  const links = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کار ها', href: '/portfolio' },
    { title: 'تعرفه ها', href: '/pricing' },
    { title: 'پشتیبانی', href: '/support' },
    { title: 'درباره ی ما', href: '/about' },
    { title: 'وبلاگ', href: '/blog' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Navbar ثابت و سبک */}
      <Box component="nav" sx={{ width: '100%', position: 'fixed', left: 0, right: 0, zIndex: 1300, pointerEvents: 'none' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            mx: 'auto',
            bgcolor: 'rgba(20, 10, 40, 0.5)',
            boxShadow: '0 16px 50px rgba(107, 78, 255, 0.25)',
            borderRadius: '32px',
            backdropFilter: 'blur(28px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { xs: 2, lg: 2.5 },
            px: { xs: 4, lg: 6 },
            pointerEvents: 'all',
            transition: 'all 0.5s ease',
            '&:hover': {
              borderColor: '#A78BFA',
              boxShadow: '0 24px 70px rgba(107, 78, 255, 0.35)',
            },
          }}
        >
          {/* لوگو */}
          <Box component={Link} href="/" sx={{ display: 'flex' }}>
            <Image
              src="/assets/logo/vortex-logo.png"
              alt="ورتکس"
              width={isMobile ? 48 : 56}
              height={isMobile ? 48 : 56}
              priority
              style={{
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(107, 78, 255, 0.4)',
                transition: 'all 0.4s ease',
              }}
              className="hover:scale-110"
            />
          </Box>

          {/* لینک‌های دسکتاپ — سبک و مینیمال */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: { md: 3, lg: 5 } }}>
            {links.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: isActive(link.href) ? '#A78BFA' : '#fff',
                  fontWeight: isActive(link.href) ? 800 : 600,
                  fontSize: { md: '1.05rem', lg: '1.15rem' },
                  textDecoration: 'none',
                  position: 'relative',
                  px: 1,
                  py: 0.5,
                  borderRadius: '20px',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    color: '#A78BFA',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -6,
                    left: '50%',
                    width: isActive(link.href) ? '60%' : 0,
                    height: '3px',
                    bgcolor: '#A78BFA',
                    borderRadius: '2px',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.4s ease',
                  },
                  '&:hover::after': { width: '60%' },
                }}
              >
                {link.title}
              </Typography>
            ))}
          </Box>

          {/* دکمه‌های اکشن دسکتاپ */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button
              component={Link}
              href="/contact"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '28px',
                bgcolor: 'rgba(107, 78, 255, 0.25)',
                border: '1px solid rgba(107, 78, 255, 0.6)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.05rem',
                textTransform: 'none',
                boxShadow: '0 8px 28px rgba(107, 78, 255, 0.3)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  bgcolor: 'rgba(167, 139, 250, 0.4)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(167, 139, 250, 0.4)',
                },
              }}
            >
              مشاوره رایگان
            </Button>

            <IconButton
              onClick={openSnackbar}
              sx={{
                width: 52,
                height: 52,
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(107, 78, 255, 0.5)',
                color: '#fff',
                transition: 'all 0.4s ease',
                '&:hover': {
                  bgcolor: 'rgba(107, 78, 255, 0.4)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <TbUser size={26} />
            </IconButton>
          </Box>

          {/* همبرگر موبایل */}
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'flex', lg: 'none' }, color: '#fff' }}>
            <GiHamburgerMenu size={32} />
          </IconButton>
        </Box>
      </Box>

      {/* دراور موبایل — سبک و زیبا */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'rgba(15, 8, 35, 0.95)',
            backdropFilter: 'blur(32px)',
            borderLeft: '1px solid rgba(107, 78, 255, 0.5)',
            borderRadius: '32px 0 0 32px',
          },
        }}
      >
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Image src="/assets/logo/vortex-logo.png" alt="ورتکس" width={80} height={80} style={{ borderRadius: '20px', boxShadow: '0 12px 40px rgba(107, 78, 255, 0.4)', marginBottom: '2rem' }} />

          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    py: 2,
                    borderRadius: '24px',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#fff',
                    bgcolor: isActive(link.href) ? 'rgba(107, 78, 255, 0.3)' : 'transparent',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      bgcolor: 'rgba(107, 78, 255, 0.4)',
                      transform: 'translateX(-8px)',
                    },
                  }}
                >
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 4, opacity: 0.4 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              component={Link}
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              sx={{
                py: 2,
                borderRadius: '28px',
                bgcolor: 'rgba(107, 78, 255, 0.3)',
                color: '#fff',
                fontWeight: 800,
                '&:hover': { bgcolor: 'rgba(167, 139, 250, 0.5)', transform: 'scale(1.03)' },
              }}
            >
              مشاوره رایگان
            </Button>

            <Button
              fullWidth
              onClick={openSnackbar}
              sx={{
                py: 2,
                borderRadius: '28px',
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 700,
                border: '1px solid rgba(107, 78, 255, 0.5)',
                '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.3)' },
              }}
            >
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
