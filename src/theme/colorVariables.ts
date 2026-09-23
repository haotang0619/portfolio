export const COLOR_SCHEME_STORAGE_KEY = 'color-scheme';

// Color tokens per color scheme. Dark is the default (`:root`); light applies when
// `<html data-theme="light">` is set (see `_document.tsx` and the toggle in `CornerNavs`).
const colorTokens = {
  bg: { dark: '#0D0D0D', light: '#F7F5F2' },
  border: { dark: '#FFFFFF14', light: '#0D0D0D14' },
  borderStrong: { dark: '#FFFFFF26', light: '#0D0D0D26' },
  surface: { dark: '#FFFFFF0A', light: '#FFFFFF' },
  surfaceRaised: { dark: '#FFFFFF14', light: '#FFFFFF' },
  text: { dark: '#FFFFFF', light: '#0D0D0D' },
  textBody: { dark: '#FFFFFFD9', light: '#0D0D0DD9' },
  textFaint: { dark: '#FFFFFF66', light: '#0D0D0D66' },
  textMuted: { dark: '#FFFFFFCC', light: '#0D0D0DCC' },
  textSecondary: { dark: '#FFFFFFA6', light: '#0D0D0DA6' },
};

type ColorToken = keyof typeof colorTokens;

const toVarName = (token: string) =>
  `--color-${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;

const toVariables = (scheme: 'dark' | 'light') =>
  Object.fromEntries(
    Object.entries(colorTokens).map(([token, values]) => [toVarName(token), values[scheme]]),
  );

export const darkColorVariables = toVariables('dark');
export const lightColorVariables = toVariables('light');

// `var(--color-*)` references for use in `sx` props and the MUI theme.
export const colors = Object.fromEntries(
  Object.keys(colorTokens).map((token) => [token, `var(${toVarName(token)})`]),
) as Record<ColorToken, string>;
