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
        columnSpacing={6}
        container
        rowSpacing={2}
        sx={{ margin: 'auto', maxWidth: '850px', width: '100%' }}
      >
        <Grid item md={5} sx={{ paddingLeft: '0 !important' }} xs={12}>
          <Typography variant="T32B">{period}</Typography>
        </Grid>

        <Grid
          item
          md={7}
          sx={{ paddingLeft: { md: '48px !important', xs: '0 !important' } }}
          xs={12}
        >
          <Typography variant="T32B">{title}</Typography>
          {!isHover ? (
            <Typography sx={{ marginTop: '16px' }} variant="T16M">
              {subtitle}
            </Typography>
          ) : (
            <Box component="ul" sx={{ paddingLeft: '16px' }}>
              {liItems.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
