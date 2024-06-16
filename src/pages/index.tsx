import { Box } from '@mui/material';

import About from '@/components/About';
import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import CornerNavs from '@/components/CornerNavs';
import Education from '@/components/Education';
import Skill from '@/components/Skill';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <CornerNavs />
      <Box
        sx={{
          '& > div': {
            paddingBottom: { sm: '72px', xs: '36px' },
            paddingTop: { sm: '72px', xs: '48px' },
          },
        }}
      >
        <Banner />
        <About />
        <Education />
        <Work />
        <Skill />
        <Blog />
        <Contact />
      </Box>
    </>
  );
}
