import Hero from '@/components/Hero';
import NewsSection from '@/components/section/NewsSection';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-4 pt-8 pb-8 flex flex-col gap-4'>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Upcoming Events
          </h2>
        </div>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Top Schools
          </h2>
        </div>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Top Athletes
          </h2>
        </div>
        <NewsSection />
      </div>
    </>
  );
}

export default Home;
