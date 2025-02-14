import { ReactNode, useState } from 'react';

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
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        '&:hover': { '& *': { color: '#0D0D0D' }, bgcolor: 'primary.main' },
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

          <Box sx={{ display: 'flex', flexFlow: isHover ? 'column-reverse' : 'column' }}>
            <Typography
              sx={{ marginTop: '16px', visibility: isHover ? 'hidden' : 'visible' }}
              variant="T24M"
            >
              {subtitle}
            </Typography>

            <Box
              component="ul"
              sx={{ paddingLeft: '16px', visibility: isHover ? 'visible' : 'hidden' }}
            >
              {liItems.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
