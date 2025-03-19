'use server';

import { Athlete } from '@/types/types';

export async function createTeam() {
  // TODO: Create in database.
}

export async function getTeam(id: string): Promise<Athlete | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id,
    name: 'Team Name',
    about: 'Test description.'
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getTeamsBySchool(schoolId: string): Promise<Athlete[]> {
  return Promise.resolve([]);
}

export async function updateTeam() {
  // TODO: Update in database.
}

export async function deleteTeam() {
  // TODO: Delete in database.
}
