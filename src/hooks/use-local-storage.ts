import { useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

// ----------------------------------------------------------------------

export function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const restored = getStorage(key);

    if (restored && typeof restored === 'object' && !Array.isArray(restored) && restored !== null) {
      setState((prevValue: any) => ({
        ...prevValue,
        ...(restored as Record<string, any>),
      }));
    }
  }, [key]);

  const updateState = useCallback(
    (updateValue: any) => {
      setState((prevValue: any) => {
        setStorage(key, {
          ...prevValue,
          ...updateValue,
        });

        return {
          ...prevValue,
          ...updateValue,
        };
      });
    },
    [key]
  );

  const update = useCallback(
    (name: string, updateValue: any) => {
      updateState({
        [name]: updateValue,
      });
    },
    [updateState]
  );

  const reset = useCallback(() => {
    removeStorage(key);
    setState(initialState);
  }, [initialState, key]);

  return {
    state,
    update,
    reset,
  };
}

// ----------------------------------------------------------------------

export const getStorage = (key: string) => {
  let value = null;

  try {
    const result = window.localStorage.getItem(key);

    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    throw new Error(toErrorMessage(error));
  }

  return value;
};

export const setStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(toErrorMessage(error));
  }
};

export const removeStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    throw new Error(toErrorMessage(error));
  }
};
