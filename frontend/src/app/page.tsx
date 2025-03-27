import Link from 'next/link';

import Hero from '@/components/Hero';
import AthletesSection from '@/components/section/AthletesSection';
import NewsSection from '@/components/section/NewsSection';
import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-2 pt-4 pb-4 flex flex-col gap-4'>
        <div>
          <H2>Upcoming Competitions</H2>
          <div className='flex flex-col items-center justify-center gap-4'>
            <Button asChild>
              <Link href='/competitions'>View all</Link>
            </Button>
          </div>
        </div>
        <div>
          <H2>Top Schools</H2>
          <div className='flex flex-col items-center justify-center gap-4'>
            <Button asChild>
              <Link href='/schools'>View all</Link>
            </Button>
          </div>
        </div>
        <AthletesSection />
        <NewsSection />
      </div>
    </>
  );
}

export default Home;
