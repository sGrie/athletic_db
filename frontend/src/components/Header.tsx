import Link from 'next/link';

import MobileHeaderNavigation from '@/components/MobileHeaderNavigation';
import { Button } from '@/components/ui/Button';

function Header() {
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
        <MobileHeaderNavigation />
      </div>
    </div>
  );
}

export default Header;
