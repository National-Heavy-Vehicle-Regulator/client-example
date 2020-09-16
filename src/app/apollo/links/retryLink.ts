import {RetryLink} from '@apollo/client/link/retry';

export const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 0,
    retryIf: (error: string): boolean => !!error,
  },
});
