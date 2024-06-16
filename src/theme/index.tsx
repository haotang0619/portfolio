import { createTheme } from '@mui/material/styles';

import { TextSize, TextWeight, textHierarchy, textStyle } from './util';

// Create a theme instance.
export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: textHierarchy.reduce((acc, key) => ({ ...acc, [key]: 'p' }), {}),
      },
      styleOverrides: {
        gutterBottom: { marginBottom: '16px' },
        root: { color: '#FFFFFF' },
        ...textHierarchy.reduce((acc, key) => {
          const size = Number(key.slice(1, 3)) as TextSize;
          const weight = key[3] as TextWeight;
          return { ...acc, [key]: textStyle(size, weight) };
        }, {}),
      },
    },
  },
  palette: {
    primary: { main: '#EB5939' },
    text: { primary: '#FFFFFF', secondary: '#FFFFFF73' },
  },
  typography: { fontFamily: 'Poppins' }, // This changes all MUI components
});
