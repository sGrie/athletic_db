import Hero from '@/components/Hero';
import AthletesSection from '@/components/section/AthletesSection';
import CompetitionsSection from '@/components/section/CompetitionsSection';
import NewsSection from '@/components/section/NewsSection';
import SchoolsSection from '@/components/section/SchoolsSection';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-2 pt-4 pb-4 flex flex-col gap-4'>
        <CompetitionsSection />
        <SchoolsSection />
        <AthletesSection />
        <NewsSection />
      </div>
    </>
  );
}

export default Home;
