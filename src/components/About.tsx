import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        padding: '72px 24px',
      }}
    >
      <Box>
        <Typography
          id="ABOUT"
          sx={{ color: 'text.secondary', marginBottom: '32px' }}
          variant="T14B"
        >
          ABOUT ME
        </Typography>

        <Typography
          sx={{
            '& > span': { color: 'primary.main' },
            fontSize: { sm: '32px', xs: '20px' },
            lineHeight: { sm: '52px', xs: '34px' },
            maxWidth: '850px',
          }}
          variant="T16S"
        >
          Hi! My name is Howard Tang or Hao Tang. I am a <span>Full-stack Engineer</span> with
          startup founding experience, hands-on across <span>architecture</span>, backend
          implementation, and <span>AI system design</span>. Experienced with{' '}
          <span>TypeScript</span>-based web development across <span>Next.js</span> and{' '}
          <span>NestJS</span>, plus <span>Python FastAPI</span> for backend services. Proficient in{' '}
          <span>AWS</span> cloud services and building LLM-powered applications from planning layer
          to production infrastructure.
        </Typography>
      </Box>
    </Box>
  );
}
