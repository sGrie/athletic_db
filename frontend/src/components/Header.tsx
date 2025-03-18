'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';

function Header() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className='bg-foreground pl-2 pr-2 pt-4 pb-4 flex justify-center items-center gap-1'>
      <div className='flex-grow text-primary'>
        <Link href='/'>
          <h1 className='font-extrabold text-lg ml-2'>AthleticDB</h1>
        </Link>
      </div>
      <div className='hidden sm:flex gap-1'>
        <Button variant='link' asChild>
          <Link href='/admin'>Admin</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='/register'>Register</Link>
        </Button>
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
      <div className='flex sm:hidden gap-1'>
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
      </div>
    </div>
  );
}

export default Header;
