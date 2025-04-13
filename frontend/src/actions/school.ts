'use server';

import { adbGet } from '@/util/api';

import { Athlete, School, Team } from '@/types/types';

export async function getSchool(id: string): Promise<School | null> {
  const response = await adbGet<School | null>(`/schools/${id}`);

  return response.data;
}

export async function getSchools(): Promise<School[]> {
  const response = await adbGet<School[]>('/schools');

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function getSchoolTeams(schoolId: string): Promise<Team[]> {
  const response = await adbGet<Team[]>(`/schools/${schoolId}/teams`);

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function getSchoolAthletes(schoolId: string): Promise<Athlete[]> {
  const response = await adbGet<Athlete[]>(`/schools/${schoolId}/athletes`);

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}
