import Hero from '@/components/Hero';

function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-[1400px] m-auto w-full flex-grow p-2'>
        <p>athletic_db</p>
        <p>Available Pages</p>
        <ul>
          <li>/athlete/123</li>
          <li>/competition/123</li>
          <li>/competition/123/20m</li>
          <li>/school/123</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
