import { useCallback, useRef } from 'react';

const useThrottle = <T extends (...args: never[]) => unknown>(
  callback: T,
  delay: number = 400,
) => {
  const lastRun = useRef(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        lastRun.current = Date.now();
        callback(...args);
      }
    },
    [callback, delay],
  );
};


export { useThrottle };
