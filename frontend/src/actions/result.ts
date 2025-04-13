'use server';

import { adbGet } from '@/util/api';

import { Event, EventSubmission } from '@/types/types';

export async function createResult() {
  // TODO: Create in database.
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getResult(resultId: string): Promise<EventSubmission | null> {
  // TODO: Create in database.

  return Promise.resolve({
    id: 0,
    athlete_id: 0,
    event_id: 0,
    result: '102'
  });
}

export async function getResultsByAthlete(athleteId: string): Promise<
  (EventSubmission & {
    event: Event;
  })[]
> {
  const response = await adbGet<
    (EventSubmission & {
      event: Event;
    })[]
  >(`/athletes/${athleteId}/submissions`);

  if (response.code !== 200) {
    return [];
  }

  return response.data;
}

export async function deleteResult() {
  // TODO: Delete in database.
}
