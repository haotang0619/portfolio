import { ReactNode } from 'react';

import { Box, Grid, Typography } from '@mui/material';

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
    <Box
      sx={{
        borderBottom: '1px solid #FFFFFF14',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        padding: '24px 24px 32px',
        position: 'relative',
        width: '100%',
      }}
    >
      <Grid
        columnSpacing={4}
        container
        rowSpacing={2}
        sx={{
          left: '-32px',
          margin: 'auto',
          maxWidth: '850px',
          position: 'relative',
          width: '100%',
        }}
      >
        <Grid item md={4} xs={12}>
          <Typography
            sx={{ fontSize: { sm: '32px', xs: '24px' }, lineHeight: { sm: '52px', xs: '40px' } }}
            variant="T32B"
          >
            {period}
          </Typography>
        </Grid>

        <Grid item md={8} xs={12}>
          <Typography
            sx={{ fontSize: { sm: '32px', xs: '24px' }, lineHeight: { sm: '52px', xs: '40px' } }}
            variant="T32B"
          >
            {title}
          </Typography>

          <Typography sx={{ marginTop: '16px' }} variant="T24M">
            {subtitle}
          </Typography>

          <Box component="ul" sx={{ paddingLeft: '16px' }}>
            {liItems.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
