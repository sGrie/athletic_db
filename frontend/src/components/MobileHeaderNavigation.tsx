'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';

function MobileHeaderNavigation() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <MenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex w-full gap-2 mb-4'>
          <Button variant='secondary' className='flex-grow' asChild>
            <Link href='/register'>Register</Link>
          </Button>
          <Button className='flex-grow' asChild>
            <Link href='/login'>Login</Link>
          </Button>
        </div>
        <div>
          <Button
            variant='ghost'
            asChild
            className='w-full'
            onClick={() => {
              setPopoverOpen(false);
            }}
          >
            <Link href='/admin'>Admin Panel</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default MobileHeaderNavigation;
