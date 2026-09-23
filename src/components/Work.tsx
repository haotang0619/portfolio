import { Box, Typography } from '@mui/material';
import { ExportSquare } from 'iconsax-react';

import { useLocale } from '@/utils/i18n';

import Item from './Item';

export default function Work() {
  const { t } = useLocale();

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
          sx={{
            color: 'text.secondary',
            letterSpacing: '2px',
            marginBottom: { sm: '32px', xs: '16px' },
            width: '100%',
          }}
          variant="T14B"
        >
          {t({ en: 'WORK', 'zh-TW': '工作經歷' })}
        </Typography>
      </Box>

      <Item
        liItems={t({
          en: [
            <>
              Co-founded BeyondBrain, leading development and system architecture for both{' '}
              <b>Lumi</b> and <b>FifthKeys</b>, taking product concepts to production and helping
              secure <b>seed funding</b>.
            </>,
            <>
              Grew and mentored a cross-functional engineering team, established engineering
              practices, and hired <b>6 engineers</b>.
            </>,
          ],
          'zh-TW': [
            <>
              共同創辦 BeyondBrain，主導 <b>Lumi</b> 與 <b>FifthKeys</b>{' '}
              的開發與系統架構設計，將產品概念推進至正式上線，並協助取得<b>種子輪融資</b>。
            </>,
            <>
              組建並帶領跨職能工程團隊，建立工程實踐，並招募 <b>6 名工程師</b>。
            </>,
          ],
        })}
        logo="/imgs/work/beyondbrain.png"
        period={t({ en: 'Feb. 2024 — Jun. 2026', 'zh-TW': '2024.02 — 2026.06' })}
        subtitle="BeyondBrain"
        title={t({ en: 'Co-Founder & Full-Stack Engineer', 'zh-TW': '共同創辦人暨全端工程師' })}
      />

      <Item
        liItems={t({
          en: [
            <>
              Joined as the company&apos;s <b>first full-stack engineer</b>, helping establish
              engineering standards, interview processes, and scalable development practices as the
              engineering organization grew.
            </>,
            <>
              Built frontend, backend, and AI services for <b>MixerBox ChatAI</b>, <b>Pay</b>, and{' '}
              <b>ID</b>, and maintained production reliability through monitoring, incident
              response, and on-call support.
            </>,
          ],
          'zh-TW': [
            <>
              以公司<b>第一位全端工程師</b>
              的身分加入，隨工程組織成長，協助建立工程規範、面試流程與可擴展的開發實踐。
            </>,
            <>
              為 <b>MixerBox ChatAI</b>、<b>Pay</b> 與 <b>ID</b> 打造前後端與 AI
              服務，並透過監控、事故應變與 on-call 維護正式環境的穩定性。
            </>,
          ],
        })}
        logo="/imgs/work/mixerbox.jpeg"
        period={t({ en: 'Jun. 2021 — Feb. 2024', 'zh-TW': '2021.06 — 2024.02' })}
        subtitle="MixerBox"
        title={t({ en: 'Full-Stack Engineer', 'zh-TW': '全端工程師' })}
      />

      <Item
        liItems={t({
          en: [
            <>
              Built internal tooling and customer-facing web applications, including an IAM-inspired
              administration platform, a custom CMS, and React applications.
            </>,
          ],
          'zh-TW': [
            <>
              開發內部工具與面向客戶的 Web 應用，包括參考 IAM 設計的管理平台、客製化 CMS 與 React
              應用程式。
            </>,
          ],
        })}
        logo="/imgs/work/funpodium.jpeg"
        period={t({ en: 'Jul. 2020 — Feb. 2021', 'zh-TW': '2020.07 — 2021.02' })}
        subtitle="Funpodium"
        title={t({ en: 'IT Intern', 'zh-TW': 'IT 實習生' })}
      />

      <Item
        liItems={t({
          en: [
            <>
              Developed operational dashboards and reporting tools for Taipower&apos;s internal
              operations team, improving visibility through reliable data pipelines and analytics.
            </>,
          ],
          'zh-TW': [
            <>
              為台電內部營運團隊開發營運儀表板與報表工具，透過可靠的資料管線與分析提升營運可視性。
            </>,
          ],
        })}
        period={t({ en: 'Jul. 2019 — Jun. 2020', 'zh-TW': '2019.07 — 2020.06' })}
        subtitle="Gridwell"
        title={t({ en: 'IT Intern', 'zh-TW': 'IT 實習生' })}
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
            width: 'fit-content',
          }}
          variant="T14B"
        >
          {t({ en: 'VIEW FULL RESUME', 'zh-TW': '查看完整履歷' })}
          <ExportSquare size={18} />
        </Typography>
      </Box>
    </Box>
  );
}
