// TODO: Update from database schema.

import { CountryCode } from '@/data/countries';

interface DatabaseEntity {
  id: string;
}

export interface Athlete extends DatabaseEntity {
  name: string;
  about: string;
  country: CountryCode;
  school: School;

  profilePicture?: string;
  banner?: string;
}

export interface School extends DatabaseEntity {
  name: string;
  about: string;

  profilePicture?: string;
  banner?: string;
}

export interface Team extends DatabaseEntity {
  name: string;
  about: string;

  profilePicture?: string;
}

export interface Result extends DatabaseEntity {
  athleteId: string;
  eventId: string;
  result: string;
}

export interface Event extends DatabaseEntity {
  name: string;
  results: Result[];
}

export interface Competition extends DatabaseEntity {
  name: string;
  location: string;
  date: string;
  events: Event[];
}

export interface NewsArticle extends DatabaseEntity {
  title: string;
  description: string;
  image: string;
}

export interface APIResponse<T> {
  code: number;
  data: T;
}
