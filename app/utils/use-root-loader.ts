import { useMatches } from '@remix-run/react';
import type { RootLoaderData } from '~/root';
import { loader as rootLoader } from '~/root';

export function useRootLoader(): RootLoaderData {
  return useMatches().find((match) => match.id === 'root')!
    .data as RootLoaderData;
}
