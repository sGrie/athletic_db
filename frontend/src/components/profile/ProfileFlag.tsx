import Image from 'next/image';

import { COUNTRY_FLAGS, CountryCode } from '@/data/countries';

function ProfileFlag({ country }: { country: CountryCode }) {
  return (
    <Image
      src={COUNTRY_FLAGS[country]}
      alt={country.toString()}
      width={32}
      height={16}
      className='object-contain w-6 h-6 sm:w-8 sm:h-8'
    />
  );
}

export default ProfileFlag;
