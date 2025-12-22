import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  params: { tag: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000);
  });

  const result: any = await myPromise;
  const decodedTag = decodeURIComponent(result.tag).replaceAll('-', ' ');

  const title = `مقالات مرتبط با ${decodedTag} | وبلاگ ورتکس`;
  const description = `مقالات تخصصی، آموزش‌ها و مطالب کاربردی درباره ${decodedTag} در وبلاگ تیم طراحی سایت ورتکس.`;

  return {
    title,
    description,
    keywords: [decodedTag, 'وبلاگ طراحی سایت', 'آموزش طراحی سایت', 'توسعه وب', 'سئو', 'UI UX', 'فرانت‌اند', 'Next.js', 'React', 'وبلاگ ورتکس'],
    metadataBase: new URL('https://vortexweb.ir'),
    alternates: {
      canonical: `/blog/tag/${result.tag}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vortexweb.ir/blog/tag/${result.tag}`,
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
