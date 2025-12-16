import React from 'react';
import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';

export default function CoopiesLogoSection() {
  const imgs = [
    { src: 'chroma-ui', tooltip: 'کروما یو آی - طراحی رابط کاربری' },
    { src: 'dorna-logo', tooltip: 'کلینک زیبایی درنا - نمونه کار پروژه فروشگاهی' },
    { src: 'rabet-automatic-kasra-logo', tooltip: 'رابط اتوماتیک کسری - پروژه اختصاصی' },
    { src: 'zephyr-logo', tooltip: 'زفیـر - طراحی وب‌سایت شرکتی' },
    { src: 'zichat-logo', tooltip: 'زیچت - پروژه پیام‌رسان ایرانی' },
  ];

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={{ xs: 2, sm: 4, md: 6 }} px={{ xs: 2, md: 6 }} py={{ xs: 4, md: 6 }}>
      {imgs.map((img, idx) => (
        <Tooltip key={idx} title={img.tooltip} arrow>
          <Box flex="0 1 115px" display="flex" justifyContent="center" alignItems="center" sx={{ img: { ...styles.img } }}>
            <Image src={`/assets/logo/company-logo/${img.src}.png`} alt={img.src} width={idx > 2 ? 65 : 85} height={idx > 2 ? 65 : 85} priority />
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
}

const styles = {
  img: {
    objectFit: 'contain',
    filter: 'saturate(0)',
    transition: 'all ease-in-out 0.3s',
    cursor: 'pointer',
    '&:hover': {
      filter: 'saturate(1)',
    },
  },
};
