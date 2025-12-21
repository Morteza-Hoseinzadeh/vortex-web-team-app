import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تعرفه‌ها - تیم طراحی سایت ورتکس',
  description: 'صفحه تعرفه‌های خدمات طراحی سایت تیم طراحی سایت ورتکس. مشاهده پکیج‌های حرفه‌ای و اختصاصی با قیمت مناسب و کیفیت بالا.',
  keywords: ['تعرفه طراحی سایت', 'قیمت طراحی سایت', 'پکیج طراحی سایت', 'طراحی سایت حرفه‌ای', 'تیم طراحی وب', 'خدمات طراحی سایت', 'سئو سایت', 'UI', 'UX', 'Frontend', 'Backend', 'سایت فروشگاهی', 'سایت شرکتی', 'سایت شخصی', 'طراحی سایت وردپرسی', 'پکیج طراحی وب', 'خدمات وب حرفه‌ای', 'تیم طراحی ورتکس', 'طراحی سایت اختصاصی', 'طراحی سایت با React', 'طراحی سایت با Next.js', 'بهینه سازی سایت', 'طراحی سایت واکنش‌گرا'],
  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',
  metadataBase: new URL('https://vortexweb.ir'),
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'تعرفه‌ها - تیم طراحی سایت ورتکس',
    description: 'صفحه تعرفه‌های خدمات طراحی سایت تیم طراحی سایت ورتکس. مشاهده پکیج‌های حرفه‌ای و اختصاصی با قیمت مناسب و کیفیت بالا.',
    url: 'https://vortexweb.ir/pricing',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'تعرفه‌های خدمات طراحی سایت تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تعرفه‌ها - تیم طراحی سایت ورتکس',
    description: 'مشاهده پکیج‌های حرفه‌ای و اختصاصی طراحی سایت توسط تیم طراحی سایت ورتکس.',
    images: ['/assets/logo/vortex-logo.png'],
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

export default function PricingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
