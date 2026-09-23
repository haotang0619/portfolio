import { Box, Typography } from '@mui/material';

import { useLocale } from '@/utils/i18n';

import Item from './Item';

export default function Education() {
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
          id="EDUCATION"
          sx={{
            color: 'text.secondary',
            letterSpacing: '2px',
            marginBottom: { sm: '32px', xs: '16px' },
            width: '100%',
          }}
          variant="T14B"
        >
          {t({ en: 'EDUCATION', 'zh-TW': '學歷' })}
        </Typography>
      </Box>

      <Item
        liItems={t({
          en: [
            <>
              <b>Teaching Assistant</b> for Algorithms — designing and grading coursework and
              holding office hours.
            </>,
            <>
              <b>General Coordinator</b> of CSIE Camp, leading planning and execution of a
              department-wide event.
            </>,
          ],
          'zh-TW': [
            <>
              擔任演算法課程<b>助教</b>，負責設計與批改作業，並主持 office hours。
            </>,
            <>
              擔任資工營<b>總召</b>，統籌全系規模活動的規劃與執行。
            </>,
          ],
        })}
        logo="/imgs/education/ntu.jpeg"
        period={t({ en: 'Sep. 2017 — May 2021', 'zh-TW': '2017.09 — 2021.05' })}
        subtitle={t({ en: 'National Taiwan University', 'zh-TW': '國立臺灣大學' })}
        title={t({
          en: 'B.S. in Computer Science and Information Engineering',
          'zh-TW': '資訊工程學系 學士',
        })}
      />
    </Box>
  );
}
