'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

export default function HeroSection() {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  function textWriter({ string, delay = 30, onFinish }: { string: string; delay?: number; onFinish?: () => void }) {
    return (
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .changeDelay(delay)
            .typeString(string)
            .callFunction(() => {
              onFinish?.();
            })
            .start();
        }}
      />
    );
  }

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <video ref={videoRef} muted loop playsInline preload="none" poster="/assets/images/hero-poster.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(2px)', position: 'absolute', inset: 0 }}>
        <source src="/assets/videos/hero-section-video-2.mp4" type="video/mp4" />
        <source src="/assets/videos/hero-section-video-2.mp4" type="video/webm" />
      </video>
      {/* Overlay for readability */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.35)', zIndex: 1 }} />

      {/* Hero Content */}
      <Box position="relative" zIndex={2} height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" px={2}>
        <Typography component="h1" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          تیم طراحی سایت ورتکس
        </Typography>
        <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
          <TypewriterComponent
            options={{
              cursor: ' ',
            }}
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
                options={{
                  cursor: ' ',
                }}
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
    </Box>
  );
}
