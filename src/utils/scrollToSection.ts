import { theme } from '@/theme';

// Height of the fixed top bar shown below the `md` breakpoint (see `CornerNavs`).
export const MOBILE_HEADER_HEIGHT = 64;

// Smooth-scrolls so the section heading with this id sits just below the top edge (or the mobile top bar).
export const scrollToSection = (id: string) => {
  const isDesktop = window.matchMedia(`(min-width: ${theme.breakpoints.values.md}px)`).matches;
  window.scrollTo({
    behavior: 'smooth',
    top: document.getElementById(id).offsetTop - (isDesktop ? 48 : MOBILE_HEADER_HEIGHT + 24),
  });
};
