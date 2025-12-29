import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تعرفه طراحی سایت | قیمت طراحی سایت حرفه‌ای - ورتکس',

  description: 'تعرفه و قیمت طراحی سایت حرفه‌ای، شرکتی و فروشگاهی توسط تیم طراحی سایت ورتکس. مشاهده پکیج‌ها، مقایسه قیمت‌ها و انتخاب بهترین گزینه متناسب با نیاز شما.',

  keywords: ['قیمت طراحی سایت', 'تعرفه طراحی سایت', 'هزینه طراحی سایت', 'پکیج طراحی سایت', 'طراحی سایت حرفه‌ای', 'طراحی سایت شرکتی', 'طراحی سایت فروشگاهی', 'طراحی سایت اختصاصی', 'قیمت طراحی سایت با React', 'قیمت طراحی سایت با Next.js', 'طراحی سایت واکنش‌گرا', 'سفارش طراحی سایت'],

  authors: [{ name: 'تیم طراحی سایت ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی سایت ورتکس',
  publisher: 'تیم طراحی سایت ورتکس',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: '/pricing',
  },

  openGraph: {
    title: 'تعرفه طراحی سایت | قیمت طراحی سایت حرفه‌ای - ورتکس',
    description: 'تعرفه و قیمت طراحی سایت حرفه‌ای، شرکتی و فروشگاهی توسط تیم طراحی سایت ورتکس. پکیج‌های متنوع با کیفیت بالا.',
    url: 'https://vortexweb.ir/pricing',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'تعرفه و قیمت طراحی سایت تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'تعرفه طراحی سایت | قیمت طراحی سایت حرفه‌ای - ورتکس',
    description: 'مشاهده تعرفه و قیمت طراحی سایت حرفه‌ای، شرکتی و فروشگاهی توسط تیم طراحی سایت ورتکس.',
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
