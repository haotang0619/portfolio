import { Head, Html, Main, NextScript } from 'next/document';

import { COLOR_SCHEME_STORAGE_KEY } from '@/theme/colorVariables';

// Runs before first paint so a saved light preference doesn't flash dark first. Dark is the default.
const applySavedColorScheme = `if (localStorage.getItem('${COLOR_SCHEME_STORAGE_KEY}') === 'light') document.documentElement.dataset.theme = 'light';`;

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: applySavedColorScheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
