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

// `label` must match the section heading id; it is also shown in the corner navigation.
const sections: { Component: () => JSX.Element; label?: string }[] = [
  { Component: Banner },
  { Component: About, label: 'ABOUT' },
  { Component: Work, label: 'WORK' },
  { Component: Projects, label: 'PROJECTS' },
  { Component: Skill, label: 'SKILLS' },
  { Component: Education, label: 'EDUCATION' },
  { Component: Blog, label: 'FEATURED' },
  { Component: Contact, label: 'CONTACT' },
];
const navLabels = sections.map(({ label }) => label).filter(Boolean);

export default function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Focus the section crossing a line near the top third of the viewport (capped so short sections
  // reached via the corner navigation stay focused on tall screens); the last one at the bottom.
  useEffect(() => {
    const updateActive = () => {
      const { innerHeight, scrollY } = window;
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveIdx(sections.length - 1);
        return;
      }
      const focusLine = Math.min(innerHeight / 3, 300);
      const idx = sectionRefs.current.findLastIndex(
        (el) => el.getBoundingClientRect().top <= focusLine,
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
      <CornerNavs activeLabel={sections[activeIdx].label} labels={navLabels} />
      <Box
        sx={{
          '& > div > div': {
            paddingBottom: { sm: '72px', xs: '36px' },
            paddingTop: { sm: '72px', xs: '48px' },
          },
        }}
      >
        {sections.map(({ Component }, idx) => (
          <Box
            key={idx}
            ref={(el: HTMLDivElement) => (sectionRefs.current[idx] = el)}
            sx={{
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
              opacity: idx === activeIdx ? 1 : 0.3,
              transition: 'opacity 0.6s ease',
            }}
          >
            <Component />
          </Box>
        ))}
      </Box>
    </>
  );
}
