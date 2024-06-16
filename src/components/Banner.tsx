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
      <Typography sx={{ textTransform: 'uppercase' }} variant="T88B">{`Hi, I’m Howard`}</Typography>
      <Typography sx={{ color: 'text.secondary', textTransform: 'uppercase' }} variant="T32B">
        Chief Technology Officer
      </Typography>

      <Box
        sx={{
          '& > svg': { transform: 'scaleY(0.8)' },
          border: '1px solid #FFFFFF',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          padding: '20px',
        }}
      >
        <ArrowDown size={78} />
      </Box>
    </Box>
  );
}
