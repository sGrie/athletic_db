import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

function CompetitionsSection() {
  return (
    <div>
      <H2>Upcoming Competitions</H2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Button asChild>
          <Link href='/competitions'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default CompetitionsSection;
