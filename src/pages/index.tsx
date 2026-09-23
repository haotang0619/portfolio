import { useEffect, useRef, useState } from 'react';

import { Box } from '@mui/material';

import About from '@/components/About';
import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import CornerNavs from '@/components/CornerNavs';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skill from '@/components/Skill';
import Work from '@/components/Work';

const sections = [Banner, About, Work, Projects, Skill, Education, Blog, Contact];

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Focus the section crossing the viewport's vertical center; the last one once scrolled to the bottom.
  useEffect(() => {
    const updateActive = () => {
      const { innerHeight, scrollY } = window;
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveIdx(sections.length - 1);
        return;
      }
      const idx = sectionRefs.current.findLastIndex(
        (el) => el.getBoundingClientRect().top <= innerHeight / 2,
      );
      setActiveIdx(Math.max(idx, 0));
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <>
      <CornerNavs />
      <Box
        sx={{
          '& > div > div': {
            paddingBottom: { sm: '72px', xs: '36px' },
            paddingTop: { sm: '72px', xs: '48px' },
          },
        }}
      >
        {sections.map((Section, idx) => (
          <Box
            key={idx}
            ref={(el: HTMLDivElement) => (sectionRefs.current[idx] = el)}
            sx={{
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
              opacity: idx === activeIdx ? 1 : 0.3,
              transition: 'opacity 0.6s ease',
            }}
          >
            <Section />
          </Box>
        ))}
      </Box>
    </>
  );
}
