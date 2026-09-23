export const textHierarchy = [
  'T88B',
  'T88S',
  'T88M',
  'T88R',

  'T64B',
  'T64S',
  'T64M',
  'T64R',

  'T32B',
  'T32S',
  'T32M',
  'T32R',

  'T24B',
  'T24S',
  'T24M',
  'T24R',

  'T16B',
  'T16S',
  'T16M',
  'T16R',

  'T14B',
  'T14S',
  'T14M',
  'T14R',
] as const;

export type TextHierarchy = Record<(typeof textHierarchy)[number], true>;

export type TextSize = 14 | 16 | 24 | 32 | 64 | 88;
const sizeMapping: Record<
  TextSize,
  { fontFamily?: string; fontSize: number; lineHeight: string; textTransform?: string }
> = {
  14: { fontSize: 14, lineHeight: '20px' },
  16: { fontSize: 16, lineHeight: '24px' },
  24: { fontSize: 24, lineHeight: '32px' },
  32: { fontSize: 32, lineHeight: '52px' },
  64: { fontSize: 64, lineHeight: '82px' },
  88: { fontSize: 88, lineHeight: '114px' },
};
export type TextWeight = 'B' | 'M' | 'R' | 'S';

// Poppins has no CJK glyphs, so Chinese text falls back to Noto Sans TC (both loaded in globals.css).
export const FONT_FAMILY = "Poppins, 'Noto Sans TC', sans-serif";

export const textStyle = (size: TextSize, weight = 'R' as TextWeight) => ({
  fontFamily: FONT_FAMILY,
  fontStyle: 'normal',
  fontWeight: `var(--weight-${weight})`,
  ...sizeMapping[size],
});
