import { StaticImageData } from 'next/image';

import CaFlag from '@/images/flag/ca.png';
import UsFlag from '@/images/flag/us.png';

export const COUNTRIES = {
  us: 'United States',
  ca: 'Canada'
};

export type CountryCode = keyof typeof COUNTRIES;

export const COUNTRY_FLAGS: { [key in CountryCode]: StaticImageData } = {
  us: UsFlag,
  ca: CaFlag
} as const;
