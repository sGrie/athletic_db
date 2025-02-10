'use server';

import { Entity } from '@/types/types';

export async function createTeam() {
  // TODO: Create in database.
}

export async function getAthlete(id: string): Promise<Entity | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id,
    name: 'John Doe',
    about: 'Test description.'
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAthletesBySchool(schoolId: string): Promise<Entity[]> {
  return Promise.resolve([]);
}

export async function updateAthlete() {
  // TODO: Update in database.
}

export async function deleteAthlete() {
  // TODO: Delete in database.
}
