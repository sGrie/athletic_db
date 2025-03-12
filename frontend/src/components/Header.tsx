import Link from 'next/link';

import { Button } from '@/components/ui/Button';

function Header() {
  return (
    <div className='bg-foreground p-2 flex justify-center items-center gap-1'>
      <div className='flex-grow text-primary'>
        <Link href='/'>
          <h1 className='font-extrabold text-lg'>AthleticDB</h1>
        </Link>
      </div>
      <div className='flex gap-1'>
        <Button variant='link' asChild>
          <Link href='/admin'>Admin</Link>
        </Button>
        <Button variant='outline' disabled>Register</Button>
        <Button disabled>Login</Button>
      </div>
    </div>
  );
}

export default Header;
