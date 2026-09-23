import { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

export default function Item({
  liItems,
  period,
  subtitle,
  title,
}: {
  liItems: ReactNode[];
  period: string;
  subtitle: string;
  title: string;
}) {
  return (
    <Box sx={{ borderBottom: '1px solid #FFFFFF14', padding: '32px 24px', width: '100%' }}>
      <Box
        sx={{
          columnGap: '32px',
          display: 'grid',
          gridTemplateColumns: { md: '200px 1fr', xs: '1fr' },
          margin: 'auto',
          maxWidth: '850px',
          rowGap: '8px',
        }}
      >
        <Typography sx={{ color: '#FFFFFFCC', lineHeight: '32px' }} variant="T16M">
          {period}
        </Typography>

        <Box>
          <Typography variant="T24B">{title}</Typography>

          <Typography sx={{ color: 'primary.main', marginTop: '4px' }} variant="T16B">
            {subtitle}
          </Typography>

          <Box
            component="ul"
            sx={{
              '& a': { color: 'primary.main' },
              '& b': { color: '#FFFFFF' },
              '& li + li': { marginTop: '8px' },
              color: '#FFFFFFD9',
              margin: '16px 0 0',
              paddingLeft: '20px',
            }}
          >
            {liItems.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
