import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/theme';
import { GlobalCSS } from '@/theme/GlobalCSS';
import '@/theme/globals.css';

const siteUrl = 'https://www.hao-tang.com';
const description =
  'Full-stack engineer with startup founding experience, hands-on across architecture, backend implementation, and AI system design.';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Howard Tang - Portfolio</title>
        <link href="/imgs/howard.png" rel="icon" />
        <meta content={description} name="description" />
        <meta content="Howard Tang - Portfolio" property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={siteUrl} property="og:url" />
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
