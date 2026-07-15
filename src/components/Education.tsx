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
          id="EDUCATION"
          sx={{ color: 'text.secondary', marginBottom: { sm: '32px', xs: '16px' }, width: '100%' }}
          variant="T14B"
        >
          EDUCATION
        </Typography>
      </Box>

      <Item
        liItems={[
          <>
            <b>Teaching Assistant</b> for Algorithms — designing and grading coursework and holding
            office hours.
          </>,
          <>
            <b>General Coordinator</b> of CSIE Camp, leading planning and execution of a
            department-wide event.
          </>,
        ]}
        period="Sep. 2017 — May 2021"
        subtitle="National Taiwan University"
        title="B.S. in Computer Science and Information Engineering"
      />
    </Box>
  );
}
