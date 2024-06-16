import { Box, Grid, Typography } from '@mui/material';
import { ArrowRight2 } from 'iconsax-react';

const contactItems = [
  { href: 'https://www.facebook.com/haotang0619/', text: 'Facebook' },
  { href: 'https://www.instagram.com/hao_tang_0619/', text: 'Instagram' },
  { href: 'https://github.com/haotang0619/', text: 'Github' },
  { href: 'https://www.linkedin.com/in/haotang0619/', text: 'Linkedin' },
];

export default function Contact() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        padding: '72px 24px 36px',
      }}
    >
      <Box sx={{ maxWidth: '850px', width: '100%' }}>
        <Typography
          id="CONTACT"
          sx={{ color: 'text.secondary', marginBottom: '32px', width: '100%' }}
          variant="T14B"
        >
          CONTACT
        </Typography>
      </Box>

      <Grid
        container
        spacing={6}
        sx={{
          left: '-48px',
          margin: 'auto',
          maxWidth: '850px',
          position: 'relative',
          top: '-36px',
          width: '100%',
        }}
      >
        <Grid item md={8} xs={12}>
          {contactItems.map(({ href, text }) => (
            <Box
              key={text}
              sx={{
                '& > svg': { color: 'primary.main', transform: 'rotate(-45deg)' },
                alignItems: 'center',
                display: 'flex',
                gap: '8px',
                marginBottom: '24px',
              }}
            >
              <ArrowRight2 variant="Bold" />
              <Typography
                onClick={() => window.open(href, '_blank', 'noopener')}
                sx={{
                  '&:hover': { textDecoration: 'underline' },
                  color: 'text.secondary',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
                variant="T24B"
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Grid>

        <Grid item md={4} xs={12}>
          <Box sx={{ marginBottom: '60px' }}>
            <Typography sx={{ color: 'text.secondary', marginBottom: '4px' }} variant="T16M">
              Email
            </Typography>
            <Typography sx={{ '& > a': { color: '#FFFFFF40' } }} variant="T14M">
              <a href="mailto:haotang.tw@gmail.com">haotang.tw@gmail.com</a>
            </Typography>
          </Box>

          <Box sx={{ marginBottom: '60px' }}>
            <Typography sx={{ color: 'text.secondary', marginBottom: '4px' }} variant="T16M">
              Phone
            </Typography>
            <Typography sx={{ '& > a': { color: '#FFFFFF40' } }} variant="T14M">
              <a href="tel:+886953573473">+886 953-573-473</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
