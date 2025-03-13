import { Button } from '@/components/ui/Button';

function Hero() {
  return (
    <div className='h-80 flex justify-center items-center relative bg-black text-center'>
      <div className='absolute z-10 flex flex-col items-center gap-4'>
        <p className='font-bold text-white text-2xl'>
          Athletic events, scores, athletes and schools.
        </p>

        <div className='flex gap-2'>
          <Button>Explore events</Button>
          <Button variant='outline'>View athletes</Button>
        </div>
      </div>
      {/* TODO: Change image. */}
      <div className='w-full h-full bg-[url("https://picsum.photos/1000/800")] opacity-75'></div>
    </div>
  );
}

export default Hero;
