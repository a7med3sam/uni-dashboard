import { useMemo, useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------

type ReturnType = boolean;

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: React.RefObject<HTMLElement>;
  target?: React.RefObject<HTMLElement>;
}

export function useOffSetTop(top = 0, options?: UseScrollOptions): ReturnType {
  const [value, setValue] = useState(false);

  const onOffSetTop = useCallback(() => {
    const element = options?.container?.current;
    const scrollHeight = element ? element.scrollTop : window.scrollY;

    setValue(scrollHeight > top);
  }, [options?.container, top]);

  useEffect(() => {
    const element = options?.container?.current;
    const target = element || window;

    onOffSetTop();
    target.addEventListener('scroll', onOffSetTop, { passive: true });

    return () => {
      target.removeEventListener('scroll', onOffSetTop);
    };
  }, [onOffSetTop, options?.container]);

  const memoizedValue = useMemo(() => value, [value]);

  return memoizedValue;
}

// Usage
// const offset = useOffSetTop(100);

// Or
// const offset = useOffSetTop(100, {
//   container: ref,
// });
