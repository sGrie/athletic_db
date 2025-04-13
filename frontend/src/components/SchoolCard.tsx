import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

import { School } from '@/types/types';

import TextPrefixIcon from './TextPrefixIcon';

function SchoolCard({ school }: { school: School }) {
  return (
    <Card>
      <div className='aspect-w-4 aspect-h-5 relative'>
        <img
          src={school.profile_picture}
          alt={school.name}
          width={400}
          height={400}
          className='object-fill w-full rounded-t-xl'
        />
      </div>
      <CardHeader className='grid gap-1 p-4'>
        <CardTitle>{school.name}</CardTitle>
        <CardDescription>
          <TextPrefixIcon icon={<MapPin width={16} />}>
            <p>{school.location}</p>
          </TextPrefixIcon>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={`/school/${school.id}`}>View</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default SchoolCard;
