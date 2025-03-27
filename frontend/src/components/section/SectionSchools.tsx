import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

import { getSchools } from '@/actions/school';

import SchoolCard from '../SchoolCard';

async function SectionSchools() {
  const schools = await getSchools();
  schools.splice(6);

  return (
    <div>
      <H2>Top Schools</H2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='w-full flex flex-wrap justify-center'>
          {schools.map((school) => {
            return (
              <div className='p-1 basis-1/6 min-w-[200px]' key={school.id}>
                <SchoolCard school={school} />
              </div>
            );
          })}
        </div>

        <Button asChild>
          <Link href='/schools'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default SectionSchools;
