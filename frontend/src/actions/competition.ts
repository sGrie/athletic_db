'use server';

import { Competition } from '@/types/types';

const TEST_COMPETITIONS: Competition[] = [
  {
    id: '1',
    name: 'Competition Name',
    location: 'Location',
    events: [
      {
        id: '1',
        name: 'Event Name',
        results: [
          {
            id: '1',
            athleteId: '123',
            eventId: '1',
            result: '123.45'
          }
        ]
      },
      {
        id: '2',
        name: 'Event Name 2',
        results: []
      }
    ],
    date: '2023-10-01'
  },
  {
    id: '3',
    name: 'Competition Name 3',
    location: 'Location 2',
    events: [
      {
        id: '3',
        name: 'Event Name 3',
        results: [
          {
            id: '2',
            athleteId: '123',
            eventId: '1',
            result: '123.45'
          }
        ]
      },
      {
        id: '4',
        name: 'Event Name 4',
        results: []
      }
    ],
    date: '2025-10-01'
  }
];

export async function createCompetition() {
  // TODO: Create in database.
}

export async function getCompetition(id: string): Promise<Competition | null> {
  return Promise.resolve(
    TEST_COMPETITIONS.find((competition) => {
      return competition.id === id;
    }) || null
  );
}
export async function getCompetitions(): Promise<Competition[]> {
  return Promise.resolve(TEST_COMPETITIONS);
}

export async function updateCompetition() {
  // TODO: Update in database.
}

export async function deleteCompetition() {
  // TODO: Delete in database.
}
