'use server';

import { Event } from '@/types/types';

export async function createEvent() {
  // TODO: Create in database.
}

export async function getEvent(competitionId: string, eventId: string): Promise<Event | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id: eventId,
    athleteId: '123',
    time: 123.56,

    results: []
  });
}

export async function getEvents(): Promise<Event[]> {
  return Promise.resolve([]);
}

export async function updateEvent() {
  // TODO: Update in database.
}

export async function deleteEvent() {
  // TODO: Delete in database.
}
