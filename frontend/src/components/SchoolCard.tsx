import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

import { School } from '@/types/types';

function SchoolCard({ school }: { school: School }) {
  return (
    <Card>
      <div className='aspect-w-4 aspect-h-5 relative'>
        <Image
          src={`https://picsum.photos/400/400?random=${Math.round(Math.random() * 101)}`}
          alt={school.name}
          width={400}
          height={400}
          className='object-fill w-full rounded-t-xl'
        />
      </div>
      <CardHeader className='grid gap-1 p-4'>
        <CardTitle>{school.name}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={`/school/${school.slug}`}>View</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default SchoolCard;
