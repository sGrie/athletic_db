'use server';

import { Athlete } from '@/types/types';

const TEST_ATHLETES: Athlete[] = [
  {
    id: '1',
    name: 'John Doe',
    about: 'Test description.',
    country: 'us',
    school: {
      id: '1',
      name: 'Test School',
      about: 'Test description.',
      slug: 'test-school'
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    about: 'Test description.',
    country: 'ca',
    school: {
      id: '1',
      name: 'Test School',
      about: 'Test description.',
      slug: 'test-school'
    }
  }
];

export async function createTeam() {
  // TODO: Create in database.
}

export async function getAthletes(): Promise<Athlete[]> {
  return Promise.resolve(TEST_ATHLETES);
}

export async function getAthlete(id: string): Promise<Athlete | null> {
  // TODO: Call from database.

  return (
    TEST_ATHLETES.find((athlete) => {
      return athlete.id === id;
    }) || null
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAthletesBySchool(schoolId: string): Promise<Athlete[]> {
  return Promise.resolve([]);
}

export async function updateAthlete() {
  // TODO: Update in database.
}

export async function deleteAthlete() {
  // TODO: Delete in database.
}
