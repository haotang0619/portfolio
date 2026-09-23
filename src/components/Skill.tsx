import { Box, Typography } from '@mui/material';

const skillGroups = [
  { label: 'Programming', skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C++'] },
  { label: 'Frontend & Backend', skills: ['React.js', 'Next.js', 'Node.js', 'NestJS', 'FastAPI'] },
  { label: 'Database', skills: ['PostgreSQL', 'DynamoDB', 'MongoDB'] },
  {
    label: 'Cloud & DevOps',
    skills: [
      'AWS (ECS, EKS, RDS, DynamoDB, CloudFront, Route53, CloudWatch)',
      'Docker',
      'GitHub Actions',
      'Jenkins',
    ],
  },
  {
    label: 'AI & Product',
    skills: [
      'LLM-powered applications',
      'AI workflow design',
      'AI agents',
      'AI-assisted dev (Cursor)',
    ],
  },
  { label: 'Spoken', skills: ['English (Professional)', 'Mandarin (Native)'] },
];

export default function Skill() {
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
          id="SKILLS"
          sx={{
            color: 'text.secondary',
            letterSpacing: '2px',
            marginBottom: '32px',
            width: '100%',
          }}
          variant="T14B"
        >
          SKILLS
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexFlow: 'column', gap: '32px', maxWidth: '850px', width: '100%' }}
      >
        {skillGroups.map(({ label, skills }) => (
          <Box
            key={label}
            sx={{
              columnGap: '32px',
              display: 'grid',
              gridTemplateColumns: { md: '200px 1fr', xs: '1fr' },
              rowGap: '12px',
            }}
          >
            <Typography
              sx={{
                color: 'primary.main',
                letterSpacing: '2px',
                lineHeight: { md: '48px' },
                textTransform: 'uppercase',
              }}
              variant="T14B"
            >
              {label}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{ border: '1px solid #FFFFFF26', borderRadius: '40px', padding: '12px 24px' }}
                >
                  <Typography variant="T16M">{skill}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
