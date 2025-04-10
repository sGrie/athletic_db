'use server';

import { School } from '@/types/types';

const TEST_SCHOOLS: School[] = [
  {
    id: '1',
    name: 'School Name 1',
    about: 'Test description.',
    slug: 'school-1'
  },
  {
    id: '2',
    name: 'School Name 2',
    about: 'Test description.',
    slug: 'school-2'
  },
  {
    id: '3',
    name: 'School Name 3',
    about: 'Test description.',
    slug: 'school-3'
  },
  {
    id: '4',
    name: 'School Name 4',
    about: 'Test description.',
    slug: 'school-4'
  },
  {
    id: '5',
    name: 'School Name 5',
    about: 'Test description.',
    slug: 'school-5'
  },
  {
    id: '6',
    name: 'School Name 6',
    about: 'Test description.',
    slug: 'school-6'
  }
];

export async function createSchool() {
  // TODO: Create in database.
}

export async function getSchoolBySlug(slug: string): Promise<School | null> {
  // TODO: Call from database.

  return (
    TEST_SCHOOLS.find((school) => {
      return school.slug === slug;
    }) || null
  );
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
