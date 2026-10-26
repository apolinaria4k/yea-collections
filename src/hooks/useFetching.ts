import axios from 'axios';
import { useRef, useState } from 'react';
import { getErrorMessage } from '../utils/getErrorMessage';
import type { Status } from '../interfaces';

export const useFetching = <T extends unknown[]>(callback: (...args: [...T]) => Promise<void>) => {
  const controlledRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetching = async (...args: T) => {
    const myId = ++requestIdRef.current;
    const isActual = () => requestIdRef.current === myId;

    controlledRef.current?.abort();
    const controller = new AbortController();
    controlledRef.current = controller;
    const { signal } = controller;

    try {
      setStatus('loading');
      setError(null);

      await callback(...args);

      if (isActual() && !signal.aborted) {
        setStatus('success');
      }
    } catch (error) {
      if (axios.isCancel(error)) return;

      if (!isActual()) return;

      setError(getErrorMessage(error));
      setStatus('error');
    }
  };

  return [fetching, status, error] as const;
};
