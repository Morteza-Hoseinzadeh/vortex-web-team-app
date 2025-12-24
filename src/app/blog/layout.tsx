import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  params?: { tag?: string };
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

  const title = rawTag ? `مقالات مرتبط با ${decodedTag} | وبلاگ ورتکس` : `وبلاگ ورتکس`;

  const description = rawTag ? `مقالات تخصصی، آموزش‌ها و مطالب کاربردی درباره ${decodedTag} در وبلاگ تیم طراحی سایت ورتکس.` : `جدیدترین مقالات تخصصی، آموزش‌ها و مطالب کاربردی حوزه تکنولوژی در وبلاگ تیم طراحی سایت ورتکس.`;

  return {
    title,
    description,
    keywords: [decodedTag, 'وبلاگ طراحی سایت', 'آموزش طراحی سایت', 'توسعه وب', 'سئو', 'UI UX', 'فرانت‌اند', 'Next.js', 'React', 'وبلاگ ورتکس'],
    metadataBase: new URL('https://vortexweb.ir'),
    alternates: {
      canonical: rawTag ? `/blog/tag/${rawTag}` : `/blog`,
    },
    openGraph: {
      title,
      description,
      url: rawTag ? `https://vortexweb.ir/blog/tag/${rawTag}` : `https://vortexweb.ir/blog`,
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
      index: true,
      follow: true,
    },
  };
}

export default function BlogTagLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
