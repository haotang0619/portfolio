import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/theme';
import { GlobalCSS } from '@/theme/GlobalCSS';
import '@/theme/globals.css';
import { LOCALES, Localized, useLocale } from '@/utils/i18n';
import { SOCIALS } from '@/utils/socials';

const siteUrl = 'https://www.hao-tang.com';
const localeUrl = (locale: string) => (locale === LOCALES[0] ? siteUrl : `${siteUrl}/${locale}`);
const titles: Localized<string> = {
  en: 'Howard Tang - Full-Stack Engineer',
  'zh-TW': '唐浩 Howard Tang - 全端工程師',
};
const descriptions: Localized<string> = {
  en: 'Full-stack engineer with startup founding experience, hands-on across system architecture, frontend and backend development, and AI system design.',
  'zh-TW': '具新創共同創辦經驗的全端工程師，實際參與系統架構、前後端開發與 AI 系統設計。',
};
const imageUrl = `${siteUrl}/imgs/howard.png`;

// schema.org Person data for search engines; keep the job in sync with Work.
const personJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  alternateName: ['唐浩', 'Hao Tang'],
  image: imageUrl,
  jobTitle: 'Senior DevOps Engineer',
  name: 'Howard Tang',
  sameAs: SOCIALS.map(({ href }) => href),
  url: siteUrl,
  worksFor: { '@type': 'Organization', name: 'TSMC' },
});

export default function App({ Component, pageProps }: AppProps) {
  const { locale, t } = useLocale();
  const title = t(titles);
  const description = t(descriptions);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/imgs/howard.png" rel="icon" />
        {LOCALES.map((alt) => (
          <link href={localeUrl(alt)} hrefLang={alt} key={alt} rel="alternate" />
        ))}
        <link href={siteUrl} hrefLang="x-default" rel="alternate" />
        <link href={localeUrl(locale)} rel="canonical" />
        <meta content={description} name="description" />
        <meta content="Howard Tang" name="author" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="Howard Tang" property="og:site_name" />
        <meta content={localeUrl(locale)} property="og:url" />
        <meta content={locale.replace('-', '_')} property="og:locale" />
        {LOCALES.filter((alt) => alt !== locale).map((alt) => (
          <meta content={alt.replace('-', '_')} key={alt} property="og:locale:alternate" />
        ))}
        <meta content={imageUrl} property="og:image" />
        <meta content="512" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta content="Howard Tang" property="og:image:alt" />
        <meta content="summary" name="twitter:card" />
        <script dangerouslySetInnerHTML={{ __html: personJsonLd }} type="application/ld+json" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
