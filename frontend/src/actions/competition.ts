'use server';

import { Competition } from '@/types/types';

export async function createCompetition() {
  // TODO: Create in database.
}

export async function getCompetition(id: string): Promise<Competition | null> {
  return Promise.resolve({
    id,
    name: 'Competition Name',
    location: 'Location'
  });
}
export async function getCompetitions(): Promise<Competition[]> {
  return Promise.resolve([]);
}

export async function updateCompetition() {
  // TODO: Update in database.
}

export async function deleteCompetition() {
  // TODO: Delete in database.
}
