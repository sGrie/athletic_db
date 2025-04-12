'use server';

import { School } from '@/types/types';

const TEST_SCHOOLS: School[] = [
  {
    id: '1',
    name: 'School Name 1',
    about: 'Test description.'
  },
  {
    id: '2',
    name: 'School Name 2',
    about: 'Test description.'
  },
  {
    id: '3',
    name: 'School Name 3',
    about: 'Test description.'
  },
  {
    id: '4',
    name: 'School Name 4',
    about: 'Test description.'
  },
  {
    id: '5',
    name: 'School Name 5',
    about: 'Test description.'
  },
  {
    id: '6',
    name: 'School Name 6',
    about: 'Test description.'
  }
];

export async function createSchool() {
  // TODO: Create in database.
}

export async function getSchool(id: string): Promise<School | null> {
  const school = TEST_SCHOOLS.find((school) => {
    return school.id === id;
  });
  return Promise.resolve(school || null);
}

export async function getSchools(): Promise<School[]> {
  return Promise.resolve(TEST_SCHOOLS);
}

export async function updateSchool() {
  // TODO: Update in database.
}

export async function deleteSchool() {
  // TODO: Delete in database.
}
