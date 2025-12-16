import React from 'react';
import ChildrenLayout from '@/components/ChildrenLayout';
import AboutVortex from '@/components/pages/Home/AboutVortex';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <ChildrenLayout>
      <Box margin={'64px'}>
        <AboutVortex />
      </Box>
    </ChildrenLayout>
  );
}
