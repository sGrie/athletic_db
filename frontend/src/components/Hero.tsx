import Link from 'next/link';

import { Button } from '@/components/ui/Button';

function Hero() {
  return (
    <div className='h-80 flex justify-center items-center relative bg-black text-center'>
      <div className='absolute z-10 flex flex-col items-center gap-8 p-4'>
        <p className='font-bold text-white text-xl sm:text-2xl drop-shadow-md'>
          Athletic events, scores, athletes and schools.
        </p>

        <div className='flex gap-2 flex-wrap justify-center'>
          <Button asChild>
            <Link href='/competitions'>Explore competitions</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href='/schools'>View schools</Link>
          </Button>
        </div>
      </div>
      {/* TODO: Change image. */}
      <div className='w-full h-full bg-[url("https://picsum.photos/1000/800")] opacity-70 bg-cover'></div>
    </div>
  );
}

export default Hero;
