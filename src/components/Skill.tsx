import { Box, Typography } from '@mui/material';

const skills = ['TypeScript', 'Node.Js (NestJS)', 'React.Js (Next.Js)', 'AWS'];

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
          sx={{ color: 'text.secondary', marginBottom: '32px', width: '100%' }}
          variant="T14B"
        >
          SERVICE
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '850px', width: '100%' }}>
        {skills.map((skill) => (
          <Box
            key={skill}
            sx={{ border: '1px solid #FFFFFF14', borderRadius: '40px', padding: '12px 24px' }}
          >
            <Typography variant="T16B">{skill}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
