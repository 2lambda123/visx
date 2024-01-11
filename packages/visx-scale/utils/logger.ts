// File: packages/visx-scale/utils/logger.ts

/**
 * Logs the given error message using the appropriate logging mechanism.
 * @param errorMessage The error message to log.
 */
export function logError(errorMessage: string): void {
  console.error('Error during GitHub Actions run:', errorMessage);
}
