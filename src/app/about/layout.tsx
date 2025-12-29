import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره تیم طراحی سایت ورتکس',
  description: 'با تیم طراحی سایت ورتکس آشنا شوید؛ تیمی متخصص در طراحی سایت شرکتی و فروشگاهی با تمرکز بر کیفیت، سرعت، سئو و تجربه کاربری.',

  // ❌ meta keywords عمداً حذف شده

  authors: [{ name: 'تیم طراحی سایت ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی سایت ورتکس',
  publisher: 'تیم طراحی سایت ورتکس',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: 'https://vortexweb.ir/about',
  },

  openGraph: {
    title: 'درباره تیم طراحی سایت ورتکس',
    description: 'معرفی تیم طراحی سایت ورتکس؛ متخصص در طراحی سایت حرفه‌ای، شرکتی و فروشگاهی با استانداردهای روز دنیا.',
    url: 'https://vortexweb.ir/about',
    siteName: 'تیم طراحی سایت ورتکس',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'درباره تیم طراحی سایت ورتکس',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'درباره تیم طراحی سایت ورتکس',
    description: 'آشنایی با تیم طراحی سایت ورتکس؛ متخصص در طراحی سایت حرفه‌ای و توسعه وب مدرن.',
    images: ['/assets/logo/vortex-logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
