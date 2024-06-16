import { Box, Typography } from '@mui/material';
import { ExportSquare } from 'iconsax-react';

import Item from './Item';

export default function Work() {
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
          WORK
        </Typography>
      </Box>

      <Item
        liItems={[
          <>
            Develop <b>websites</b> and <b>backend APIs</b>.
          </>,
          <>
            Serve as a <b>CTO</b> to manage our engineering team.
          </>,
        ]}
        period="Feb. 2024 — Present"
        subtitle="BeyondBrain Corp."
        title="CTO & Full Stack Engineer"
      />

      <Item
        liItems={[
          <>
            Develop <b>websites</b> and <b>backend APIs</b>.
          </>,
          <>
            Deploy web services on <b>AWS cloud services</b>.
          </>,
          <>
            Create an internal <b>UI framework library</b> for the company, based on Material UI.
          </>,
          <>
            Serve as an <b>interviewer</b> for our web developer interview.
          </>,
        ]}
        period="Jun. 2021 — Feb. 2024"
        subtitle="MixerBox"
        title="Software Engineer"
      />

      <Box sx={{ maxWidth: '898px', padding: '0 24px', width: '100%' }}>
        <Typography
          onClick={() => window.open('/assets/docs/resume.pdf', '_blank', 'noopener')}
          sx={{
            '&:hover': { textDecoration: 'underline' },
            alignItems: 'center',
            color: 'text.secondary',
            cursor: 'pointer',
            display: 'flex',
            gap: '8px',
            letterSpacing: '2px',
            marginTop: '32px',
            width: '100%',
          }}
          variant="T14B"
        >
          VIEW FULL RESUME
          <ExportSquare size={18} />
        </Typography>
      </Box>
    </Box>
  );
}
