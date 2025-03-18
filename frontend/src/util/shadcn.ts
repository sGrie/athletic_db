import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges classes.
 * @param inputs List of classes.
 * @returns Merged class list.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
