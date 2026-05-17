'use client';

import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHeart, FaBolt, FaShieldAlt, FaUsers, FaTrophy, FaGlobe, FaRocket, FaStar } from 'react-icons/fa';
import { TbSparkles } from 'react-icons/tb';
import ChildrenLayout from '@/components/ChildrenLayout';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import AffiliateSection from '@/components/pages/Home/AffiliateSection';

export default function AboutUsPage() {
  const stats = [
    { number: '۶+', label: 'پروژه موفق', icon: <FaRocket size={20} /> },
    { number: '۱۴۰۴', label: 'سال تأسیس', icon: <FaStar size={20} /> },
    { number: '۱۰۰%', label: 'رضایت مشتری', icon: <FaHeart size={20} /> },
    { number: '۲۴/۷', label: 'پشتیبانی', icon: <TbSparkles size={20} /> },
  ];

  const values = [
    { icon: <FaHeart size={28} />, title: 'عشق به کار', desc: 'هر پروژه رو مثل پروژه خودمون با عشق و دقت انجام می‌دیم', color: '#FF4FD8' },
    { icon: <FaBolt size={28} />, title: 'سرعت و کیفیت', desc: 'سریع تحویل می‌دیم، اما هیچ‌وقت از کیفیت کم نمی‌کنیم', color: '#FFA500' },
    { icon: <FaShieldAlt size={28} />, title: 'شفافیت کامل', desc: 'قیمت، زمان، فرآیند — همه چیز شفاف و بدون هزینه مخفی', color: '#6B4EFF' },
    { icon: <FaUsers size={28} />, title: 'مشتری‌مداری', desc: 'رضایت شما اولویت اول ماست — تا وقتی راضی نباشید، کار تموم نیست', color: '#4A7DFF' },
    { icon: <FaTrophy size={28} />, title: 'نوآوری', desc: 'از جدیدترین تکنولوژی‌ها و ترندهای طراحی استفاده می‌کنیم', color: '#9B7BFF' },
    { icon: <FaGlobe size={28} />, title: 'تعهد بلندمدت', desc: 'بعد از تحویل هم همراهتون هستیم — پشتیبانی واقعی', color: '#FF4FD8' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <ChildrenLayout>
      <Box sx={{ minHeight: '100vh', bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden', mt: 24, pb: { xs: 8, md: 12 } }}>
        <AffiliateSection />
        {/* Animated Background Particles */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(25)].map((_, i) => (
            <Box key={i} sx={{ position: 'absolute', width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px`, borderRadius: '50%', background: `radial-gradient(circle, rgba(107, 78, 255, 0.04) 0%, transparent 70%)`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
          ))}
        </Box>

        {/* Glowing Orbs */}
        <Box sx={{ position: 'absolute', top: '15%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'pulse 6s ease-in-out infinite' }} />
        <Box sx={{ position: 'absolute', bottom: '15%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'pulse 6s ease-in-out infinite 3s' }} />

        <Box sx={{ mx: 'auto', position: 'relative', zIndex: 2 }}>
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}>
            <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
              {/* Badge */}
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(107, 78, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '100px', px: 3, py: 1, mb: 4, border: '1px solid rgba(107, 78, 255, 0.3)' }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#6B4EFF', boxShadow: '0 0 8px #6B4EFF', animation: 'pulse 2s infinite' }} />
                <Typography sx={{ fontSize: '0.7rem', color: '#9B7BFF', fontWeight: 600, letterSpacing: '2px' }}>✦ ABOUT VORTEX ✦</Typography>
              </Box>

              {/* Title */}
              <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
                داستان{' '}
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8, #4A7DFF)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', animation: 'gradientShift 3s ease infinite' }}>
                  ورتکس
                </Box>
              </Typography>

              {/* Description */}
              <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '650px', mx: 'auto', lineHeight: 1.8 }}>تیمی از متخصصان خلاق و با تجربه در حوزه طراحی و توسعه وب</Typography>
            </Box>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 6, md: 8 } }}>
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div variants={itemVariants}>
                    <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.15)', position: 'relative', overflow: 'hidden' }}>
                      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF)' }} />
                      <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 3, lineHeight: 1.3 }}>
                        ما از سال ۱۴۰۴ شروع کردیم
                        <Box component="span" sx={{ color: '#6B4EFF', display: 'block', fontSize: '1.2rem', mt: 1 }}>
                          با یک هدف ساده
                        </Box>
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.8, mb: 2 }}>ساختن وب‌سایت‌هایی که واقعاً کار می‌کنند. وب‌سایت‌هایی که فقط زیبا نباشند، بلکه فروش ایجاد کنند، اعتماد بسازند و کسب‌وکار شما را رشد دهند.</Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.8 }}>امروز، تیم ورتکس متشکل از بهترین طراحان، برنامه‌نویسان و متخصصان سئو است که عاشق خلق تجربه‌های دیجیتال خاص هستند.</Typography>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
                    {stats.map((stat, i) => (
                      <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}>
                        <Box sx={{ p: 3, textAlign: 'center', borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.15)', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.4)', bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                          <Box sx={{ color: '#6B4EFF', mb: 1 }}>{stat.icon}</Box>
                          <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 0.5 }}>{stat.number}</Typography>
                          <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>

          {/* Mission Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 8, md: 10 } }}>
              <Box textAlign="center" mb={6}>
                <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
                  رسالت{' '}
                  <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    ما
                  </Box>
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '600px', mx: 'auto' }}>چیزی که هر روز ما را به جلو حرکت می‌دهد</Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.15)', height: '100%', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(107, 78, 255, 0.4)' } }}>
                      <Box sx={{ color: '#6B4EFF', mb: 3 }}>
                        <FaGlobe size={40} />
                      </Box>
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>ساختن وب‌سایت‌هایی که واقعاً کار می‌کنند</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>ما به طراحی به عنوان یک ابزار استراتژیک نگاه می‌کنیم. هر تصمیم طراحی، هر خط کد، با هدف رشد کسب‌وکار شما نوشته می‌شود.</Typography>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.15)', height: '100%', transition: 'all 0.3s ease', '&:hover': { borderColor: 'rgba(255, 79, 216, 0.4)' } }}>
                      <Box sx={{ color: '#FF4FD8', mb: 3 }}>
                        <FaHeart size={40} />
                      </Box>
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>عشق به جزئیات و تعهد به کیفیت</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>برای ما، یک پروژه فقط زمانی تمام می‌شود که شما ۱۰۰٪ راضی باشید. به همین دلیل است که مشتریان ما همیشه به ما برمی‌گردند.</Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>

          {/* Values Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 8, md: 10 } }}>
              <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
                ارزش‌هایی که به آنها
                <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mx: 1 }}>
                  باور داریم
                </Box>
              </Typography>

              <Typography textAlign="center" sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', mb: 6, maxWidth: '500px', mx: 'auto' }}>
                چیزهایی که هر روز ما را به جلو حرکت می‌دهند
              </Typography>

              <Grid container spacing={3}>
                {values.map((value, i) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                    <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Box sx={{ p: 3.5, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.15)', textAlign: 'center', height: '100%', transition: 'all 0.3s ease', '&:hover': { borderColor: value.color, bgcolor: 'rgba(20, 16, 45, 0.7)' } }}>
                        <Box sx={{ width: 56, height: 56, mx: 'auto', mb: 2, borderRadius: '16px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: value.color }}>{value.icon}</Box>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#fff', mb: 1 }}>{value.title}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{value.desc}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: 'spring' }} viewport={{ once: true }}>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 4, md: 5 } }}>
              <Box sx={{ textAlign: 'center', py: { xs: 3, sm: 3.5, md: 4 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '48px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.12), rgba(255, 79, 216, 0.08))', backdropFilter: 'blur(12px)', border: '1px solid rgba(107, 78, 255, 0.2)', position: 'relative', overflow: 'hidden' }}>
                {/* Animated Border */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6B4EFF, #FF4FD8, #4A7DFF, #6B4EFF)', backgroundSize: '200% 100%', animation: 'borderFlow 3s linear infinite' }} />

                <TbSparkles size={50} style={{ margin: '0 auto 20px', opacity: 0.3, color: '#6B4EFF' }} />

                <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>آماده همکاری با ما هستید؟</Typography>

                <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' }, color: 'rgba(255, 255, 255, 0.5)', mb: 4, maxWidth: '450px', mx: 'auto' }}>تیم ما آماده پاسخگویی به سوالات شماست — بدون هیچ تعهدی</Typography>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component="a"
                    href="https://ble.ir/vortexwebteam"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={
                      <Box component="span" sx={{ fontSize: '1.2rem' }}>
                        💬
                      </Box>
                    }
                    sx={{ py: { xs: 1.2, sm: 1.3, md: 1.5 }, px: { xs: 4, sm: 5, md: 6 }, borderRadius: '50px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }, fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', transition: 'all 0.3s ease', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)' } }}
                  >
                    شروع گفتگو در بله
                  </Button>
                </motion.div>

                <Typography sx={{ mt: 4, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: 'rgba(255, 255, 255, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                  <span>⏰ پاسخگویی ۲۴ ساعته</span>
                  <span>•</span>
                  <span>💎 مشاوره کاملاً رایگان</span>
                  <span>•</span>
                  <span>✅ بدون تعهد خرید</span>
                </Typography>
              </Box>
            </Box>
          </motion.div>
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
