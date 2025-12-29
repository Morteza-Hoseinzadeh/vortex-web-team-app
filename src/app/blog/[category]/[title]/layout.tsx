import { ReactNode } from 'react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const myPromise: any = new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000);
  });

  const result: any = await myPromise;
  const { title, category } = result;

  if (result?.length) clearInterval(await myPromise);

  // ساخت نسخه قابل خواندن برای Title و Description
  const readableTitle = decodeURIComponent(title).replace(/-/g, ' ');
  const readableCategory = decodeURIComponent(category).replace(/-/g, ' ');

  // Title و Description مناسب SEO و CTR
  const pageTitle = `${readableTitle} | بلاگ طراحی سایت ورتکس`;
  const pageDescription = `مطالعه مقاله "${readableTitle}" در دسته‌بندی ${readableCategory}. آموزش‌ها و نکات عملی طراحی سایت، سئو و توسعه وب توسط تیم حرفه‌ای ورتکس.`;

  // URL canonical با title و category
  const url = `https://vortexweb.ir/blog/${category}/${title}`;

  return {
    title: pageTitle,
    description: pageDescription,

    metadataBase: new URL('https://vortexweb.ir'),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: 'تیم طراحی سایت ورتکس',
      locale: 'fa_IR',
      type: 'article',
      images: [
        {
          url: '/assets/logo/vortex-logo.png', // اگر مقاله تصویر اختصاصی دارد، URL آن را اینجا قرار دهید
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/assets/logo/vortex-logo.png'], // می‌تواند تصویر مقاله باشد
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// Layout صفحه بلاگ برای App Router
export default function BlogtitleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
