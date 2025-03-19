import Image from 'next/image';
import { TriangleAlert, UserRoundPlus } from 'lucide-react';

import NotFound from '@/components/NotFound';
import { Button } from '@/components/ui/Button';

import { getAthlete } from '@/actions/athlete';

async function AthletePage({ params }: { params: Promise<{ athlete: string }> }) {
  const athleteId = (await params).athlete;

  const athlete = await getAthlete(athleteId);
  if (!athlete) {
    return <NotFound />;
  }

  return (
    <div>
      <Image
        src='https://picsum.photos/2000/500'
        alt='User Banner'
        width={2000}
        height={500}
        className='object-cover min-h-[150px] max-h-[250px]'
      />
      <div className='p-2 flex flex-col gap-8 max-w-[1000px] m-auto'>
        <div className='flex gap-2'>
          <Image
            src='https://picsum.photos/500/500'
            alt='User Banner'
            width={500}
            height={500}
            className='object-fill w-[100px] h-[100px] rounded-3xl mt-[-30px] z-10 drop-shadow-sm'
          />
          <div className='flex w-full'>
            <div className='flex-grow ml-1'>
              <p className='text-2xl font-bold'>{athlete.name}</p>
              <div className='flex gap-2 items-center'>
                <Image
                  src='https://em-content.zobj.net/source/twitter/154/flag-for-united-states_1f1fa-1f1f8.png'
                  alt='United States'
                  width={32}
                  height={16}
                  className='object-contain'
                />
                <p className='font-light'>United States</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <Button className='flex sm:hidden' size='icon'>
                <UserRoundPlus />
              </Button>
              <Button className='hidden sm:flex'>
                <UserRoundPlus /> Add Friend
              </Button>
              <Button size='icon' variant='destructive'>
                <TriangleAlert />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p>{athlete.about}</p>
        </div>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Records
          </h2>
        </div>
        <div>
          <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Results
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AthletePage;
