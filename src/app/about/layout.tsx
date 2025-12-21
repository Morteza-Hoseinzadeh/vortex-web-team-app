import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما - تیم طراحی سایت ورتکس',
  description: 'با تیم طراحی سایت ورتکس آشنا شوید. ما یک تیم متخصص در طراحی سایت، رابط کاربری (UI)، تجربه کاربری (UX) و توسعه وب مدرن هستیم.',

  keywords: ['درباره ما', 'تیم طراحی سایت ورتکس', 'معرفی تیم طراحی وب', 'تیم طراحی وب', 'طراحی سایت حرفه‌ای', 'طراحی رابط کاربری', 'طراحی تجربه کاربری', 'UI', 'UX', 'توسعه وب', 'Frontend', 'Backend', 'طراحی سایت اختصاصی', 'طراحی سایت مدرن', 'طراحی سایت با React', 'طراحی سایت با Next.js', 'تیم برنامه‌نویسی وب', 'خدمات طراحی سایت', 'تیم طراحی دیجیتال'],

  authors: [{ name: 'تیم طراحی ورتکس', url: 'https://vortexweb.ir' }],
  creator: 'تیم طراحی ورتکس',
  publisher: 'تیم طراحی ورتکس',

  metadataBase: new URL('https://vortexweb.ir'),

  alternates: {
    canonical: '/about',
  },

  openGraph: {
    title: 'درباره ما - تیم طراحی سایت ورتکس',
    description: 'با تیم طراحی سایت ورتکس آشنا شوید؛ متخصص در طراحی سایت، UI/UX و توسعه وب حرفه‌ای.',
    url: 'https://vortexweb.ir/about',
    siteName: 'تیم طراحی سایت ورتکس',
    images: [
      {
        url: '/assets/logo/vortex-logo.png',
        width: 1200,
        height: 630,
        alt: 'درباره تیم طراحی سایت ورتکس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'درباره ما - تیم طراحی سایت ورتکس',
    description: 'معرفی تیم طراحی سایت ورتکس؛ متخصص در طراحی وب، UI/UX و توسعه وب مدرن.',
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
