import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نمونه کارها - تیم طراحی سایت ورتکس',
  description: 'در این صفحه می‌توانید نمونه کارهای تیم طراحی سایت ورتکس را مشاهده کنید. طراحی وب، رابط کاربری و تجربه کاربری حرفه‌ای.',
  keywords: [
    'طراحی سایت',
    'نمونه کار طراحی سایت',
    'تیم طراحی وب',
    'طراحی وب حرفه ای',
    'UI',
    'UX',
    'رابط کاربری',
    'تجربه کاربری',
    'Frontend',
    'Backend',
    'طراحی رابط کاربری',
    'طراحی تجربه کاربری',
    'سایت فروشگاهی',
    'سایت خدماتی',
    'سایت شخصی',
    'سایت شرکتی',
    'سئو سایت',
    'بهینه سازی سایت',
    'طراحی سایت وردپرس',
    'طراحی سایت واکنش‌گرا',
    'طراحی سایت ریسپانسیو',
    'طراحی اپلیکیشن وب',
    'توسعه وب',
    'نمونه پروژه وب',
    'نمونه کار حرفه ای',
    'پورتفولیو طراحی سایت',
    'طراحی لوگو',
    'طراحی گرافیک',
    'UI/UX تیمی',
    'خدمات طراحی وب',
    'طراحی سایت اختصاصی',
    'تیم طراحی ورتکس',
    'طراحی سایت وردپرسی',
    'طراحی سایت با React',
    'طراحی سایت با Next.js',
  ],
  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',
  metadataBase: new URL('https://vortexweb.ir'),
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'نمونه کارها - تیم طراحی سایت ورتکس',
    description: 'در این صفحه می‌توانید نمونه کارهای تیم طراحی سایت ورتکس را مشاهده کنید. طراحی وب، رابط کاربری و تجربه کاربری حرفه‌ای.',
    url: 'https://vortexweb.ir/portfolio',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/portfolio-og-image.png',
        width: 1200,
        height: 630,
        alt: 'نمونه کارهای تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نمونه کارها - تیم طراحی سایت ورتکس',
    description: 'در این صفحه می‌توانید نمونه کارهای تیم طراحی سایت ورتکس را مشاهده کنید.',
    images: ['/assets/portfolio-og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
