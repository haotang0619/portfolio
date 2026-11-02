import { Box, Typography } from '@mui/material';

import { colors } from '@/theme/colorVariables';
import { useLocale } from '@/utils/i18n';

export default function About() {
  const { locale, t } = useLocale();

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
          component="h2"
          id="ABOUT"
          sx={{ color: 'text.secondary', letterSpacing: '2px', marginBottom: '32px' }}
          variant="T14B"
        >
          {t({ en: 'ABOUT ME', 'zh-TW': '關於我' })}
        </Typography>

        {/* Personal motto: shown bilingually in every locale. */}
        <Box
          sx={{
            borderLeft: '3px solid',
            borderLeftColor: 'primary.main',
            display: 'flex',
            flexFlow: 'column',
            gap: '4px',
            marginBottom: { sm: '48px', xs: '32px' },
            maxWidth: '850px',
            paddingLeft: { sm: '24px', xs: '16px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: '24px', xs: '18px' },
              letterSpacing: '2px',
              lineHeight: { sm: '36px', xs: '28px' },
            }}
            variant="T24M"
          >
            承諾前謹慎評估，承諾後全力以赴。
          </Typography>
          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: { sm: '20px', xs: '16px' },
              fontStyle: 'italic',
              lineHeight: { sm: '32px', xs: '26px' },
            }}
            variant="T24M"
          >
            Commit with care, deliver with dare.
          </Typography>
        </Box>

        <Typography
          sx={{
            '& > span': { color: 'primary.main' },
            fontSize: { sm: '32px', xs: '20px' },
            letterSpacing: locale === 'zh-TW' ? '2px' : undefined,
            lineHeight: { sm: '52px', xs: '34px' },
            maxWidth: '850px',
          }}
          variant="T16S"
        >
          {t({
            en: (
              <>
                Hi! My name is Howard Tang or Hao Tang. I am a{' '}
                <span>Senior Full-stack Engineer</span> with startup founding experience, hands-on
                across <span>architecture</span>, frontend and backend development, and{' '}
                <span>AI system design</span>. Experienced with <span>TypeScript</span>-based web
                development, primarily <span>NestJS</span> on the backend and <span>Next.js</span>{' '}
                on the frontend, with additional experience in <span>Python FastAPI</span>. Familiar
                with <span>AWS</span> cloud services and building LLM-powered applications from
                planning layer to production infrastructure.
              </>
            ),
            'zh-TW': (
              <>
                嗨！我是唐浩（Howard Tang），一名具新創共同創辦經驗的
                <span>資深全端工程師</span>，實際參與<span>系統架構</span>、前後端開發與{' '}
                <span>AI 系統設計</span>。熟悉以 <span>TypeScript</span> 為核心的 Web
                開發，後端最熟悉 <span>NestJS</span>，前端使用 <span>Next.js</span>，也具備{' '}
                <span>Python FastAPI</span> 的開發經驗。熟悉 <span>AWS</span>{' '}
                雲端服務，能從規劃層到正式環境基礎架構，完整打造 LLM 應用。
              </>
            ),
          })}
        </Typography>
      </Box>
    </Box>
  );
}
