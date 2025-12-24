'use client';

import { Box, Typography } from '@mui/material';

const messages = [
  '🚀 تیم طراحی سایت ورتکس — خلاقیت، سرعت و کیفیت در یکجا',
  '🎨 طراحی وب مدرن و واکنش‌گرا برای همه دستگاه‌ها',
  '⚡ سایت‌های بهینه‌شده با سرعت لود فوق‌العاده بالا',
  '🔒 امنیت کامل با SSL، بک‌آپ روزانه و حفاظت پیشرفته',
  '📈 سئو حرفه‌ای برای رتبه‌گیری بهتر در گوگل',
  '💼 پنل مدیریت اختصاصی و آسان برای ویرایش محتوا',
  '🌙 طراحی زیبا با پشتیبانی از حالت تاریک و روشن',
  '📱 تجربه کاربری روان و جذاب در موبایل و دسکتاپ',
  '🛠 پشتیبانی 24/7 و رفع مشکلات در کوتاه‌ترین زمان',
  '💡 مشاوره رایگان قبل از شروع هر پروژه',
  '✨ تبدیل ایده شما به یک وب‌سایت حرفه‌ای و منحصربه‌فرد',
  '🏆 بیش از ۱۰۰ پروژه موفق برای مشتریان ایرانی و خارجی',
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
