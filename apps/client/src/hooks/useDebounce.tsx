import { useEffect, useState } from 'react';

// debounce hook
function useDebounce<T>(value: T, delay = 300) {
  const [state, setState] = useState<T>(value);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(state);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [state, delay]);

  return { debouncedValue, state, setState };
}

export { useDebounce };
