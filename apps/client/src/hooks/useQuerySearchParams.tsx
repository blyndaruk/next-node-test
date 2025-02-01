import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

import { useCallback } from 'react';

export const useQuerySearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const createQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete('page');

      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );

  const changeQuery = (name: string, value: string) => {
    push(pathname + '?' + createQuery(name, value));
  };

  const allQueriesParams = String(new URLSearchParams(searchParams));

  return { push, searchParams, allQueriesParams, changeQuery };
};
