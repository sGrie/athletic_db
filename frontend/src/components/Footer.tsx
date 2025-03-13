function Footer() {
  return (
    <div className='bg-adb-blue-950 pt-8 pb-8 pl-4 pr-4 flex justify-center items-center flex-wrap gap-4 text-white'>
      <div className='basis-[350] flex flex-col gap-2'>
        <h1 className='text-primary font-extrabold text-2xl'>AthleticDB</h1>
        <p className='text-gray-400 text-sm'>© 2025 All Rights Reserved</p>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>About</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>More</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </div>
      <div className='basis-[350] flex flex-col gap-2'>
        <p className='text-primary font-bold'>Other</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </div>
    </div>
  );
}

export default Footer;
