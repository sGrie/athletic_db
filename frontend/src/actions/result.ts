'use server';

import { Result } from '@/types/types';

export async function createResult() {
  // TODO: Create in database.
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getResult(resultId: string): Promise<Result | null> {
  // TODO: Create in database.

  return Promise.resolve({
    id: 0,
    athleteId: 0,
    eventId: 0,
    result: '102'
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getResultsByAthlete(athleteId: string): Promise<Result[]> {
  return Promise.resolve([]);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getTopResultsByEvent(athleteId: string, count: number): Promise<Result[]> {
  return Promise.resolve([]);
}

export async function deleteResult() {
  // TODO: Delete in database.
}
