import { Box, Typography } from '@mui/material';

import Item from './Item';

export default function Education() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        padding: '72px 0',
      }}
    >
      <Box sx={{ maxWidth: '898px', padding: '0 24px', width: '100%' }}>
        <Typography
          sx={{ color: 'text.secondary', marginBottom: '32px', width: '100%' }}
          variant="T14B"
        >
          EDUCATION
        </Typography>
      </Box>

      <Item
        liItems={[
          <>
            <b>Teaching Assistant</b> for the Algorithm class.
          </>,
          <>
            <b>General Coordinator</b> of CSIE Camp.
          </>,
        ]}
        period="2017 — 2021"
        subtitle="National Taiwan University"
        title="Bachelor's degree, Computer Science"
      />
    </Box>
  );
}
