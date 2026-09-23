import { createTheme } from '@mui/material/styles';

import { colors } from './colorVariables';
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
        root: { color: colors.text },
        ...textHierarchy.reduce((acc, key) => {
          const size = Number(key.slice(1, 3)) as TextSize;
          const weight = key[3] as TextWeight;
          return { ...acc, [key]: textStyle(size, weight) };
        }, {}),
      },
    },
  },
  palette: {
    background: { default: colors.bg },
    primary: { main: '#EB5939' },
    text: { primary: colors.text, secondary: colors.textSecondary },
  },
  typography: { fontFamily: 'Poppins' }, // This changes all MUI components
});
