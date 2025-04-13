'use server';

import { adbGet } from '@/util/api';

import { Competition, Event } from '@/types/types';

export async function getCompetition(id: string): Promise<Competition | null> {
  const response = await adbGet<Competition | null>(`/competitions/${id}`);

  return response.data;
}
export async function getCompetitions(): Promise<Competition[]> {
  const response = await adbGet<Competition[]>('/competitions');

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function getCompetitionEvents(competitionId: string): Promise<Event[]> {
  const response = await adbGet<Event[]>(`/competitions/${competitionId}/events`);

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}
