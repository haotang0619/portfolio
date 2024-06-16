import { TextHierarchy } from './util';

declare module '@mui/material/Typography' {
  interface TypographyClasses extends TextHierarchy {}

  interface TypographyPropsVariantOverrides extends TextHierarchy {}
}
