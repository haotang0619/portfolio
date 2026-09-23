import { Box, Typography } from '@mui/material';

import { colors } from '@/theme/colorVariables';
import { Localized, useLocale } from '@/utils/i18n';

const skillGroups: { label: Localized<string>; skills: Localized<string[]> | string[] }[] = [
  {
    label: { en: 'Programming', 'zh-TW': '程式語言' },
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'C++'],
  },
  {
    label: { en: 'Frontend & Backend', 'zh-TW': '前端與後端' },
    skills: ['React.js', 'Next.js', 'Node.js', 'NestJS', 'FastAPI'],
  },
  { label: { en: 'Database', 'zh-TW': '資料庫' }, skills: ['PostgreSQL', 'DynamoDB', 'MongoDB'] },
  {
    label: { en: 'Cloud & DevOps', 'zh-TW': '雲端與 DevOps' },
    skills: [
      'AWS (ECS, EKS, RDS, DynamoDB, CloudFront, Route53, CloudWatch)',
      'Docker',
      'GitHub Actions',
      'Jenkins',
    ],
  },
  {
    label: { en: 'AI & Product', 'zh-TW': 'AI 與產品' },
    skills: {
      en: [
        'LLM-powered applications',
        'AI workflow design',
        'AI agents',
        'AI-assisted dev (Claude Code, Cursor)',
      ],
      'zh-TW': [
        'LLM 應用開發',
        'AI 工作流程設計',
        'AI Agents',
        'AI 輔助開發（Claude Code、Cursor）',
      ],
    },
  },
  {
    label: { en: 'Spoken', 'zh-TW': '語言' },
    skills: {
      en: ['English (Professional)', 'Mandarin (Native)'],
      'zh-TW': ['英文（專業工作能力）', '中文（母語）'],
    },
  },
];

export default function Skill() {
  const { t } = useLocale();

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
          {t({ en: 'SKILLS', 'zh-TW': '技能' })}
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexFlow: 'column', gap: '32px', maxWidth: '850px', width: '100%' }}
      >
        {skillGroups.map(({ label, skills }) => (
          <Box
            key={label.en}
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
              {t(label)}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(Array.isArray(skills) ? skills : t(skills)).map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    border: `1px solid ${colors.borderStrong}`,
                    borderRadius: '40px',
                    padding: '12px 24px',
                  }}
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
