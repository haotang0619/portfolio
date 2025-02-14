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
            Led the development of multiple products including{' '}
            <b>
              <a href="https://www.lum-i.com/" rel="noopener noreferrer" target="_blank">
                Lumi
              </a>
            </b>
            , a hotel booking platform for the Middle East market, implementing full-stack scalable
            solutions with React.js and Node.js.
          </>,
          <>
            <b>Led a cross-functional team</b> of 6 engineers, orchestrating collaboration between
            mobile (Flutter), backend (Node.js) developers, UI/UX design, and QA to deliver
            high-quality products.
          </>,
          <>
            Established development <b>roadmaps</b> and <b>sprint planning</b>, defining milestones
            and deliverables while ensuring optimal resource allocation and timely product launches.
          </>,
          <>
            Implemented robust <b>code review</b> processes and <b>technical standards</b> for
            <b>backend</b> development, enhancing code quality and maintaining architectural
            integrity.
          </>,
          <>
            Serve as an <b>interviewer</b> for most of our developer interviews.
          </>,
        ]}
        period="Feb. 2024 — Present"
        subtitle="BeyondBrain Corp."
        title="Interim CTO & Full Stack Engineer"
      />

      <Item
        liItems={[
          <>Develop and maintain most of the company&apos;s website products, many from scratch.</>,
          <>
            Create an internal <b>UI framework library</b> for the company, based on Material UI.
          </>,
          <>
            Deploy web services on <b>AWS cloud services</b>.
          </>,
          <>
            Serve as an <b>interviewer</b> for our web developer interviews.
          </>,
          <>
            The company&apos;s first <b>full-stack engineer</b> and has been instrumental in
            recruiting and establishing the team.
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
