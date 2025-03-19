// TODO: Update from database schema.

interface DatabaseEntity {
  id: string;
}

interface PageWithSlug {
  slug: string;
}

export interface Athlete extends DatabaseEntity {
  name: string;
  about: string;

  profilePicture?: string;
  banner?: string;
}

export interface Competition extends DatabaseEntity, PageWithSlug {
  name: string;
  location: string;
}

export interface Result extends DatabaseEntity {
  athleteId: string;
  time: number;
}

export interface Event extends DatabaseEntity, PageWithSlug {
  results: Result[];
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
