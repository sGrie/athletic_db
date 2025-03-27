import ProfileFlag from '@/components/profile/ProfileFlag';

import { COUNTRIES, CountryCode } from '@/data/countries';

function ProfileCountry({ country }: { country: CountryCode }) {
  return (
    <div className='flex gap-2 items-center'>
      <ProfileFlag country={country} />
      <p className='font-light text-sm sm:text-base'>{COUNTRIES[country]}</p>
    </div>
  );
}

export default ProfileCountry;
