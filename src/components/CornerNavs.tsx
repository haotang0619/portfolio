import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@mui/material';
import { Moon } from 'iconsax-react';

const socialItems = [
  { href: 'https://www.facebook.com/haotang0619/', icon: faFacebook },
  { href: 'https://www.instagram.com/hao_tang_0619/', icon: faInstagram },
  { href: 'https://github.com/haotang0619/', icon: faGithub },
  { href: 'https://www.linkedin.com/in/haotang0619/', icon: faLinkedin },
];

export default function CornerNavs({
  activeLabel,
  labels,
}: {
  activeLabel?: string;
  labels: string[];
}) {
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
        {labels.map((label) => (
          <Typography
            key={label}
            onClick={() => {
              window.scrollTo({
                behavior: 'smooth',
                top: document.getElementById(label).offsetTop - 48,
              });
            }}
            sx={{
              '&:hover': { color: '#FFFFFF' },
              color: activeLabel === label ? '#FFFFFF' : '#FFFFFF66',
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
            <IconButton
              sx={{
                '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
                color: 'text.secondary',
                transition: 'color 0.2s',
              }}
            >
              <FontAwesomeIcon icon={icon} />
            </IconButton>
          </a>
        ))}
      </Box>

      <Box
        sx={{ bottom: '24px', position: 'fixed', right: { sm: '36px', xs: '24px' }, zIndex: 1000 }}
      >
        {/* FIXME: Dark mode toggle (not yet implemented) */}
        <IconButton sx={{ color: '#FFFFFF', display: 'none' }}>
          <Moon variant="Bold" />
        </IconButton>
      </Box>
    </>
  );
}
