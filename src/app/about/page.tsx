'use client';

import { Box, Typography, Button, Grid } from '@mui/material';
import { FaHeart, FaBolt, FaShieldAlt, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';
import ChildrenLayout from '@/components/ChildrenLayout';

export default function AboutUsPage() {
  const stats = [
    { number: '۶+', label: 'پروژه موفق' },
    { number: '۱۴۰۴', label: 'سال تأسیس' },
    { number: '۱۰۰%', label: 'رضایت مشتری' },
    { number: '۲۴/۷', label: 'پشتیبانی' },
  ];

  const values = [
    { icon: <FaHeart size={28} />, title: 'عشق به کار', desc: 'هر پروژه رو مثل پروژه خودمون با عشق و دقت انجام می‌دیم' },
    { icon: <FaBolt size={28} />, title: 'سرعت و کیفیت', desc: 'سریع تحویل می‌دیم، اما هیچ‌وقت از کیفیت کم نمی‌کنیم' },
    { icon: <FaShieldAlt size={28} />, title: 'شفافیت کامل', desc: 'قیمت، زمان، فرآیند — همه چیز شفاف و بدون هزینه مخفی' },
    { icon: <FaUsers size={28} />, title: 'مشتری‌مداری', desc: 'رضایت شما اولویت اول ماست — تا وقتی راضی نباشید، کار تموم نیست' },
    { icon: <FaTrophy size={28} />, title: 'نوآوری', desc: 'از جدیدترین تکنولوژی‌ها و ترندهای طراحی استفاده می‌کنیم' },
    { icon: <FaGlobe size={28} />, title: 'تعهد بلندمدت', desc: 'بعد از تحویل هم همراهتون هستیم — پشتیبانی واقعی' },
  ];

  return (
    <ChildrenLayout>
      <Box sx={{ minHeight: '100vh', bgcolor: '#0A0D1A', position: 'relative', overflow: 'hidden' }} mt={24}>
        {/* Background Glow Effects */}
        <Box sx={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(107, 78, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 79, 216, 0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 2, textAlign: 'center' }} mb={{ xs: 2, md: 2 }}>
          {/* Header */}
          <Typography component="h4" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, letterSpacing: '3px', textTransform: 'uppercase', color: '#6B4EFF', fontWeight: 600, mb: 2, display: 'inline-block', bgcolor: 'rgba(107, 78, 255, 0.08)', px: 2, py: 0.6, borderRadius: '30px' }}>
            ABOUT VORTEX
          </Typography>

          <Typography component="h1" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            داستان{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ورتکس
            </Box>
          </Typography>

          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.55)', maxWidth: '650px', mx: 'auto', lineHeight: 1.8 }}>تیمی از متخصصان خلاق و با تجربه در حوزه طراحی و توسعه وب</Typography>
        </Box>

        {/* Story Section */}
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 6, md: 8 }, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)' }}>
                <Typography sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 3, lineHeight: 1.3 }}>
                  ما از سال ۱۴۰۴ شروع کردیم
                  <Box component="span" sx={{ color: '#6B4EFF', display: 'block' }}>
                    با یک هدف ساده
                  </Box>
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.8, mb: 3 }}>ساختن وب‌سایت‌هایی که واقعاً کار می‌کنند. وب‌سایت‌هایی که فقط زیبا نباشند، بلکه فروش ایجاد کنند، اعتماد بسازند و کسب‌وکار شما را رشد دهند.</Typography>
                <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.8 }}>امروز، تیم ورتکس متشکل از بهترین طراحان، برنامه‌نویسان و متخصصان سئو است که عاشق خلق تجربه‌های دیجیتال خاص هستند.</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
                {stats.map((stat, i) => (
                  <Box key={i} sx={{ p: 3, textAlign: 'center', borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.4)' } }}>
                    <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mb: 1 }}>{stat.number}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mission Section */}
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 8, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              رسالت{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                ما
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '600px', mx: 'auto' }}>چیزی که هر روز ما را به جلو حرکت می‌دهد</Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', height: '100%' }}>
                <Box sx={{ color: '#6B4EFF', mb: 3 }}>
                  <FaGlobe size={40} />
                </Box>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>ساختن وب‌سایت‌هایی که واقعاً کار می‌کنند</Typography>
                <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>ما به طراحی به عنوان یک ابزار استراتژیک نگاه می‌کنیم. هر تصمیم طراحی، هر خط کد، با هدف رشد کسب‌وکار شما نوشته می‌شود.</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: { xs: 4, md: 5 }, borderRadius: '32px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', height: '100%' }}>
                <Box sx={{ color: '#FF4FD8', mb: 3 }}>
                  <FaHeart size={40} />
                </Box>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', mb: 2 }}>عشق به جزئیات و تعهد به کیفیت</Typography>
                <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>برای ما، یک پروژه فقط زمانی تمام می‌شود که شما ۱۰۰٪ راضی باشید. به همین دلیل است که مشتریان ما همیشه به ما برمی‌گردند.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Values Section */}
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 8, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Typography textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
            ارزش‌هایی که به آنها
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #6B4EFF, #FF4FD8)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', mx: 1 }}>
              باور داریم
            </Box>
          </Typography>

          <Typography textAlign="center" sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)', mb: 6, maxWidth: '500px', mx: 'auto' }}>
            چیزهایی که هر روز ما را به جلو حرکت می‌دهند
          </Typography>

          <Grid container spacing={3}>
            {values.map((value, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                <Box sx={{ p: 3, borderRadius: '24px', bgcolor: 'rgba(15, 12, 35, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.15)', textAlign: 'center', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(107, 78, 255, 0.4)' } }}>
                  <Box sx={{ width: 56, height: 56, mx: 'auto', mb: 2, borderRadius: '16px', bgcolor: 'rgba(107, 78, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B4EFF' }}>{value.icon}</Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#fff', mb: 1 }}>{value.title}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{value.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 8, md: 10 }, position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', py: { xs: 5, sm: 6, md: 7 }, px: { xs: 3, sm: 4, md: 5 }, borderRadius: '48px', background: 'linear-gradient(135deg, rgba(107, 78, 255, 0.15), rgba(255, 79, 216, 0.1))', backdropFilter: 'blur(10px)', border: '1px solid rgba(107, 78, 255, 0.2)' }}>
            <Typography sx={{ fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' }, fontWeight: 700, color: '#FFFFFF', mb: 2 }}>آماده همکاری با ما هستید؟</Typography>

            <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' }, color: 'rgba(255, 255, 255, 0.5)', mb: 4, maxWidth: '450px', mx: 'auto' }}>تیم ما آماده پاسخگویی به سوالات شماست — بدون هیچ تعهدی</Typography>

            <Button
              component="a"
              href="https://wa.me/989309363715"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={
                <Box component="span" sx={{ fontSize: '1.2rem' }}>
                  💬
                </Box>
              }
              sx={{ py: { xs: 1.2, sm: 1.3, md: 1.5 }, px: { xs: 4, sm: 5, md: 6 }, borderRadius: '40px', fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' }, fontWeight: 600, bgcolor: '#25D366', color: '#fff', textTransform: 'none', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-2px)' } }}
            >
              شروع گفتگو در واتساپ
            </Button>

            <Typography sx={{ mt: 4, fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' }, color: 'rgba(255, 255, 255, 0.35)' }}>پاسخگویی ۲۴ ساعته — مشاوره کاملاً رایگان</Typography>
          </Box>
        </Box>
      </Box>
    </ChildrenLayout>
  );
}
