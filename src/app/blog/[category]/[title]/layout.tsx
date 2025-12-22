import { ReactNode } from 'react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000);
  });

  const result: any = await myPromise;

  const readableTitle = decodeURIComponent(result?.title).replace(/-/g, ' ');
  const readableCategory = decodeURIComponent(result?.category).replace(/-/g, ' ');

  const pageTitle = `${readableTitle} | بلاگ تیم طراحی سایت ورتکس`;
  const pageDescription = `مقاله «${readableTitle}» در دسته‌بندی ${readableCategory}. آموزش‌ها و نکات تخصصی طراحی سایت، سئو و توسعه وب توسط تیم طراحی سایت ورتکس.`;

  const url = `https://vortexweb.ir/blog/${readableTitle}/${readableCategory}`;

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
          url: '/assets/logo/vortex-logo.png',
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
      images: ['/assets/logo/vortex-logo.png'],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
