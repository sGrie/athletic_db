'use server';

import { adbGet } from '@/util/api';

import { Athlete } from '@/types/types';

export async function createTeam() {
  // TODO: Create in database.
}

export async function getAthletes(): Promise<Athlete[]> {
  const response = await adbGet<{
    athletes: Athlete[];
  }>('/athletes');

  if (response.code !== 200) {
    return [];
  }

  const { athletes } = response.data;

  return athletes;
}

export async function getAthlete(id: string): Promise<Athlete | null> {
  // TODO: Call from database.
  const athletes = await getAthletes();

  return (
    athletes.find((athlete) => {
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
