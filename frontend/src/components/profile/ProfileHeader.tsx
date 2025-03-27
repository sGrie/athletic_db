import Image from 'next/image';
import Link from 'next/link';
import { Heart, School, TriangleAlert, UserRoundPlus } from 'lucide-react';

import ProfileCountry from '@/components/profile/ProfileCountry';
import TextPrefixIcon from '@/components/TextPrefixIcon';
import { Button } from '@/components/ui/Button';

import { Athlete } from '@/types/types';

function ProfileHeader({ athlete }: { athlete: Athlete }) {
  return (
    <div>
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
      <div className='mt-2 flex gap-4 text-gray-700 text-sm'>
        <TextPrefixIcon icon={<School width={16} />}>
          <Link href={`/school/${athlete.school.id}`}>{athlete.school.name}</Link>
        </TextPrefixIcon>
        <TextPrefixIcon icon={<Heart width={16} />}>
          <p>Reading and Writing</p>
        </TextPrefixIcon>
      </div>
    </div>
  );
}

export default ProfileHeader;
