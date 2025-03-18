import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-adb-blue-950 pt-8 pb-8 pl-4 pr-4 flex justify-center items-center flex-wrap gap-4 text-white'>
      <div className='basis-[350] flex flex-col gap-2'>
        <h1 className='text-primary font-extrabold text-2xl'>AthleticDB</h1>
        <p className='text-gray-400 text-sm'>© 2025 All Rights Reserved</p>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>Explore</p>
        <Link href='/athletes'>Athletes</Link>
        <Link href='/competitions'>Competitions</Link>
        <Link href='/news'>News</Link>
        <Link href='/schools'>Schools</Link>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>More</p>
        <Link href='/faq'>FAQ</Link>
        <Link href='/membership'>Membership</Link>
        <Link href='/host'>Host an Event</Link>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>Other</p>
        <Link href='/contact'>Contact</Link>
        <Link href='/terms'>Teams of Service</Link>
        <Link href='/privacy'>Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
