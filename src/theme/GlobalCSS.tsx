import { CssBaseline, GlobalStyles } from '@mui/material';

import { darkColorVariables, lightColorVariables } from './colorVariables';
import { fontVariables } from './fontVariables';

export const GlobalCSS = () => (
  <>
    <CssBaseline />
    <GlobalStyles
      styles={{
        ':root': { ...fontVariables, ...darkColorVariables, colorScheme: 'dark' },
        ':root[data-theme="light"]': { ...lightColorVariables, colorScheme: 'light' },
      }}
    />
  </>
);
