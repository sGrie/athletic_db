import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import H2 from '@/components/ui/H2';

function SectionSchools() {
  return (
    <div>
      <H2>Top Schools</H2>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Button asChild>
          <Link href='/schools'>View all</Link>
        </Button>
      </div>
    </div>
  );
}

export default SectionSchools;
