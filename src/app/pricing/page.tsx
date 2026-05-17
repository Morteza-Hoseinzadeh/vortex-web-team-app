'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PricingTable from '@/components/pages/Home/PricingTable';
import ChildrenLayout from '@/components/ChildrenLayout';
import { TbRocket, TbStars } from 'react-icons/tb';
import Loading from '../loading';

function HeaderSection() {
  const theme = useTheme();

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}>
      <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
        {/* Main Title */}
        <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
          تعرفه‌های{' '}
          <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
            طراحی سایت
          </Box>
        </Typography>

        {/* Description */}
        <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '800px', mx: 'auto', mb: 3, lineHeight: 1.8 }}>پکیج‌های ما مثل سیاره‌های منظومه شمسی هستند — هر کدوم قدرت و امکانات منحصر به فرد خودش رو داره. بهترین گزینه رو برای کسب‌وکارتون انتخاب کنید یا با ما مشورت کنید تا پکیج سفارشی بسازیم.</Typography>

        {/* Trust Badge */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
          <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.5)', display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2.5, py: 0.8, borderRadius: '30px' }}>
            <TbStars size={16} color="#FFD700" />
            💎 قیمت‌ها شفاف، بدون هزینه مخفی — تضمین بهترین کیفیت
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
}

function CTASection() {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }}>
      <Box sx={{ mt: 8, mb: 6 }}>
        <Box sx={{ textAlign: 'center', py: { xs: 6, sm: 7, md: 8 }, px: { xs: 3, sm: 4, md: 5 }, bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', borderRadius: '48px', border: '1px solid rgba(107, 78, 255, 0.2)', maxWidth: '950px', mx: 'auto', position: 'relative', overflow: 'hidden' }}>
          {/* Animated Border Gradient */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF, #6B4EFF)', backgroundSize: '200% 100%', animation: 'borderFlow 3s linear infinite' }} />

          {/* Decorative Icons */}
          <TbRocket size={40} style={{ position: 'absolute', top: 20, right: 30, opacity: 0.08, color: '#6B4EFF' }} />
          <TbStars size={40} style={{ position: 'absolute', bottom: 20, left: 30, opacity: 0.08, color: '#FF4FD8' }} />

          {/* Title */}
          <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2, lineHeight: 1.3 }}>
            کدوم پکیج مناسب شماست؟
            <Box component="span" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, ml: 1 }}>
              🤔
            </Box>
          </Typography>

          {/* Description */}
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, fontWeight: 500, color: 'rgba(255, 255, 255, 0.6)', maxWidth: '650px', mx: 'auto', mb: 4, lineHeight: 1.7 }}>نمی‌دونید از کجا شروع کنید؟ مشکلی نیست! با تیم فروش ما چت کنید تا با توجه به بودجه و نیازتون، بهترین پکیج رو پیشنهاد بدیم.</Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2.5, sm: 3 }, justifyContent: 'center', mb: 4 }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                component="a"
                href="https://ble.ir/vortexwebteam"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ py: { xs: 1.3, sm: 1.4, md: 1.6 }, px: { xs: 3.5, sm: 4.5, md: 5.5 }, borderRadius: '50px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }, fontWeight: 600, bgcolor: '#25D366', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)' } }}
              >
                💬 مشاوره رایگان در بله
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button component="a" href="tel:989309363715" sx={{ py: { xs: 1.3, sm: 1.4, md: 1.6 }, px: { xs: 3.5, sm: 4.5, md: 5.5 }, borderRadius: '50px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }, fontWeight: 600, bgcolor: 'transparent', color: '#fff', border: '1.5px solid rgba(107, 78, 255, 0.5)', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(107, 78, 255, 0.15)', borderColor: '#6B4EFF', transform: 'translateY(-3px)' } }}>
                📞 تماس مستقیم
              </Button>
            </motion.div>
          </Box>

          {/* Footer Note */}
          <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, color: 'rgba(255, 255, 255, 0.35)', fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            <span>⏰</span> پاسخگویی ۲۴ ساعته
            <span>•</span>
            <span>💎</span> بدون تعهد خرید
            <span>•</span>
            <span>✅</span> تضمین کیفیت
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function PricingPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <ChildrenLayout>
      <Box sx={{ mt: 24, pb: { xs: 6, md: 8 }, bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }}>
        {/* Animated Background Particles */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(20)].map((_, i) => (
            <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
          ))}
        </Box>

        {/* Glowing Orbs */}
        <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 6s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'pulse 6s ease-in-out infinite 3s' }} />

        <Box sx={{ mx: 'auto', position: 'relative', zIndex: 2 }}>
          <HeaderSection />
          <PricingTable />
          <CTASection />
        </Box>
      </Box>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(15px);
          }
          50% {
            transform: translateY(-40px) translateX(0px);
          }
          75% {
            transform: translateY(-20px) translateX(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
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

        @keyframes borderFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </ChildrenLayout>
  );
}
