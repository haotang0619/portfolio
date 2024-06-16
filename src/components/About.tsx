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
          sx={{ '& > span': { color: 'primary.main' }, maxWidth: '850px' }}
          variant="T32S"
        >
          Hi! My name is Howard Tang or Hao Tang. I am a <span>Full Stack Web Developer</span> with
          2-3 years of experience in frontend/backend development, able to develop websites from
          scratch using <span>TypeScript</span>, particularly <span>Next.js</span> &{' '}
          <span>NestJS</span>. Possess basic knowledge of <span>AWS</span> such as CloudFront,
          DynamoDB, EKS, and more. Passionate about being an engineer and eager to become
          increasingly versatile.
        </Typography>
      </Box>
    </Box>
  );
}
