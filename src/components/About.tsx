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
          Hi! My name is Howard Tang or Hao Tang. I am a <span>Full Stack Engineer</span> with 4+
          years of expertise in <span>TypeScript</span>-based web development, specializing in{' '}
          <span>Next.js</span> and <span>NestJS</span>. Proficient in <span>AWS</span> cloud
          services for building scalable applications. Passionate about engineering excellence and
          driven to architect scalable solutions while continuously expanding technical
          capabilities.
        </Typography>
      </Box>
    </Box>
  );
}
