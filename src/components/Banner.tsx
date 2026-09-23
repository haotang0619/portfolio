import { Box, Typography } from '@mui/material';
import { ArrowDown } from 'iconsax-react';

import { colors } from '@/theme/colorVariables';
import { textStyle } from '@/theme/util';
import { useLocale } from '@/utils/i18n';
import { scrollToSection } from '@/utils/scrollToSection';

const buttonSx = {
  ...textStyle(14, 'B'),
  '&:hover': { opacity: 0.75 },
  borderRadius: '40px',
  letterSpacing: '2px',
  padding: '12px 32px',
  textDecoration: 'none',
};

export default function Banner() {
  const { t } = useLocale();

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        gap: { sm: '32px', xs: '24px' },
        // Extra room on top of the page-level section padding set in pages/index.tsx.
        marginTop: { sm: '24px', xs: '32px' },
        padding: '72px 24px',
      }}
    >
      <Box
        alt="Howard"
        component="img"
        src="/imgs/howard.png"
        sx={{ width: { sm: '200px', xs: '160px' } }}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { sm: '64px', xs: '40px' },
            lineHeight: { sm: '82px', xs: '52px' },
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}
          variant="T64B"
        >
          {t({ en: 'Hi, I’m Howard', 'zh-TW': '嗨，我是唐浩' })}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: { sm: '32px', xs: '24px' },
            textTransform: 'uppercase',
          }}
          variant="T32B"
        >
          {t({ en: 'Full-Stack Engineer', 'zh-TW': '全端工程師' })}
        </Typography>
        <Typography
          sx={{ color: 'primary.main', letterSpacing: '2px', marginTop: '20px' }}
          variant="T14B"
        >
          {t({
            en: 'AI SYSTEMS • DISTRIBUTED BACKEND • PRODUCT ARCHITECTURE',
            'zh-TW': 'AI 系統 • 分散式後端 • 產品架構',
          })}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        <Box
          component="a"
          href="/assets/docs/resume.pdf"
          rel="noopener noreferrer"
          sx={{ ...buttonSx, bgcolor: 'primary.main', color: '#0D0D0D' }}
          target="_blank"
        >
          {t({ en: 'RESUME', 'zh-TW': '履歷' })}
        </Box>
        <Box
          component="a"
          href="#CONTACT"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('CONTACT');
          }}
          sx={{ ...buttonSx, border: `1px solid ${colors.text}`, color: colors.text }}
        >
          {t({ en: 'CONTACT', 'zh-TW': '聯絡我' })}
        </Box>
      </Box>

      <Box
        onClick={() => scrollToSection('ABOUT')}
        sx={{
          '& > svg': { transform: 'scaleY(0.8)' },
          '&:hover': { opacity: 0.75 },
          border: `1px solid ${colors.text}`,
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          padding: '12px',
        }}
      >
        <ArrowDown size={32} />
      </Box>
    </Box>
  );
}
