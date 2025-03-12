import Link from 'next/link';

function Header() {
  return (
    <div className='bg-adb-blue-900 p-2 flex justify-center items-center gap-1'>
      <div className='flex-grow text-adb-yellow'>
        <Link href='/'>
          <h1 className='font-black text-lg'>AthleticDB</h1>
        </Link>
      </div>
      <div>
        <p>Side</p>
      </div>
    </div>
  );
}

export default Header;
