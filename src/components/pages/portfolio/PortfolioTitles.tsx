'use client';

import ConvertToPersianDigit from '@/utils/functions/convertToPersianDigit';
import { Box, Button, Typography, useTheme, Zoom } from '@mui/material';
import { FaRocket, FaShieldAlt } from 'react-icons/fa';
import { TbArrowLeft } from 'react-icons/tb';

export default function PortfolioTitles() {
  const theme = useTheme();

  return (
    <Zoom in timeout={600}>
      <Box sx={{ position: 'relative', mt: { xs: 6, md: 10 }, mb: { xs: 4, md: 6 }, textAlign: 'center', py: { xs: 6, md: 8, lg: 10 }, px: { xs: 4, sm: 6, md: 8 }, borderRadius: '48px', overflow: 'hidden', maxWidth: '1000px', mx: 'auto', transition: 'all 0.4s ease' }}>
        {/* Gradient Background */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.15) 0%, rgba(255, 79, 216, 0.1) 50%, rgba(107, 78, 255, 0.15) 100%)', backdropFilter: 'blur(20px)', borderRadius: '48px', border: '2px solid rgba(107, 78, 255, 0.3)', boxShadow: '0 20px 60px rgba(107, 78, 255, 0.2)' }} />

        {/* Animated Glow Effect */}
        <Box sx={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.15) 0%, transparent 70%)', animation: 'rotate 20s linear infinite', pointerEvents: 'none' }} />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* Decorative Icon */}
          <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 }, borderRadius: '50%', bgcolor: 'rgba(107, 78, 255, 0.2)', border: '2px solid rgba(107, 78, 255, 0.5)', mb: 3, animation: 'pulse 2s ease-in-out infinite' }}>
            <FaRocket size={30} color="#6B4EFF" />
          </Box>

          {/* Main Title */}
          <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem', lg: '3rem' }, fontWeight: 800, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
            آماده‌اید پروژه بعدی‌تون{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              با ما باشه؟
            </Box>
            <Box component="span" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' } }}>
              🚀
            </Box>
          </Typography>

          {/* Description */}
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)', maxWidth: '650px', mx: 'auto', mb: { xs: 4, md: 5 }, lineHeight: 1.7 }}>از نمونه‌کارها خوشت اومد؟ عالیه! تیم ورتکس آماده است تا ایده‌هات رو به یک وب‌سایت حرفه‌ای تبدیل کنه.</Typography>

          {/* Stats */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, sm: 5, md: 6 }, mb: { xs: 5, md: 6 }, flexWrap: 'wrap' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: '#6B4EFF' }}>{ConvertToPersianDigit(10)}+</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>پروژه موفق</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: '#6B4EFF' }}>{ConvertToPersianDigit(100)}%</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>رضایت مشتری</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 800, color: '#6B4EFF' }}>{ConvertToPersianDigit(24)}/۷</Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>پشتیبانی</Typography>
            </Box>
          </Box>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, justifyContent: 'center', flexWrap: 'wrap', mb: { xs: 4, md: 5 } }}>
            <Button
              component="a"
              href="https://ble.ir/vortexwebteam"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                  <img src={'/assets/logo/app-logo/bale-logo.jpg'} alt="ارتباط با ما - تیم طراحی سایت ورتکس (بله)" width={25} height={25} style={{ borderRadius: '8px' }} />
                </Box>
              }
              sx={{ py: { xs: 1.5, sm: 1.8, md: 2 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 700, bgcolor: '#25D366', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#fff', boxShadow: '0 12px 36px rgba(37, 211, 102, 0.3)', transition: 'all 0.3s ease', textTransform: 'none', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 20px 45px rgba(37, 211, 102, 0.4)' } }}
            >
              شروع پروژه در بله
            </Button>

            <Button
              component="a"
              href="/contact"
              endIcon={<TbArrowLeft style={{ marginRight: '8px' }} size={18} />}
              sx={{ py: { xs: 1.5, sm: 1.8, md: 2 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '40px', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 700, bgcolor: 'transparent', border: '2px solid rgba(107, 78, 255, 0.5)', color: '#fff', transition: 'all 0.3s ease', textTransform: 'none', '&:hover': { borderColor: '#6B4EFF', bgcolor: 'rgba(107, 78, 255, 0.1)', transform: 'translateY(-3px)' } }}
            >
              فرم مشاوره رایگان
            </Button>
          </Box>

          {/* Trust Badge */}
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,255,255,0.05)', px: 2, py: 0.8, borderRadius: '40px' }}>
            <FaShieldAlt size={12} color="#6B4EFF" />
            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>پاسخگویی ۲۴ ساعته • مشاوره رایگان • ضمانت کیفیت</Typography>
          </Box>
        </Box>

        {/* Keyframes */}
        <style jsx global>{`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }
        `}</style>
      </Box>
    </Zoom>
  );
}
