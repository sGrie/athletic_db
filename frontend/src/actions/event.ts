'use server';

import { Event } from '@/types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getEvent(competitionId: string, eventId: string): Promise<Event | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id: 12,
    name: 'Event Name',
    comp_id: 12,

    results: []
  });
}

export async function getEvents(): Promise<Event[]> {
  return Promise.resolve([]);
}
