'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// Custom components
const Navbar = dynamic(() => import('@/components/UI/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/UI/Footer'), { ssr: false });

export default function ChildrenLayout({ children }: any) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
