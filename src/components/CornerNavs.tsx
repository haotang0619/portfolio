import { useEffect, useState } from 'react';

import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { Add, HambergerMenu, Moon, Sun1 } from 'iconsax-react';

import { COLOR_SCHEME_STORAGE_KEY, colors } from '@/theme/colorVariables';
import { MOBILE_HEADER_HEIGHT, scrollToSection } from '@/utils/scrollToSection';

const socialItems = [
  { href: 'https://www.facebook.com/haotang0619/', icon: faFacebook },
  { href: 'https://www.instagram.com/hao_tang_0619/', icon: faInstagram },
  { href: 'https://github.com/haotang0619/', icon: faGithub },
  { href: 'https://www.linkedin.com/in/haotang0619/', icon: faLinkedin },
];

const iconButtonSx = {
  '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
  color: 'text.secondary',
  transition: 'color 0.2s',
};

// Desktop (md+): name top-left, nav top-right, socials bottom-left, scheme toggle bottom-right.
// Below md: a fixed top bar with the name, scheme toggle, and a menu that holds nav and socials.
export default function CornerNavs({
  activeLabel,
  labels,
}: {
  activeLabel?: string;
  labels: string[];
}) {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scrolling waits until the menu has closed, since the open drawer locks page scroll.
  const [pendingLabel, setPendingLabel] = useState<string>(null);

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
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleColorScheme}
      sx={iconButtonSx}
    >
      {isLight ? <Moon size={24} variant="Bold" /> : <Sun1 size={24} variant="Bold" />}
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
    >{`Hi, I’m Howard`}</Typography>
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
        {labels.map((label) => (
          <Typography
            key={label}
            onClick={() => scrollToSection(label)}
            sx={{
              '&:hover': { color: colors.text },
              color: activeLabel === label ? colors.text : colors.textFaint,
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
          display: { md: 'block', xs: 'none' },
          position: 'fixed',
          right: '36px',
          zIndex: 1000,
        }}
      >
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
          {schemeToggle}
          <IconButton aria-label="Open menu" onClick={() => setIsMenuOpen(true)} sx={iconButtonSx}>
            <HambergerMenu size={24} />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        PaperProps={{ sx: { backgroundImage: 'none', bgcolor: colors.bg, height: '100%' } }}
        SlideProps={{
          onExited: () => {
            if (pendingLabel) scrollToSection(pendingLabel);
            setPendingLabel(null);
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
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            sx={iconButtonSx}
          >
            <Add size={28} style={{ transform: 'rotate(45deg)' }} />
          </IconButton>
        </Box>

        <Box component="nav" sx={{ display: 'flex', flexFlow: 'column', padding: '24px' }}>
          {labels.map((label) => (
            <Typography
              key={label}
              onClick={() => {
                setPendingLabel(label);
                setIsMenuOpen(false);
              }}
              sx={{
                color: activeLabel === label ? colors.text : colors.textSecondary,
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
