import { CountryCode } from '@/data/countries';

interface DatabaseEntity {
  id: number;
}

export interface Athlete extends DatabaseEntity {
  first_name: string;
  last_name: string;
  about: string;
  country_code: CountryCode;

  team: Team;
}

export interface School extends DatabaseEntity {
  mascot: string;
  name: string;
}

export interface Team extends DatabaseEntity {
  name: string;
  head_coach: string;
  conference: string;
  sport: string;
  school_id: number;

  school: School;
}

export interface Result extends DatabaseEntity {
  athleteId: number;
  eventId: number;
  result: string;
}

export interface Event extends DatabaseEntity {
  name: string;
  comp_id: number;
}

export interface Competition extends DatabaseEntity {
  event_location: string;
  name: string;
  date: Date;

  events: Event[];
}

export interface EventSubmission extends DatabaseEntity {
  result: string;
  event_id: number;
  athlete_id: number;
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
