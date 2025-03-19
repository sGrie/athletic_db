import Image from 'next/image';
import { TriangleAlert, UserRoundPlus } from 'lucide-react';

import NotFound from '@/components/NotFound';
import ProfileCountry from '@/components/ProfileCountry';
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
        src={`https://picsum.photos/2000/500?random=${Math.round(Math.random() * 101)}`}
        alt='User Banner'
        width={2000}
        height={500}
        className='object-cover min-h-[150px] max-h-[250px]'
      />
      <div className='p-2 flex flex-col gap-8 max-w-[1000px] m-auto'>
        <div className='flex gap-2'>
          <Image
            src={`https://picsum.photos/500/500?random=${Math.round(Math.random() * 101)}`}
            alt={athlete.name}
            width={500}
            height={500}
            className='object-fill w-[100px] h-[100px] rounded-3xl mt-[-30px] z-10 border-4 border-background'
          />
          <div className='flex w-full'>
            <div className='flex-grow'>
              <p className='text-2xl font-bold'>{athlete.name}</p>
              <ProfileCountry country={athlete.country} />
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
