import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/theme';
import { GlobalCSS } from '@/theme/GlobalCSS';
import '@/theme/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Howard Tang - Portfolio</title>
        <link href="/imgs/howard.png" rel="icon" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
