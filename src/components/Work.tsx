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
            Co-founded BeyondBrain and built <b>Lumi</b>, an AI travel planning platform, from
            scratch as founding full-stack engineer — architecting the platform and AI application
            flow while integrating hotel inventory across <b>1M+ properties</b> and Google
            Maps–based POI discovery, helping secure seed funding.
          </>,
          <>
            Architected Lumi&apos;s core planning system, separating a{' '}
            <b>non-deterministic LLM planning layer</b> from a{' '}
            <b>deterministic transaction layer</b> that re-validates pricing before booking
            confirmation, reducing failures caused by free-form LLM outputs through streaming
            responses and structured outputs.
          </>,
          <>
            Designed and built a normalized relational data model and <b>RBAC</b>-based user
            management system for{' '}
            <b>
              <a href="https://www.fifthkeys.com/" rel="noopener noreferrer" target="_blank">
                FifthKeys
              </a>
            </b>
            , a hospitality management platform — separating availability, reservations, and pricing
            to ensure transactional consistency and real-time channel synchronization, helping
            client hotels increase occupancy by <b>20%+</b>.
          </>,
          <>
            As Interim CTO, coordinated <b>Web, Flutter, and Backend</b> teams, established
            engineering practices, and hired <b>6 engineers</b>.
          </>,
        ]}
        period="Feb. 2024 — Jun. 2026"
        subtitle="BeyondBrain"
        title="Co-Founder & Interim CTO"
      />

      <Item
        liItems={[
          <>
            Owned backend architecture, API development, and AI interaction flow for{' '}
            <b>MixerBox ChatAI</b>&apos;s tool-orchestration system — a production AI infrastructure
            serving <b>2.4M+ daily requests</b> and <b>9,000 peak RPM</b>, with robust handling for
            API timeouts, malformed LLM responses, and context failures.
          </>,
          <>
            Engineered concurrency-safe purchasing workflows for <b>MixerBox Pay</b>, a digital
            commerce platform, using <b>DynamoDB Transactions</b> to prevent race conditions during
            high-concurrency limited-quantity, fixed-time releases.
          </>,
          <>
            Built authentication and user-management systems for <b>MixerBox ID</b>, a centralized
            identity platform with <b>1M+ users</b>.
          </>,
          <>
            Monitored production systems via <b>AWS CloudWatch</b> and took part in{' '}
            <b>on-call rotations</b>.
          </>,
          <>
            Joined as the company&apos;s <b>first full-stack engineer</b> and helped define
            engineering standards and interview processes as the team scaled.
          </>,
        ]}
        period="Jun. 2021 — Feb. 2024"
        subtitle="MixerBox"
        title="Full-Stack Engineer"
      />

      <Item
        liItems={[
          <>
            Built an internal admin console modeled on <b>AWS IAM</b> for access control, developed
            the company&apos;s website using <b>React.js</b> with a custom backend CMS, and built a
            social-network side project to explore full-stack patterns.
          </>,
        ]}
        period="Jul. 2020 — Feb. 2021"
        subtitle="Funpodium"
        title="IT Intern"
      />

      <Item
        liItems={[
          <>
            Developed monitoring dashboards for <b>Taipower</b>&apos;s internal electricity
            operations team — a small but business-critical system prioritizing reliability and data
            accuracy — and built <b>Python</b> analysis scripts and <b>SQL</b> schemas for internal
            reporting.
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
