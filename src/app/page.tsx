import React from 'react';
import { Box } from '@mui/material';

// Custom components
import ChildrenLayout from '@/components/ChildrenLayout';
import AboutVortex from '@/components/pages/Home/AboutVortex';
import OurServices from '@/components/pages/Home/OurServices';

export default function Home() {
  return (
    <ChildrenLayout>
      <Box margin={'32px'}>
        <AboutVortex />
        <OurServices />
      </Box>
    </ChildrenLayout>
  );
}
