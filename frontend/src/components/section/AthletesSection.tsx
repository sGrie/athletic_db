import Link from 'next/link';

import { Button } from '@/components/ui/Button';

import { getAthletes } from '@/actions/athlete';

async function AthletesSection() {
  let athletes = await getAthletes();
  athletes = athletes.slice(0, 5);

  return (
    <div>
      <h2 className='border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Top Athletes
      </h2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p>{JSON.stringify(athletes)}</p>
        <Button asChild>
          <Link href='/athletes'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default AthletesSection;
