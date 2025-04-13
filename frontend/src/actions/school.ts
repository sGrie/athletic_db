'use server';

import { adbGet } from '@/util/api';

import { School } from '@/types/types';

export async function getSchool(id: string): Promise<School | null> {
  const response = await adbGet<School | null>(`/schools/${id}`);

  return response.data;
}

export async function getSchools(): Promise<School[]> {
  const response = await adbGet<School[]>('/schools');

  return response.data;
}
