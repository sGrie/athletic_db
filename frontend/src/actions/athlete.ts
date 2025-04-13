'use server';

import { adbGet } from '@/util/api';

import { Athlete } from '@/types/types';

export async function getAthletes(): Promise<Athlete[]> {
  const response = await adbGet<Athlete[]>('/athletes');

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function getAthlete(id: string): Promise<Athlete | null> {
  const response = await adbGet<Athlete | null>(`/athletes/${id}`);

  return response.data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAthletesBySchool(schoolId: string): Promise<Athlete[]> {
  return Promise.resolve([]);
}
