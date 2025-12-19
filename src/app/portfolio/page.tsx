'use client';

import React from 'react';
import { Box } from '@mui/material';

// Components
import ChildrenLayout from '@/components/ChildrenLayout';
import Portfolios from '@/components/pages/Home/Portfolios';

// Custom GSAP Hook
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';
import PortfolioTitles from '@/components/pages/portfolio/PortfolioTitles';
import CompanyVoices from '@/components/pages/Home/CompanyVoices';

export default function PortfolioPage() {
  // Ref برای کل بخش نمونه‌کارها
  const portfoliosRef = React.useRef<HTMLDivElement | any>(null);

  // انیمیشن ورود زیبا برای کل صفحه نمونه‌کارها
  useScrollAnimation(portfoliosRef, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' },
    delay: 0.2,
  });

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Box ref={portfoliosRef} mt={14}>
          <Box my={12}>
            <CompanyVoices />
          </Box>
          <Portfolios />
          <PortfolioTitles />
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
