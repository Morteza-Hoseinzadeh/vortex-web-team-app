'use client';

import React from 'react';
import { Box } from '@mui/material';

// Components
import ChildrenLayout from '@/components/ChildrenLayout';
import AboutVortex from '@/components/pages/Home/AboutVortex';
import OurServices from '@/components/pages/Home/OurServices';
import CoopiesLogoSection from '@/components/pages/Home/CoopiesLogoSection';
import Portfolios from '@/components/pages/Home/Portfolios';
import CoopWays from '@/components/pages/Home/CoopWays';
import PricingTable from '@/components/pages/Home/PricingTable';
import CompanyVoices from '@/components/pages/Home/CompanyVoices';
import ContactForm from '@/components/pages/Home/ContactForm';

// Custom GSAP Hook
import { useScrollAnimation } from '@/utils/hooks/animation/useScrollAnimation';

export default function Home() {
  // Refs for each section
  const aboutRef = React.useRef<HTMLDivElement | any>(null);
  const servicesRef = React.useRef<HTMLDivElement | any>(null);
  const coopiesRef = React.useRef<HTMLDivElement | any>(null);
  const portfoliosRef = React.useRef<HTMLDivElement | any>(null);
  const coopWaysRef = React.useRef<HTMLDivElement | any>(null);
  const pricingRef = React.useRef<HTMLDivElement | any>(null);
  const voicesRef = React.useRef<HTMLDivElement | any>(null);
  const contactRef = React.useRef<HTMLDivElement | any>(null);

  // NEW & VARIED ANIMATIONS — هر بخش انیمیشن متفاوت و جذاب
  useScrollAnimation(aboutRef, {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
    delay: 0.2,
  });

  useScrollAnimation(servicesRef, {
    from: { y: 80, opacity: 0, rotateX: -15 },
    to: { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'back.out(1.4)' },
    stagger: { each: 0.2, from: 'start' },
  });

  useScrollAnimation(coopiesRef, {
    from: { y: 80, opacity: 0, rotateX: -15 },
    to: { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'back.out(1.4)' },
    stagger: { each: 0.2, from: 'start' },
  });

  useScrollAnimation(portfoliosRef, {
    from: { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
    to: { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out' },
    stagger: { each: 0.2, from: 'center' },
  });

  useScrollAnimation(coopWaysRef, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, duration: 1.4, ease: 'circ.out' },
    stagger: { each: 0.25, from: 'start' },
  });

  useScrollAnimation(pricingRef, {
    from: { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
    to: { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out' },
    stagger: { each: 0.2, from: 'center' },
  });

  useScrollAnimation(voicesRef, {
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
    stagger: { each: 0.15, from: 'end' },
  });

  useScrollAnimation(contactRef, {
    from: { y: 120, opacity: 0, scale: 0.9 },
    to: { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'expo.out' },
    delay: 0.3,
  });

  return (
    <ChildrenLayout>
      <Box sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
        <Box ref={aboutRef}>
          <AboutVortex />
        </Box>

        <Box ref={servicesRef}>
          <OurServices />
        </Box>

        <Box ref={coopiesRef}>
          <CoopiesLogoSection />
        </Box>

        <Box ref={portfoliosRef}>
          <Portfolios />
        </Box>

        <Box ref={coopWaysRef}>
          <CoopWays />
        </Box>

        <Box ref={pricingRef}>
          <PricingTable />
        </Box>

        <Box ref={voicesRef}>
          <CompanyVoices />
        </Box>

        <Box ref={contactRef}>
          <ContactForm />
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
