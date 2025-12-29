import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  params: { tag?: string };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const myPromise = new Promise<string>((resolve) => {
    setInterval(() => {
      resolve(params);
    }, 1000);
  });

  const result: any = await myPromise;

  const rawTag = result?.tags;

  const decodedTag = rawTag ? decodeURIComponent(rawTag).replaceAll('-', ' ') : 'تکنولوژی';

  const title = rawTag ? `مقالات ${decodedTag}` : 'وبلاگ طراحی سایت و تکنولوژی';

  const description = rawTag ? `مقالات تخصصی و آموزش‌های کاربردی درباره ${decodedTag}. بررسی تجربه‌ها و نکات عملی تیم طراحی سایت ورتکس.` : 'جدیدترین مقالات طراحی سایت، سئو، برنامه‌نویسی و تکنولوژی توسط تیم طراحی سایت ورتکس.';

  const canonicalUrl = rawTag ? `https://vortexweb.ir/blog/tag/${rawTag}` : `https://vortexweb.ir/blog`;

  return {
    title,
    description,

    metadataBase: new URL('https://vortexweb.ir'),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'تیم طراحی سایت ورتکس',
      locale: 'fa_IR',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },

    robots: {
      index: !!rawTag, // فقط صفحات tag ایندکس بشن
      follow: true,
    },
  };
}

export default function BlogTagLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
