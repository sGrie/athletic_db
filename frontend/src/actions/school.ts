'use server';

import { Entity } from '@/types/types';

export async function createSchool() {
  // TODO: Create in database.
}

export async function getSchool(id: string): Promise<Entity | null> {
  // TODO: Call from database.

  return Promise.resolve({
    id,
    name: 'School Name',
    about: 'Test description.'
  });
}

export async function getSchools(): Promise<Entity[]> {
  return Promise.resolve([]);
}

export async function updateSchool() {
  // TODO: Update in database.
}

export async function deleteSchool() {
  // TODO: Delete in database.
}
