import { useEffect, useState } from 'react';

// store persist hook
export const useStorePersist = <T>(store: T) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    setState(store);
  }, [store]);

  return state;
};
