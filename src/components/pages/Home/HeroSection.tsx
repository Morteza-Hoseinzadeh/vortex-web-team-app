'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', bgcolor: '#0A0D1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Animated Gradient Background */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Dynamic Gradient Orbs */}
        <Box sx={{ position: 'absolute', width: '60%', height: '60%', top: '20%', left: '-20%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.4) 0%, rgba(107, 78, 255, 0) 70%)', filter: 'blur(80px)', animation: 'floatOrb1 15s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', width: '50%', height: '50%', bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.35) 0%, rgba(255, 79, 216, 0) 70%)', filter: 'blur(80px)', animation: 'floatOrb2 18s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', width: '40%', height: '40%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(74, 125, 255, 0.2) 0%, rgba(74, 125, 255, 0) 70%)', filter: 'blur(100px)', animation: 'pulseCenter 8s ease-in-out infinite' }} />

        {/* Mouse Follower Effect */}
        <Box sx={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)', pointerEvents: 'none', transform: 'translate(-50%, -50%)', left: mousePosition.x, top: mousePosition.y, transition: 'transform 0.15s ease-out' }} />

        {/* Grid Lines */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `  repeating-linear-gradient(transparent, transparent 49px, rgba(107, 78, 255, 0.05) 49px, rgba(107, 78, 255, 0.05) 50px),  repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(107, 78, 255, 0.05) 49px, rgba(107, 78, 255, 0.05) 50px)`, pointerEvents: 'none' }} />

        {/* Noise Texture */}
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', pointerEvents: 'none' }} />
      </Box>

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: '1300px', mx: 'auto', px: { xs: 3, sm: 4, md: 6 }, mt: 24, mb: 15, textAlign: 'center' }}>
        {/* Animated Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1.2, mb: 5, border: '1px solid rgba(107, 78, 255, 0.3)', boxShadow: '0 0 20px rgba(107, 78, 255, 0.2)' }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 12px #6B4EFF', animation: 'pulse 2s infinite' }} />
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '2px', background: 'linear-gradient(135deg, #fff, #9B7BFF)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>✦ VORTEX AGENCY ✦</Typography>
          </Box>
        </motion.div>

        {/* Main Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 500, background: 'linear-gradient(135deg, #FFFFFF, #6B4EFF, #FF4FD8, #4A7DFF, #FFFFFF)', backgroundSize: '300% 300%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', letterSpacing: '-0.03em', animation: 'gradientShift 5s ease infinite' }}>VORTEX WEB TEAM</Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Typography sx={{ fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem', lg: '4.5rem' }, fontWeight: 600, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.3 }}>
              ما{' '}
              <Box component={'span'} sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' }, fontWeight: 900, background: 'linear-gradient(135deg, #FFFFFF, #6B4EFF, #FF4FD8, #4A7DFF, #FFFFFF)', backgroundSize: '300% 300%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', letterSpacing: '-0.03em', animation: 'gradientShift 5s ease infinite' }}>
                ورتکس{' '}
              </Box>
              هستیم
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, color: 'rgba(255,255,255,0.5)', textAlign: 'center', mt: 1.5, maxWidth: '550px' }}>تخصص ما تبدیل ایده‌های دیجیتال به محصولات موفق و ماندگار است</Typography>
          </Box>
        </motion.div>

        {/* Typewriter Lines */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
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
        </motion.div>

        {startSecond && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Box sx={{ mb: 6 }}>
              <Typography component="div" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>
                <div className={hideSecondCursor ? 'hide-cursor' : ''}>
                  <TypewriterComponent
                    options={{ cursor: ' ', delay: 50 }}
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
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              href="support"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                px: { xs: 4, sm: 5 },
                py: { xs: 1.3, sm: 1.6 },
                borderRadius: '50px',
                borderColor: 'rgba(107, 78, 255, 0.5)',
                color: '#FFFFFF',
                textTransform: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', transition: 'left 0.5s ease' },
                '&:hover': { borderColor: '#6B4EFF', bgcolor: 'rgba(107, 78, 255, 0.1)', transform: 'translateY(-3px)', '&::before': { left: '100%' } },
              }}
            >
              مشاوره رایگان
            </Button>

            <Button
              variant="contained"
              href="tel:989309363715"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                px: { xs: 4, sm: 5 },
                py: { xs: 1.3, sm: 1.6 },
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #6B4EFF, #9B7BFF)',
                color: '#FFFFFF',
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(107, 78, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::after': { content: '""', position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', transition: 'left 0.5s ease' },
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 30px rgba(107, 78, 255, 0.4)', '&::after': { left: '100%' } },
              }}
            >
              سفارش طراحی سایت
            </Button>
          </Box>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
          <Box sx={{ position: 'absolute', bottom: -100, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, cursor: 'pointer', opacity: 0.5, transition: 'opacity 0.3s ease', '&:hover': { opacity: 1 } }} onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
            <Box sx={{ width: 26, height: 42, border: '2px solid rgba(255,255,255,0.2)', borderRadius: '30px', display: 'flex', justifyContent: 'center', pt: 1.5 }}>
              <Box sx={{ width: 3, height: 10, bgcolor: 'rgba(255,255,255,0.5)', borderRadius: '2px', animation: 'scrollBounce 2s infinite' }} />
            </Box>
            <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', textTransform: 'uppercase' }}>اسکرول کنید</Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        @keyframes floatOrb1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(100px, 50px) scale(1.1);
          }
        }

        @keyframes floatOrb2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-80px, -60px) scale(1.15);
          }
        }

        @keyframes pulseCenter {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hide-cursor .Typewriter__cursor {
          display: none !important;
        }

        .hidden-cursor {
          display: none;
        }

        .typewriter-text {
          display: inline-block;
        }
      `}</style>
    </Box>
  );
}
