import { Box } from '@mui/material';

// Custom components
import ChildrenLayout from '@/components/ChildrenLayout';
import AboutVortex from '@/components/pages/Home/AboutVortex';
import OurServices from '@/components/pages/Home/OurServices';
import CoopiesLogoSection from '@/components/pages/Home/CoopiesLogoSection';
import Portfolios from '@/components/pages/Home/Portfolios';
import CoopWays from '@/components/pages/Home/CoopWays';

export default function Home() {
  return (
    <ChildrenLayout>
      <Box margin={'32px'}>
        <AboutVortex />
        <OurServices />
        <CoopiesLogoSection />
        <Portfolios />
        <CoopWays />
      </Box>
    </ChildrenLayout>
  );
}
