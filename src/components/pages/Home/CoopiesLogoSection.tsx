'use client';

import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';

export default function CoopiesLogoSection() {
  const logos = [
    { src: 'chroma-ui', tooltip: 'کروما یو آی - طراحی رابط کاربری' },
    { src: 'dorna-logo', tooltip: 'کلینک زیبایی درنا - نمونه کار پروژه فروشگاهی' },
    { src: 'rabet-automatic-kasra-logo', tooltip: 'رابط اتوماتیک کسری - پروژه اختصاصی' },
    { src: 'zephyr-logo', tooltip: 'زفیـر - طراحی وب‌سایت شرکتی' },
    { src: 'zichat-logo', tooltip: 'زیچت - پروژه پیام‌رسان ایرانی' },
    { src: 'personal-portfolio', tooltip: 'پورتفولیو - نمونه کار پروژه شخصی' },
  ];

  return (
    <Box component="section" sx={{ py: 6, px: { xs: 3, md: 6, lg: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 6, md: 8 } }} aria-label="برخی از مشتریان و پروژه‌های ما">
      {/* Optional subtle title */}
      <Box textAlign="center">
        <Box component="p" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>
          مورد اعتماد برندها و پروژه‌های موفق
        </Box>
      </Box>

      {/* Logos Grid */}
      <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={{ xs: 4, sm: 6, md: 8 }}>
        {logos.map((logo, idx) => (
          <Tooltip key={idx} title={logo.tooltip} arrow placement="top">
            <Box sx={{ flex: '0 1 140px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', transition: 'all 0.4s ease', '&:hover': { transform: 'translateY(-8px)', bgcolor: 'rgba(107, 78, 255, 0.08)', borderColor: 'rgba(107, 78, 255, 0.4)', boxShadow: '0 12px 32px rgba(107, 78, 255, 0.2)' } }}>
              <Image src={`/assets/logo/company-logo/${logo.src}.png`} alt={logo.tooltip} width={100} height={100} priority style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.7)', transition: 'filter 0.5s ease' }} onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')} onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)')} />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
