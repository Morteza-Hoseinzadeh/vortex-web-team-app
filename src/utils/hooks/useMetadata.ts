// utils/hooks/useMetadata.ts
import { useMemo } from 'react';

interface UseMetadataProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  keywords?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

const useMetadata = ({
  title = 'تیم طراحی سایت ورتکس | طراحی سایت حرفه‌ای و اختصاصی',
  description = 'تیم طراحی سایت ورتکس ارائه‌دهنده خدمات طراحی سایت حرفه‌ای، طراحی سایت شرکتی، فروشگاهی و سئو محور با بالاترین کیفیت.',
  imageUrl = '/assets/logo/vortex-logo.png',
  url = 'https://vortexweb.ir',
  keywords = 'تیم طراحی سایت, طراحی سایت, شرکت طراحی سایت, طراحی سایت حرفه‌ای, طراحی سایت شرکتی, طراحی سایت فروشگاهی, web design team, website design services, طراحی وب, تیم طراحی وب, vortex web team',
  type = 'website',
  author = 'Vortex Web Team',
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonicalUrl,
}: UseMetadataProps) => {
  const metadata = useMemo(() => {
    const finalUrl = canonicalUrl || url;
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${url}${imageUrl}`;

    const finalTitle = title.includes('ورتکس') ? title : `${title} | تیم طراحی سایت ورتکس`;

    return {
      title: finalTitle,
      description: description.trim(),
      imageUrl: fullImageUrl,
      url: finalUrl,
      keywords,
      type,
      author,
      publishedTime: publishedTime || new Date().toISOString().split('T')[0],
      modifiedTime: modifiedTime || new Date().toISOString().split('T')[0],
      noIndex,
      twitterHandle: '@vortexweb.team',
      siteName: 'تیم طراحی سایت ورتکس',
      locale: 'fa_IR',
    };
  }, [title, description, imageUrl, url, keywords, type, author, publishedTime, modifiedTime, noIndex, canonicalUrl]);

  return metadata;
};

export default useMetadata;
