import { useRouter } from 'next/router';

// Must match `i18n.locales` in next.config.mjs; the first entry is the default locale.
export const LOCALES = ['en', 'zh-TW'] as const;
export type Locale = (typeof LOCALES)[number];

// A value with one variant per locale, e.g. `{ en: 'Work', 'zh-TW': '經歷' }`.
export type Localized<T> = Record<Locale, T>;

export const useLocale = () => {
  const locale = useRouter().locale as Locale;
  return { locale, t: <T>(value: Localized<T>) => value[locale] };
};
