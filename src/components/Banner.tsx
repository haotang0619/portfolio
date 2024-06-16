import { Box, Typography } from '@mui/material';
import { ArrowDown } from 'iconsax-react';

export default function Banner() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        gap: '40px',
        padding: '72px 24px',
      }}
    >
      <img alt="Howard" src="/imgs/howard.png" width="280px" />
      <Typography
        sx={{
          fontSize: { sm: '64px', xs: '48px' },
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
        variant="T64B"
      >{`Hi, I’m Howard`}</Typography>
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: { sm: '32px', xs: '24px' },
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
        variant="T32B"
      >
        Chief Technology Officer
      </Typography>

      <Box
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: document.getElementById('ABOUT').offsetTop - 48,
          })
        }
        sx={{
          '& > svg': { transform: 'scaleY(0.8)' },
          '&:hover': { opacity: 0.75 },
          border: '1px solid #FFFFFF',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          padding: '20px',
          transform: { sm: 'scale(1)', xs: 'scale(0.7)' },
        }}
      >
        <ArrowDown size={78} />
      </Box>
    </Box>
  );
}
