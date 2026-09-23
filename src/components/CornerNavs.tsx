import Link from 'next/link';
import { useEffect, useState } from 'react';

import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { Add, HambergerMenu, Moon, Sun1 } from 'iconsax-react';

import { COLOR_SCHEME_STORAGE_KEY, colors } from '@/theme/colorVariables';
import { useLocale } from '@/utils/i18n';
import { MOBILE_HEADER_HEIGHT, scrollToSection } from '@/utils/scrollToSection';

// Font Awesome has no LeetCode brand icon, so this wraps the Simple Icons (CC0) glyph in its format.
const faLeetcode: IconDefinition = {
  icon: [
    24,
    24,
    [],
    '',
    'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',
  ],
  // Custom glyph outside Font Awesome's `IconName` union.
  iconName: 'leetcode' as IconName,
  prefix: 'fab',
};

const socialItems = [
  { href: 'https://www.facebook.com/haotang0619/', icon: faFacebook },
  { href: 'https://www.instagram.com/hao_tang_0619/', icon: faInstagram },
  { href: 'https://github.com/haotang0619/', icon: faGithub },
  { href: 'https://leetcode.com/u/ht619/', icon: faLeetcode },
  { href: 'https://www.linkedin.com/in/haotang0619/', icon: faLinkedin },
];

const iconButtonSx = {
  '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
  color: 'text.secondary',
  transition: 'color 0.2s',
};

