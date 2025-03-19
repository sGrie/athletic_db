'use server';

import { Athlete } from '@/types/types';

export async function createSchool() {
  // TODO: Create in database.
}

export async function getSchool(id: string): Promise<Athlete | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id,
    name: 'School Name',
    about: 'Test description.'
  });
}

export async function getSchools(): Promise<Athlete[]> {
  return Promise.resolve([]);
}

export async function updateSchool() {
  // TODO: Update in database.
}

export async function deleteSchool() {
  // TODO: Delete in database.
}
