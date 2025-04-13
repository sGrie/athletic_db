'use server';

import { Result } from '@/types/types';

export async function createResult() {
  // TODO: Create in database.
}

export async function getResult(resultId: string): Promise<Result | null> {
  // TODO: Create in database.

  return Promise.resolve({
    id: resultId,
    athleteId: '123',
    eventId: '456',
    result: '123.56'
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

export async function updateResult() {
  // TODO: Update in database.
}

export async function deleteResult() {
  // TODO: Delete in database.
}
