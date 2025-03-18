import axios from 'axios';

import { APIResponse } from '@/types/types';

/**
 * Sends a GET request to the backend.
 * @param endpoint The backend endpoint.
 * @returns The returned JSON data.
 */
export async function adbGet<T>(endpoint: string): Promise<APIResponse<T>> {
  if (!endpoint.startsWith('/')) {
    endpoint = `/${endpoint}`;
  }

  const request = await axios.get(`${process.env.BACKEND_URL}${endpoint}`);
  const data = await request.data;

  return {
    code: request.status,
    data
  };
}
