import { ReactNode, useState } from 'react';

import { Box, Dialog, Typography } from '@mui/material';
import { ExportSquare } from 'iconsax-react';

import { colors } from '@/theme/colorVariables';
import { Localized, useLocale } from '@/utils/i18n';

const projects: {
  challenge: Localized<ReactNode>;
  company: string;
  goal: Localized<string>;
  metrics: { label: Localized<string>; value: string }[];
  name: string;
  src: string;
  tagline: Localized<string>;
}[] = [
  {
    challenge: {
      en: (
        <>
          Isolating <b>non-deterministic AI generation</b> from{' '}
          <b>deterministic booking execution</b> to ensure transaction reliability.
        </>
      ),
      'zh-TW': (
        <>
          將<b>非確定性的 AI 生成</b>與<b>確定性的訂房執行</b>隔離，確保交易可靠性。
        </>
      ),
    },
    company: 'BeyondBrain',
    goal: {
      en: 'Architect an AI travel platform integrating LLMs with live OTA inventory and POI discovery.',
      'zh-TW': '架構一套整合 LLM、即時 OTA 庫存與 POI 探索的 AI 旅遊平台。',
    },
    metrics: [{ label: { en: 'Requests / Day', 'zh-TW': '每日請求數' }, value: '250K+' }],
    name: 'Lumi',
    src: '/imgs/projects/lumi.png',
    tagline: { en: 'AI Travel Booking & Discovery Platform', 'zh-TW': 'AI 旅遊訂房與探索平台' },
  },
  {
    challenge: {
      en: (
        <>
          Guaranteeing <b>strict transactional consistency</b> across inventory availability,
          reservations, and dynamic pricing.
        </>
      ),
      'zh-TW': (
        <>
          在房況庫存、訂房與動態定價之間確保<b>嚴格的交易一致性</b>。
        </>
      ),
    },
    company: 'BeyondBrain',
    goal: {
      en: 'Design the relational data model and RBAC backend for a real-time hospitality management platform.',
      'zh-TW': '為即時旅宿管理平台設計關聯式資料模型與 RBAC 後端。',
    },
    metrics: [{ label: { en: 'Occupancy Rate', 'zh-TW': '住房率' }, value: '+20%' }],
    name: 'FifthKeys',
    src: '/imgs/projects/fifthkeys.png',
    tagline: {
      en: 'AI-Powered Hotel Property Management System',
      'zh-TW': 'AI 驅動的飯店管理系統（PMS）',
    },
  },
  {
    challenge: {
      en: (
        <>
          Engineering robust fallbacks for{' '}
          <b>LLM hallucinations, API timeouts, and context failures</b> at massive scale.
        </>
      ),
      'zh-TW': (
        <>
          在大規模流量下，為 <b>LLM 幻覺、API 逾時與 context 失效</b>設計穩健的備援機制。
        </>
      ),
    },
    company: 'MixerBox',
    goal: {
      en: 'Build the backend workflow orchestration and APIs for a production-grade AI assistant.',
      'zh-TW': '為正式上線等級的 AI 助理打造後端工作流程編排與 API。',
    },
    metrics: [
      { label: { en: 'Requests / Day', 'zh-TW': '每日請求數' }, value: '2.4M+' },
      { label: { en: 'Peak RPM', 'zh-TW': '尖峰 RPM' }, value: '9,000' },
    ],
    name: 'MixerBox ChatAI',
    src: '/imgs/projects/mixerbox-chatai.png',
    tagline: { en: 'Multi-Modal AI Assistant Platform', 'zh-TW': '多模態 AI 助理平台' },
  },
  {
    challenge: {
      en: (
        <>
          Using <b>DynamoDB Transactions</b> to maintain strict inventory consistency and prevent
          overselling during massive traffic spikes.
        </>
      ),
      'zh-TW': (
        <>
          運用 <b>DynamoDB Transactions</b> 在流量暴增時維持嚴格的庫存一致性，避免超賣。
        </>
      ),
    },
    company: 'MixerBox',
    goal: {
      en: 'Engineer a digital commerce checkout workflow capable of handling sudden flash sales.',
      'zh-TW': '打造能承受突發限時搶購的數位商務結帳流程。',
    },
    metrics: [{ label: { en: 'Transaction Safety', 'zh-TW': '交易安全性' }, value: '100%' }],
    name: 'MixerBox Pay',
    src: '/imgs/projects/mixerbox-pay.png',
    tagline: {
      en: 'Instant Checkout & Payment-Link Platform',
      'zh-TW': '即時結帳與付款連結平台',
    },
  },
  {
    challenge: {
      en: (
        <>
          Designing scalable, secure, and universally applicable <b>identity infrastructure</b>{' '}
          across a diverse product ecosystem.
        </>
      ),
      'zh-TW': (
        <>
          為多元的產品生態系設計可擴展、安全且通用的<b>身分基礎架構</b>。
        </>
      ),
    },
    company: 'MixerBox',
    goal: {
      en: 'Build a centralized authentication, identity, and user-management service.',
      'zh-TW': '打造集中式的身分驗證、身分與使用者管理服務。',
    },
    metrics: [{ label: { en: 'Active Users', 'zh-TW': '活躍使用者' }, value: '1M+' }],
    name: 'MixerBox ID',
    src: '/imgs/projects/mixerbox-id.png',
    tagline: {
      en: 'Centralized Authentication & Identity Service',
      'zh-TW': '集中式身分驗證服務',
    },
  },
];

export default function Projects() {
  const { t } = useLocale();
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
          {t({ en: 'PROJECTS', 'zh-TW': '專案' })}
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexFlow: 'column', gap: '24px', maxWidth: '850px', width: '100%' }}
      >
        {projects.map(({ challenge, company, goal, metrics, name, src, tagline }) => {
          const alt = t({ en: `${name} screenshot`, 'zh-TW': `${name} 截圖` });
          return (
            <Box
              key={name}
              sx={{
                bgcolor: colors.surface,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                gap: { md: '32px', xs: '24px' },
                padding: { sm: '32px', xs: '24px' },
              }}
            >
              <Box sx={{ flex: { md: '0 0 40%' } }}>
                <Box
                  aria-label={t({ en: `Enlarge ${name} screenshot`, 'zh-TW': `放大 ${name} 截圖` })}
                  component="button"
                  onClick={() => {
                    setZoomed({ alt, src });
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
                    alt={alt}
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
                <Typography sx={{ color: colors.textMuted, marginBottom: '16px' }} variant="T14M">
                  {t(tagline)}
                </Typography>

                <Typography sx={{ marginBottom: '12px' }} variant="T16R">
                  {t(goal)}
                </Typography>
                <Typography
                  sx={{ '& b': { color: 'text.primary' }, color: colors.textBody }}
                  variant="T16R"
                >
                  {t(challenge)}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {metrics.map(({ label, value }) => (
                    <Box
                      key={value}
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
                        {t(label)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
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
          {t({ en: 'VIEW PROJECT DECK (PDF)', 'zh-TW': '查看專案簡報 (PDF)' })}
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
