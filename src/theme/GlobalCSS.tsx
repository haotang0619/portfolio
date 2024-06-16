import { CssBaseline, GlobalStyles } from '@mui/material';

import { fontVariables } from './fontVariables';

export const GlobalCSS = () => (
  <>
    <CssBaseline />
    <GlobalStyles styles={{ ':root': fontVariables }} />
  </>
);
