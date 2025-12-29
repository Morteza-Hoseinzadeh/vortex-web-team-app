'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function HeroSection() {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Dynamic Glow Background */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Glow Orb 1 */}
        <Box sx={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 60%)', filter: 'blur(80px)', top: '10%', left: '-10%', animation: 'floatGlow1 18s ease-in-out infinite', opacity: 0.7 }} />

        {/* Glow Orb 2 */}
        <Box sx={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 65%)', filter: 'blur(100px)', bottom: '-20%', right: '-15%', animation: 'floatGlow2 22s ease-in-out infinite', opacity: 0.6 }} />

        {/* Glow Orb 3 - smaller accent */}
        <Box sx={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 60%)', filter: 'blur(70px)', top: '30%', right: '20%', animation: 'floatGlow3 15s ease-in-out infinite', opacity: 0.5 }} />

        {/* Optional subtle moving light streak */}
        <Box sx={{ position: 'absolute', width: '300px', height: '800px', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)', filter: 'blur(40px)', top: '-20%', left: '0%', animation: 'lightStreak 20s linear infinite', transform: 'rotate(30deg)' }} />
      </Box>

      {/* Dark overlay for text readability */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />

      {/* Hero Content */}
      <Box position="relative" mt={2} zIndex={2} height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" px={2}>
        <Typography component="h1" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          تیم طراحی سایت ورتکس
        </Typography>

        <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
          <TypewriterComponent
            options={{ cursor: ' ' }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(30)
                .typeString('وب‌سایتی که دیده میشه، اعتماد می‌سازه، می‌فروشه')
                .callFunction(() => {
                  setHideFirstCursor(true);
                  setStartSecond(true);
                })
                .start();
            }}
          />
        </Typography>

        {startSecond && (
          <Typography component="div" variant={matchMdDown ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
            <div className={hideSecondCursor ? 'hide-cursor' : ''}>
              <TypewriterComponent
                options={{ cursor: ' ' }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(45)
                    .typeString('طراحی حرفه‌ای برای رشد واقعی کسب‌وکار 🚀')
                    .callFunction(() => {
                      setHideSecondCursor(true);
                    })
                    .start();
                }}
              />
            </div>
          </Typography>
        )}

        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" sx={{ transition: 'all ease-in-out 0.3s', boxShadow: 'none', fontSize: 22, border: `1px solid ${theme.palette.primary.main}50`, backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            مشاوره رایگان
          </Button>
          <Button variant="contained" sx={{ transition: 'all ease-in-out 0.3s', boxShadow: 'none', fontSize: 22, background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`, color: '#fff', fontWeight: 'bold', px: 4, py: 1.5, borderRadius: 6, '&:hover': { transform: 'translateY(-2px)' } }}>
            سفارش طراحی سایت
          </Button>
        </Box>
      </Box>

      {/* Bottom fade */}
      <Box position="absolute" bottom={0} left={0} width="100%" height="250px" sx={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${theme.palette.background.default} 100%)`, zIndex: 1 }} />

      {/* Keyframes */}
      <style jsx>{`
        @keyframes floatGlow1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(100px, 80px) scale(1.1);
          }
        }
        @keyframes floatGlow2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-120px, -100px) scale(1.15);
          }
        }
        @keyframes floatGlow3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-80px, 60px) scale(1.05);
          }
        }
        @keyframes lightStreak {
          0% {
            transform: translateX(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(200%) rotate(30deg);
          }
        }
        .hide-cursor :global(.Typewriter__cursor) {
          display: none !important;
        }
      `}</style>
    </Box>
  );
}
