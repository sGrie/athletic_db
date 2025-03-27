import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

import { getAthletes } from '@/actions/athlete';

import AthletesTable from '../AthletesTable';

async function AthletesSection() {
  let athletes = await getAthletes();
  athletes = athletes.slice(0, 5);

  return (
    <div>
      <H2>Top Athletes</H2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <AthletesTable athletes={athletes} />

        <Button asChild>
          <Link href='/athletes'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default AthletesSection;
