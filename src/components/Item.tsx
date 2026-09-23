import { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

import { colors } from '@/theme/colorVariables';

export default function Item({
  liItems,
  logo,
  period,
  subtitle,
  title,
}: {
  liItems: ReactNode[];
  logo?: string;
  period: string;
  subtitle: string;
  title: string;
}) {
  return (
    <Box sx={{ borderBottom: `1px solid ${colors.border}`, padding: '32px 24px', width: '100%' }}>
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
        <Box
          sx={{
            alignItems: { md: 'flex-start', xs: 'center' },
            display: 'flex',
            flexDirection: { md: 'column', xs: 'row' },
            gap: { md: '16px', xs: '12px' },
          }}
        >
          <Typography sx={{ color: colors.textMuted, lineHeight: '32px' }} variant="T16M">
            {period}
          </Typography>

          {logo && (
            <Box
              alt={`${subtitle} logo`}
              component="img"
              src={logo}
              sx={{
                bgcolor: '#FFFFFF',
                border: `1px solid ${colors.border}`,
                borderRadius: '10px',
                height: { md: '56px', xs: '36px' },
                objectFit: 'contain',
                order: { md: 0, xs: -1 },
                padding: { md: '6px', xs: '4px' },
                width: { md: '56px', xs: '36px' },
              }}
            />
          )}
        </Box>

        <Box>
          <Typography variant="T24B">{title}</Typography>

          <Typography sx={{ color: 'primary.main', marginTop: '4px' }} variant="T16B">
            {subtitle}
          </Typography>

          <Box
            component="ul"
            sx={{
              '& a': { color: 'primary.main' },
              '& b': { color: colors.text },
              '& li + li': { marginTop: '8px' },
              color: colors.textBody,
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
