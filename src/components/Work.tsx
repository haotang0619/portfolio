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
          id="WORK"
          sx={{ color: 'text.secondary', marginBottom: { sm: '32px', xs: '16px' }, width: '100%' }}
          variant="T14B"
        >
          WORK
        </Typography>
      </Box>

      <Item
        liItems={[
          <>
            Co-founded BeyondBrain, led the development of <b>Lumi</b> and designed the architecture
            for <b>FifthKeys</b>, taking product concepts to production and helping secure{' '}
            <b>seed funding</b>.
          </>,
          <>
            Grew and mentored a cross-functional engineering team, established engineering
            practices, and hired <b>6 engineers</b>.
          </>,
        ]}
        period="Feb. 2024 — Jun. 2026"
        subtitle="BeyondBrain"
        title="Co-Founder & Full-Stack Engineer"
      />

      <Item
        liItems={[
          <>
            Joined as the company&apos;s <b>first full-stack engineer</b>, helping establish
            engineering standards, interview processes, and scalable development practices as the
            engineering organization grew.
          </>,
          <>
            Built backend and AI services for <b>MixerBox ChatAI</b>, <b>Pay</b>, and <b>ID</b>, and
            maintained production reliability through monitoring, incident response, and on-call
            support.
          </>,
        ]}
        period="Jun. 2021 — Feb. 2024"
        subtitle="MixerBox"
        title="Full-Stack Engineer"
      />

      <Item
        liItems={[
          <>
            Built internal tooling and customer-facing web applications, including an IAM-inspired
            administration platform, a custom CMS, and React applications.
          </>,
        ]}
        period="Jul. 2020 — Feb. 2021"
        subtitle="Funpodium"
        title="IT Intern"
      />

      <Item
        liItems={[
          <>
            Developed operational dashboards and reporting tools for Taipower&apos;s internal
            operations team, improving visibility through reliable data pipelines and analytics.
          </>,
        ]}
        period="Jul. 2019 — Jun. 2020"
        subtitle="Gridwell"
        title="IT Intern"
      />

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          gap: '16px',
          marginTop: '32px',
          maxWidth: '898px',
          padding: '0 24px',
          width: '100%',
        }}
      >
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
