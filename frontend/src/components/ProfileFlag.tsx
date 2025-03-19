import Image from 'next/image';

import { COUNTRY_FLAGS, CountryCode } from '@/data/countries';

function ProfileFlag({ country }: { country: CountryCode }) {
  return (
    <Image
      src={COUNTRY_FLAGS[country]}
      alt={country.toString()}
      width={32}
      height={16}
      className='object-contain'
    />
  );
}

export default ProfileFlag;
