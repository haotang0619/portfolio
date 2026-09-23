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
            Co-founded BeyondBrain and led the development of{' '}
            <b>Lumi, an AI travel planning platform</b>, transforming{' '}
            <b>product concepts into production-ready features</b>, scaling to{' '}
            <b>250K+ daily requests</b>, supporting hotel inventory for <b>1M+ properties</b>, and
            helping secure <b>seed funding</b>.
          </>,
          <>
            Designed <b>Lumi&apos;s AI planning experience</b> by integrating an{' '}
            <b>LLM-powered planning engine</b> with <b>deterministic validation workflows</b>,
            delivering flexible travel recommendations, seamless booking experience, and accurate
            pricing.
          </>,
          <>
            Designed the architecture for{' '}
            <b>
              <a href="https://www.fifthkeys.com/" rel="noopener noreferrer" target="_blank">
                FifthKeys
              </a>
              , a hospitality management platform
            </b>
            , enabling consistent management of <b>inventory, reservations, and pricing</b> across
            channels with <b>event-driven architecture</b>, and increasing client hotel occupancy by{' '}
            <b>20%+</b>.
          </>,
          <>
            Grew and mentored a <b>cross-functional engineering team</b>, established engineering
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
            Owned the backend architecture and AI interaction workflows for <b>MixerBox ChatAI</b>,
            improving <b>response reliability</b> and tool orchestration for production AI services
            handling <b>2.4M+ daily requests</b> and <b>9,000 peak RPM</b>.
          </>,
          <>
            Built <b>high-concurrency purchasing workflows</b> for <b>MixerBox Pay</b>, a payment
            and digital commerce platform, ensuring{' '}
            <b>fair and reliable limited-quantity releases</b> by implementing transactional
            safeguards that prevented overselling and race conditions during high-demand releases.
          </>,
          <>
            Built authentication and identity management services that power <b>MixerBox ID</b>, a
            centralized platform with <b>1M+ users</b>, simplifying <b>account management</b> across
            multiple products.
          </>,
          <>
            Maintained <b>production reliability</b> for large-scale consumer applications by
            monitoring with AWS CloudWatch, responding to incidents, and providing{' '}
            <b>on-call support</b>, minimizing <b>service disruptions</b>.
          </>,
          <>
            Joined as the company&apos;s <b>first full-stack engineer</b>, helping establish{' '}
            <b>engineering standards</b>, interview processes, and scalable development practices as
            the engineering organization grew.
          </>,
        ]}
        period="Jun. 2021 — Feb. 2024"
        subtitle="MixerBox"
        title="Full-Stack Engineer"
      />

      <Item
        liItems={[
          <>
            Built internal tooling and customer-facing web applications, including an{' '}
            <b>IAM-inspired administration platform</b>, a custom CMS, and React applications.
          </>,
        ]}
        period="Jul. 2020 — Feb. 2021"
        subtitle="Funpodium"
        title="IT Intern"
      />

      <Item
        liItems={[
          <>
            Developed <b>operational dashboards</b> and reporting tools for <b>Taipower&apos;s</b>{' '}
            internal operations team, improving visibility through <b>reliable data pipelines</b>{' '}
            and analytics.
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

        <Typography
          onClick={() => window.open('/assets/docs/portfolio.pdf', '_blank', 'noopener')}
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
          VIEW PORTFOLIO
          <ExportSquare size={18} />
        </Typography>
      </Box>
    </Box>
  );
}
