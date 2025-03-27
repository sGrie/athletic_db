import Image from 'next/image';

import NotFound from '@/components/NotFound';
import ProfileCountry from '@/components/profile/ProfileCountry';
import H2 from '@/components/ui/H2';
import H3 from '@/components/ui/H3';
import Paper from '@/components/ui/Paper';

import { getSchoolBySlug } from '@/actions/school';

async function SchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const schoolId = (await params).school;

  const school = await getSchoolBySlug(schoolId);
  if (!school) {
    return <NotFound />;
  }

  return (
    <>
      <div className='flex gap-4'>
        <Image
          src={`https://picsum.photos/500/500?random=${Math.round(Math.random() * 101)}`}
          alt={school.name}
          width={500}
          height={500}
          className='object-fill w-[100px] h-[100px] rounded-3xl'
        />
        <div className='flex flex-col justify-around'>
          <H2>{school.name}</H2>
          <ProfileCountry country='us' />
        </div>
      </div>
      <div className='flex flex-wrap mt-2'>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper>
            <H3>Teams</H3>
            <p>Testing.</p>
          </Paper>
        </div>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper>
            <H3>Athletes</H3>
            <p>Testing.</p>
          </Paper>
        </div>
        <div className='basis-1/2 p-1 min-w-[300px] flex-grow'>
          <Paper>
            <H3>Records</H3>
            <p>Testing.</p>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default SchoolPage;