// Desktop (md+): name top-left, nav top-right, socials bottom-left, language and scheme toggles
// bottom-right. Below md: a fixed top bar with the name, both toggles, and a menu that holds nav
// and socials.
export default function CornerNavs({
  activeId,
  items,
}: {
  activeId?: string;
  items: { id: string; label: string }[];
}) {
  const { locale, t } = useLocale();
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scrolling waits until the menu has closed, since the open drawer locks page scroll.
  const [pendingId, setPendingId] = useState<string>(null);

  // The initial scheme is applied to <html> before paint by the script in `_document.tsx`.
  useEffect(() => setIsLight(document.documentElement.dataset.theme === 'light'), []);

  const toggleColorScheme = () => {
    const nextIsLight = !isLight;
    if (nextIsLight) document.documentElement.dataset.theme = 'light';
    else delete document.documentElement.dataset.theme;
    setIsLight(nextIsLight);
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, nextIsLight ? 'light' : 'dark');
  };

  const schemeToggle = (
    <IconButton
      aria-label={
        isLight
          ? t({ en: 'Switch to dark mode', 'zh-TW': '切換至深色模式' })
          : t({ en: 'Switch to light mode', 'zh-TW': '切換至淺色模式' })
      }
      onClick={toggleColorScheme}
      sx={iconButtonSx}
    >
      {isLight ? <Moon size={24} variant="Bold" /> : <Sun1 size={24} variant="Bold" />}
    </IconButton>
  );

  // Page content differs per locale, so keep the current scroll position rather than jumping to top.
  const localeToggle = (
    <IconButton
      aria-label={t({ en: '切換至繁體中文', 'zh-TW': 'Switch to English' })}
      component={Link}
      href="/"
      locale={locale === 'en' ? 'zh-TW' : 'en'}
      scroll={false}
      sx={{ ...iconButtonSx, height: '40px', width: '40px' }}
    >
      <Typography sx={{ color: 'inherit' }} variant="T16B">
        {t({ en: '中', 'zh-TW': 'EN' })}
      </Typography>
    </IconButton>
  );

  const socialLinks = socialItems.map(({ href, icon }) => (
    <a href={href} key={href} rel="noreferrer" target="_blank">
      <IconButton sx={iconButtonSx}>
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </a>
  ));

  const name = (
    <Typography
      sx={{ color: 'text.secondary', fontSize: { md: '24px', xs: '20px' } }}
      variant="T24B"
    >
      {t({ en: 'Hi, I’m Howard', 'zh-TW': '嗨，我是唐浩' })}
    </Typography>
  );

  return (
    <>
      {/* Desktop */}
      <Box
        sx={{
          display: { md: 'block', xs: 'none' },
          left: '36px',
          position: 'fixed',
          top: '24px',
          zIndex: 1000,
        }}
      >
        {name}
      </Box>

      <Box
        component="nav"
        sx={{
          alignItems: 'flex-end',
          display: { md: 'flex', xs: 'none' },
          flexFlow: 'column',
          gap: '8px',
          position: 'fixed',
          right: '36px',
          top: '24px',
          zIndex: 1000,
        }}
      >
        {items.map(({ id, label }) => (
          <Typography
            key={id}
            onClick={() => scrollToSection(id)}
            sx={{
              '&:hover': { color: colors.text },
              color: activeId === id ? colors.text : colors.textFaint,
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            variant="T14M"
          >
            {label}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          bottom: '24px',
          display: { md: 'flex', xs: 'none' },
          flexFlow: 'column',
          gap: '24px',
          left: '36px',
          position: 'fixed',
          zIndex: 1000,
        }}
      >
        {socialLinks}
      </Box>

      <Box
        sx={{
          bottom: '24px',
          display: { md: 'flex', xs: 'none' },
          flexFlow: 'column',
          gap: '8px',
          position: 'fixed',
          right: '36px',
          zIndex: 1000,
        }}
      >
        {localeToggle}
        {schemeToggle}
      </Box>

      {/* Mobile */}
      <Box
        component="header"
        sx={{
          alignItems: 'center',
          backdropFilter: 'blur(12px)',
          bgcolor: colors.bgTranslucent,
          borderBottom: `1px solid ${colors.border}`,
          display: { md: 'none', xs: 'flex' },
          height: `${MOBILE_HEADER_HEIGHT}px`,
          justifyContent: 'space-between',
          left: 0,
          padding: '0 12px 0 24px',
          position: 'fixed',
          right: 0,
          top: 0,
          zIndex: 1100,
        }}
      >
        {name}
        <Box sx={{ display: 'flex' }}>
          {localeToggle}
          {schemeToggle}
          <IconButton
            aria-label={t({ en: 'Open menu', 'zh-TW': '開啟選單' })}
            onClick={() => setIsMenuOpen(true)}
            sx={iconButtonSx}
          >
            <HambergerMenu size={24} />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        PaperProps={{ sx: { backgroundImage: 'none', bgcolor: colors.bg, height: '100%' } }}
        SlideProps={{
          onExited: () => {
            if (pendingId) scrollToSection(pendingId);
            setPendingId(null);
          },
        }}
        anchor="top"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        sx={{ display: { md: 'none' } }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: `${MOBILE_HEADER_HEIGHT}px`,
            justifyContent: 'space-between',
            padding: '0 12px 0 24px',
          }}
        >
          {name}
          <IconButton
            aria-label={t({ en: 'Close menu', 'zh-TW': '關閉選單' })}
            onClick={() => setIsMenuOpen(false)}
            sx={iconButtonSx}
          >
            <Add size={28} style={{ transform: 'rotate(45deg)' }} />
          </IconButton>
        </Box>

        <Box component="nav" sx={{ display: 'flex', flexFlow: 'column', padding: '24px' }}>
          {items.map(({ id, label }) => (
            <Typography
              key={id}
              onClick={() => {
                setPendingId(id);
                setIsMenuOpen(false);
              }}
              sx={{
                color: activeId === id ? colors.text : colors.textSecondary,
                cursor: 'pointer',
                letterSpacing: '2px',
                padding: '12px 0',
              }}
              variant="T24B"
            >
              {label}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: '8px', marginTop: 'auto', padding: '24px 12px' }}>
          {socialLinks}
        </Box>
      </Drawer>
    </>
  );
}
