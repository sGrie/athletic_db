/* eslint-disable no-console */

import axios from 'axios';
import chalk from 'chalk';

import { APIResponse } from '@/types/types';

/**
 * Sends a GET request to the backend.
 * @param endpoint The backend endpoint.
 * @returns The returned JSON data.
 */
export async function adbGet<T>(endpoint: string): Promise<APIResponse<T>> {
  if (!process.env.BACKEND_URL) {
    console.error(
      chalk.bold.red(
        'No backend URL set. Please set the BACKEND_URL environment variable. Refer to /frontend/README.md for details.'
      )
    );
    return {
      code: 500,
      data: null as T
    };
  }

  if (!endpoint.startsWith('/')) {
    endpoint = `/${endpoint}`;
  }

  try {
    const request = await axios.get(`${process.env.BACKEND_URL}${endpoint}`, {
      validateStatus: () => {
        return true;
      }
    });
    const data = await request.data;

    return {
      code: request.status,
      data
    };
  } catch (error: any) {
    console.error(error);
    console.log();
    console.log(chalk.bold.red('Error when fetching from API. Is the backend running?'));
    console.log();

    return {
      code: 500,
      data: null as T
    };
  }
}
