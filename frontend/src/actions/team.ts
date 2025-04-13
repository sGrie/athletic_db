'use server';

import { adbGet } from '@/util/api';

import { Athlete, Team } from '@/types/types';

export async function getTeam(id: string): Promise<Team | null> {
  const response = await adbGet<Team | null>(`/teams/${id}`);

  return response.data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getTeamsBySchool(schoolId: string): Promise<Athlete[]> {
  return Promise.resolve([]);
}

export async function getTeamAthletes(teamId: string) {
  const response = await adbGet<Athlete[]>(`/teams/${teamId}/athletes`);

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function getTeamSchool(teamId: string) {
  const response = await adbGet<Team | null>(`/teams/${teamId}/school`);

  return response.data;
}
