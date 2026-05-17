'use client';

import { Box, Typography } from '@mui/material';

const messages = [
  '✨ طراحی سایت حرفه‌ای و مدرن با تیم ورتکس — خلاقیت و کیفیت در کنار هم',
  '🎯 فروشگاه اینترنتی، سایت شرکتی، پنل مدیریت و هر چیزی که نیاز دارید',
  '⚡ سرعت لود فوق‌العاده بالا و بهینه‌سازی کامل برای گوگل',
  '🎨 UI/UX اختصاصی با تجربه کاربری روان برای موبایل و دسکتاپ',
  '🔒 امنیت پیشرفته، SSL رایگان و بک‌آپ منظم روزانه',
  '📈 سئو حرفه‌ای و افزایش رتبه سایت در نتایج اول گوگل',
  '💼 پنل مدیریت قدرتمند و آسان برای کنترل کامل محتوا',
  '🌙 طراحی جذاب با قابلیت تغییر تم روشن و تاریک',
  '📱 ریسپانسیو کامل — سایت شما در همه دستگاه‌ها عالی دیده می‌شود',
  '🛠 پشتیبانی ۲۴/۷ و رفع سریع مشکلات فنی',
  '💡 مشاوره رایگان قبل از شروع هر پروژه و برنامه‌ریزی دقیق',
  '🚀 تحول دیجیتال کسب‌وکار شما با تیم تخصصی ورتکس',
  '🏆 سابقه بیش از ده ها پروژه موفق برای برندهای ایرانی و خارجی',
  '🌟 طراحی اختصاصی، سئو، امنیت و پشتیبانی — همه در یک جا',
];

const ScrollingText = () => {
  const repeatedMessages = [...messages, ...messages];

  return (
    <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', position: 'relative' }}>
      <Box sx={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'scroll 180s linear infinite' }}>
        {repeatedMessages.map((msg, index) => (
          <Typography key={index} component="span" variant="body1" sx={{ px: { xs: 3, md: 4 }, color: 'text.primary', fontWeight: 600, display: 'inline-block' }}>
            {msg}
          </Typography>
        ))}
      </Box>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default function SubHeader() {
  return (
    <Box sx={{ width: { xs: '90%', lg: '85%' }, mx: 'auto', position: 'absolute', top: { xs: 87, lg: 107 }, left: 0, right: 0, zIndex: 9999 }}>
      <Box sx={{ bgcolor: 'rgba(107, 78, 255, 0.18)', backdropFilter: 'blur(24px)', border: '1px solid rgba(107, 78, 255, 0.4)', borderRadius: '24px', boxShadow: '0 12px 40px rgba(107, 78, 255, 0.2)', p: { xs: 1.2, md: 1.5 }, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s ease' }}>
        <ScrollingText />
      </Box>
    </Box>
  );
}
