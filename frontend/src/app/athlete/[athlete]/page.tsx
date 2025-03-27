import Image from 'next/image';

import NotFound from '@/components/NotFound';
import ProfileHeader from '@/components/profile/ProfileHeader';
import H2 from '@/components/ui/H2';

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
        className='object-cover min-h-[150px] max-h-[250px] w-full'
      />
      <div className='p-2 flex flex-col gap-8 max-w-[1000px] m-auto'>
        <ProfileHeader athlete={athlete} />
        <div>
          <p>{athlete.about}</p>
        </div>
        <div>
          <H2>Records</H2>
        </div>
        <div>
          <H2>Results</H2>
        </div>
        <div>
          <H2>Teams</H2>
        </div>
      </div>
    </div>
  );
}

export default AthletePage;
