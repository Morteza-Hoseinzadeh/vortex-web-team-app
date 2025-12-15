'use client';

import { Box } from '@mui/material';

// Custom components
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';

export default function ChildrenLayout({ children }: any) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
