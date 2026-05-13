'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function HeroSection() {
  const theme = useTheme();

  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', bgcolor: '#0A0D1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Gradient Background with Contrast */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Dark base layer */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 40%, #1A0D2E 0%, #05050A 100%)' }} />

        {/* Purple glow - left */}
        <Box sx={{ position: 'absolute', top: '-20%', left: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        {/* Pink glow - right */}
        <Box sx={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        {/* Blue accent glow - center */}
        <Box sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(74, 125, 255, 0.08) 0%, transparent 80%)', filter: 'blur(80px)' }} />

        {/* Grid pattern overlay */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `  linear-gradient(rgba(107, 78, 255, 0.03) 1px, transparent 1px),  linear-gradient(90deg, rgba(107, 78, 255, 0.03) 1px, transparent 1px)`, backgroundSize: '50px 50px', pointerEvents: 'none' }} />

        {/* Subtle noise */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', pointerEvents: 'none' }} />
      </Box>

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '1200px', mx: 'auto', px: { xs: 3, sm: 4, md: 6 }, py: { xs: 8, md: 6 }, textAlign: 'center' }}>
        {/* Badge */}
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 2.5, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.15)' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
          <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 500, letterSpacing: '1px' }}>✦ VORTEX AGENCY ✦</Typography>
        </Box>

        {/* Main Title */}
        <Box display={'flex'} alignItems={'center'} gap={1}>
          <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 1.5, lineHeight: 1.3, letterSpacing: '-0.02em' }}>تیم طراحی سایت</Typography>
          <Typography sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 4, letterSpacing: '-0.02em' }}>ورتکس</Typography>
        </Box>

        {/* Typewriter Line 1 */}
        <Box sx={{ mb: 2 }}>
          <Typography component="div" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)' }}>
            <TypewriterComponent
              options={{ cursor: hideFirstCursor ? ' ' : '|', cursorClassName: hideFirstCursor ? 'hidden-cursor' : '', delay: 35 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('وب‌سایتی که دیده میشه، اعتماد می‌سازه، می‌فروشه')
                  .callFunction(() => {
                    setHideFirstCursor(true);
                    setStartSecond(true);
                  })
                  .start();
              }}
            />
          </Typography>
        </Box>

        {/* Typewriter Line 2 */}
        {startSecond && (
          <Box sx={{ mb: 5 }}>
            <Typography component="div" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 400, color: 'rgba(255, 255, 255, 0.6)' }}>
              <div className={hideSecondCursor ? 'hide-cursor' : ''}>
                <TypewriterComponent
                  options={{ cursor: ' ', delay: 45 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('طراحی حرفه‌ای برای رشد واقعی کسب‌وکار 🚀')
                      .callFunction(() => {
                        setHideSecondCursor(true);
                      })
                      .start();
                  }}
                />
              </div>
            </Typography>
          </Box>
        )}

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="outlined" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, fontWeight: 600, px: { xs: 3, sm: 4 }, py: { xs: 1.2, sm: 1.5 }, borderRadius: '40px', borderColor: 'rgba(107, 78, 255, 0.4)', color: '#FFFFFF', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { borderColor: '#6B4EFF', bgcolor: 'rgba(107, 78, 255, 0.1)', transform: 'translateY(-2px)' } }}>
            مشاوره رایگان
          </Button>

          <Button variant="contained" sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, fontWeight: 600, px: { xs: 3, sm: 4 }, py: { xs: 1.2, sm: 1.5 }, borderRadius: '40px', background: 'linear-gradient(135deg, #6B4EFF, #9B7BFF)', color: '#FFFFFF', textTransform: 'none', boxShadow: '0 4px 20px rgba(107, 78, 255, 0.25)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 25px rgba(107, 78, 255, 0.35)' } }}>
            سفارش طراحی سایت
          </Button>
        </Box>

        {/* Scroll Indicator */}
        <Box sx={{ position: 'absolute', bottom: { xs: -60, md: -80 }, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.3s ease', '&:hover': { opacity: 1 } }} onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px' }}>اسکرول</Typography>
          <Box sx={{ width: 24, height: 38, border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: '30px', display: 'flex', justifyContent: 'center', pt: 1 }}>
            <Box sx={{ width: 3, height: 8, bgcolor: 'rgba(255,255,255,0.4)', borderRadius: '2px', animation: 'scrollBounce 2s infinite' }} />
          </Box>
        </Box>
      </Box>

      {/* Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        .hide-cursor .Typewriter__cursor {
          display: none !important;
        }
        .hidden-cursor {
          display: none;
        }
      `}</style>
    </Box>
  );
}
