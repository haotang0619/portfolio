import { Box, Typography } from '@mui/material';

import { useLocale } from '@/utils/i18n';

export default function About() {
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
      <Box>
        <Typography
          id="ABOUT"
          sx={{ color: 'text.secondary', letterSpacing: '2px', marginBottom: '32px' }}
          variant="T14B"
        >
          {t({ en: 'ABOUT ME', 'zh-TW': '關於我' })}
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
          {t({
            en: (
              <>
                Hi! My name is Howard Tang or Hao Tang. I am a <span>Full-stack Engineer</span> with
                startup founding experience, hands-on across <span>architecture</span>, frontend and
                backend development, and <span>AI system design</span>. Experienced with{' '}
                <span>TypeScript</span>-based web development, primarily <span>NestJS</span> on the
                backend and <span>Next.js</span> on the frontend, with additional experience in{' '}
                <span>Python FastAPI</span>. Familiar with <span>AWS</span> cloud services and
                building LLM-powered applications from planning layer to production infrastructure.
              </>
            ),
            'zh-TW': (
              <>
                嗨！我是唐浩（Howard Tang），一名具新創共同創辦經驗的
                <span>全端工程師</span>，實際參與<span>系統架構</span>、前後端開發與{' '}
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
