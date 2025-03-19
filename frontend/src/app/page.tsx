import Link from 'next/link';

import Hero from '@/components/Hero';
import AthletesSection from '@/components/section/AthletesSection';
import NewsSection from '@/components/section/NewsSection';
import { Button } from '@/components/ui/Button';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-4 pt-8 pb-8 flex flex-col gap-4'>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Upcoming Competitions
          </h2>
          <div className='flex flex-col items-center justify-center gap-4'>
            <Button asChild>
              <Link href='/competitions'>View all</Link>
            </Button>
          </div>
        </div>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Top Schools
          </h2>
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
