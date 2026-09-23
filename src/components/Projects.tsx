import { ReactNode, useState } from 'react';

import { Box, Dialog, Typography } from '@mui/material';
import { ExportSquare } from 'iconsax-react';

const projects: {
  challenge: ReactNode;
  company: string;
  goal: string;
  metrics: { label: string; value: string }[];
  name: string;
  src: string;
  tagline: string;
}[] = [
  {
    challenge: (
      <>
        Isolating <b>non-deterministic AI generation</b> from <b>deterministic booking execution</b>{' '}
        to ensure transaction reliability.
      </>
    ),
    company: 'BeyondBrain',
    goal: 'Architect an AI travel platform integrating LLMs with live OTA inventory and POI discovery.',
    metrics: [{ label: 'Requests / Day', value: '250K+' }],
    name: 'Lumi',
    src: '/imgs/projects/lumi.png',
    tagline: 'AI Travel Booking & Discovery Platform',
  },
  {
    challenge: (
      <>
        Guaranteeing <b>strict transactional consistency</b> across inventory availability,
        reservations, and dynamic pricing.
      </>
    ),
    company: 'BeyondBrain',
    goal: 'Design the relational data model and RBAC backend for a real-time hospitality management platform.',
    metrics: [{ label: 'Occupancy Rate', value: '+20%' }],
    name: 'FifthKeys',
    src: '/imgs/projects/fifthkeys.png',
    tagline: 'AI-Powered Hotel Property Management System',
  },
  {
    challenge: (
      <>
        Engineering robust fallbacks for{' '}
        <b>LLM hallucinations, API timeouts, and context failures</b> at massive scale.
      </>
    ),
    company: 'MixerBox',
    goal: 'Build the backend workflow orchestration and APIs for a production-grade AI assistant.',
    metrics: [
      { label: 'Requests / Day', value: '2.4M+' },
      { label: 'Peak RPM', value: '9,000' },
    ],
    name: 'MixerBox ChatAI',
    src: '/imgs/projects/mixerbox-chatai.png',
    tagline: 'Multi-Modal AI Assistant Platform',
  },
  {
    challenge: (
      <>
        Using <b>DynamoDB Transactions</b> to maintain strict inventory consistency and prevent
        overselling during massive traffic spikes.
      </>
    ),
    company: 'MixerBox',
    goal: 'Engineer a digital commerce checkout workflow capable of handling sudden flash sales.',
    metrics: [{ label: 'Transaction Safety', value: '100%' }],
    name: 'MixerBox Pay',
    src: '/imgs/projects/mixerbox-pay.png',
    tagline: 'Instant Checkout & Payment-Link Platform',
  },
  {
    challenge: (
      <>
        Designing scalable, secure, and universally applicable <b>identity infrastructure</b> across
        a diverse product ecosystem.
      </>
    ),
    company: 'MixerBox',
    goal: 'Build a centralized authentication, identity, and user-management service.',
    metrics: [{ label: 'Active Users', value: '1M+' }],
    name: 'MixerBox ID',
    src: '/imgs/projects/mixerbox-id.png',
    tagline: 'Centralized Authentication & Identity Service',
  },
];

export default function Projects() {
  // Kept separately from `isZoomOpen` so the image stays rendered during the dialog's close fade.
  const [zoomed, setZoomed] = useState<{ alt: string; src: string }>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        padding: '72px 24px',
      }}
    >
      <Box sx={{ maxWidth: '850px', width: '100%' }}>
        <Typography
          id="PROJECTS"
          sx={{
            color: 'text.secondary',
            letterSpacing: '2px',
            marginBottom: '32px',
            width: '100%',
          }}
          variant="T14B"
        >
          PROJECTS
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexFlow: 'column', gap: '24px', maxWidth: '850px', width: '100%' }}
      >
        {projects.map(({ challenge, company, goal, metrics, name, src, tagline }) => (
          <Box
            key={name}
            sx={{
              bgcolor: '#FFFFFF0A',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              gap: { md: '32px', xs: '24px' },
              padding: { sm: '32px', xs: '24px' },
            }}
          >
            <Box sx={{ flex: { md: '0 0 40%' } }}>
              <Box
                aria-label={`Enlarge ${name} screenshot`}
                component="button"
                onClick={() => {
                  setZoomed({ alt: `${name} screenshot`, src });
                  setIsZoomOpen(true);
                }}
                sx={{
                  '& img': {
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover img': { transform: 'scale(1.05)' },
                  aspectRatio: '16 / 10',
                  bgcolor: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'zoom-in',
                  display: 'block',
                  overflow: 'hidden',
                  padding: 0,
                  width: '100%',
                }}
              >
                <img
                  alt={`${name} screenshot`}
                  loading="lazy"
                  src={src}
                  style={{ height: '100%', objectFit: 'contain', width: '100%' }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  letterSpacing: '2px',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
                variant="T14B"
              >
                {company}
              </Typography>
              <Typography sx={{ marginBottom: '6px' }} variant="T24B">
                {name}
              </Typography>
              <Typography sx={{ color: '#FFFFFFCC', marginBottom: '16px' }} variant="T14M">
                {tagline}
              </Typography>

              <Typography sx={{ marginBottom: '12px' }} variant="T16R">
                {goal}
              </Typography>
              <Typography
                sx={{ '& b': { color: 'text.primary' }, color: '#FFFFFFD9' }}
                variant="T16R"
              >
                {challenge}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                {metrics.map(({ label, value }) => (
                  <Box
                    key={label}
                    sx={{
                      alignItems: 'baseline',
                      bgcolor: '#EB59391F',
                      borderRadius: '8px',
                      display: 'flex',
                      gap: '8px',
                      padding: '8px 16px',
                    }}
                  >
                    <Typography sx={{ color: 'primary.main' }} variant="T24B">
                      {value}
                    </Typography>
                    <Typography
                      sx={{ color: 'primary.main', textTransform: 'uppercase' }}
                      variant="T14B"
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: '32px', maxWidth: '850px', width: '100%' }}>
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
            width: 'fit-content',
          }}
          variant="T14B"
        >
          VIEW PROJECT DECK (PDF)
          <ExportSquare size={18} />
        </Typography>
      </Box>

      <Dialog
        PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', margin: '16px' } }}
        maxWidth={false}
        onClose={() => setIsZoomOpen(false)}
        open={isZoomOpen}
        sx={{ '& .MuiBackdrop-root': { bgcolor: '#000000D9' } }}
      >
        {zoomed && (
          <img
            alt={zoomed.alt}
            onClick={() => setIsZoomOpen(false)}
            src={zoomed.src}
            style={{
              borderRadius: '8px',
              cursor: 'zoom-out',
              display: 'block',
              maxHeight: '90vh',
              maxWidth: '90vw',
            }}
          />
        )}
      </Dialog>
    </Box>
  );
}
