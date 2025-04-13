'use server';

import { Athlete, Team } from '@/types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getTeam(id: string): Promise<Team | null> {
  return Promise.resolve({
    id: 0,
    name: 'Team Name',
    head_coach: 'Head Coach',
    conference: 'Conference',
    sport: 'Sport',
    school_id: 1,

    school: {
      id: 1,
      mascot: 'Mascot',
      name: 'School Name'
    }
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getTeamsBySchool(schoolId: string): Promise<Athlete[]> {
  return Promise.resolve([]);
}
