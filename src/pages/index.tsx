import About from '@/components/About';
import Banner from '@/components/Banner';
import CornerNavs from '@/components/CornerNavs';
import Education from '@/components/Education';
import Skill from '@/components/Skill';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <CornerNavs />
      <Banner />
      <About />
      <Education />
      <Work />
      <Skill />
    </>
  );
}
