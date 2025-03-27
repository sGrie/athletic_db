import Hero from '@/components/Hero';
import SectionAthletes from '@/components/section/SectionAthletes';
import SectionCompetitions from '@/components/section/SectionCompetitions';
import SectionNews from '@/components/section/SectionNews';
import SectionSchools from '@/components/section/SectionSchools';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-2 pt-4 pb-4 flex flex-col gap-4'>
        <SectionCompetitions />
        <SectionSchools />
        <SectionAthletes />
        <SectionNews />
      </div>
    </>
  );
}

export default Home;
