import { Box } from '@mui/material';

// Custom components
import ChildrenLayout from '@/components/ChildrenLayout';
import AboutVortex from '@/components/pages/Home/AboutVortex';
import OurServices from '@/components/pages/Home/OurServices';
import CoopiesLogoSection from '@/components/pages/Home/CoopiesLogoSection';
import Portfolios from '@/components/pages/Home/Portfolios';
import CoopWays from '@/components/pages/Home/CoopWays';
import PricingTable from '@/components/pages/Home/PricingTable';
import CompanyVoices from '@/components/pages/Home/CompanyVoices';
import ContactForm from '@/components/pages/Home/ContactForm';

export default function Home() {
  return (
    <ChildrenLayout>
      <Box margin={'32px'}>
        <AboutVortex />
        <OurServices />
        <CoopiesLogoSection />
        <Portfolios />
        <CoopWays />
        <PricingTable />
        <CompanyVoices />
        <ContactForm />
      </Box>
    </ChildrenLayout>
  );
}
