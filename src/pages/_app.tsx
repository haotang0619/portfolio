import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/theme';
import { GlobalCSS } from '@/theme/GlobalCSS';
import '@/theme/globals.css';
import { LOCALES, Localized, useLocale } from '@/utils/i18n';

const siteUrl = 'https://www.hao-tang.com';
const localeUrl = (locale: string) => (locale === LOCALES[0] ? siteUrl : `${siteUrl}/${locale}`);
const titles: Localized<string> = {
  en: 'Howard Tang - Portfolio',
  'zh-TW': 'Howard Tang - 個人作品集',
};
const descriptions: Localized<string> = {
  en: 'Full-stack engineer with startup founding experience, hands-on across architecture, backend implementation, and AI system design.',
  'zh-TW': '具新創共同創辦經驗的全端工程師，實際參與系統架構、後端開發與 AI 系統設計。',
};

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
        <meta content={description} name="description" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={localeUrl(locale)} property="og:url" />
        <meta content={locale.replace('-', '_')} property="og:locale" />
        <meta content={`${siteUrl}/imgs/howard.png`} property="og:image" />
        <meta content="summary" name="twitter:card" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
