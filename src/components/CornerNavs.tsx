import { useEffect, useState } from 'react';

import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@mui/material';
import { Moon } from 'iconsax-react';

const navItems = [
  { label: 'ABOUT' },
  { label: 'EDUCATION' },
  { label: 'WORK' },
  { label: 'BLOG' },
  { label: 'CONTACT' },
];

const socialItems = [
  { href: 'https://www.facebook.com/haotang0619/', icon: faFacebook },
  { href: 'https://www.instagram.com/hao_tang_0619/', icon: faInstagram },
  { href: 'https://github.com/haotang0619/', icon: faGithub },
  { href: 'https://www.linkedin.com/in/haotang0619/', icon: faLinkedin },
];

export default function CornerNavs() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const activeItem = navItems.findLast(
        (item) => scrollY >= document.getElementById(item.label).offsetTop - 48,
      );
      setActiveItem(activeItem?.label);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <Typography
        sx={{
          color: 'text.secondary',
          left: { sm: '36px', xs: '24px' },
          position: 'fixed',
          top: '24px',
          zIndex: 1000,
        }}
        variant="T24B"
      >{`Hi, I’m Howard`}</Typography>

      <Box
        sx={{
          alignItems: 'flex-end',
          display: 'flex',
          flexFlow: 'column',
          gap: '8px',
          position: 'fixed',
          right: { sm: '36px', xs: '24px' },
          top: '24px',
          zIndex: 1000,
        }}
      >
        {navItems.map(({ label }) => (
          <Typography
            key={label}
            onClick={() => {
              window.scrollTo({
                behavior: 'smooth',
                top: document.getElementById(label).offsetTop - 48,
              });
            }}
            sx={{ color: activeItem === label ? '#FFFFFF' : 'text.secondary', cursor: 'pointer' }}
            variant="T14M"
          >
            {label}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          bottom: '24px',
          display: 'flex',
          flexFlow: 'column',
          gap: '24px',
          left: { sm: '36px', xs: '24px' },
          position: 'fixed',
          zIndex: 1000,
        }}
      >
        {socialItems.map(({ href, icon }) => (
          <a href={href} key={href} rel="noreferrer" target="_blank">
            <IconButton sx={{ color: 'text.secondary' }}>
              <FontAwesomeIcon icon={icon} />
            </IconButton>
          </a>
        ))}
      </Box>

      <Box
        sx={{ bottom: '24px', position: 'fixed', right: { sm: '36px', xs: '24px' }, zIndex: 1000 }}
      >
        <IconButton sx={{ color: '#FFFFFF' }}>
          <Moon variant="Bold" />
        </IconButton>
      </Box>
    </>
  );
}
