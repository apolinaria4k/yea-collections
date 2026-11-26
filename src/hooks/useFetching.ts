import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getErrorMessage } from '../utils/getErrorMessage';
import type { ListError, Status } from '../interfaces';

export const useFetching = <T extends unknown[]>(
  callback: (signal: AbortSignal, ...args: T) => Promise<void>,
) => {
  const controlledRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const callbackRef = useRef(callback);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<ListError>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      controlledRef.current?.abort();
    };
  }, []);

  const fetching = useCallback(async (...args: T) => {
    const myId = ++requestIdRef.current;
    const isActual = () => requestIdRef.current === myId;

    controlledRef.current?.abort();
    const controller = new AbortController();
    controlledRef.current = controller;
    const { signal } = controller;

    try {
      setStatus('loading');
      setError(null);

      await callbackRef.current(signal, ...args);

      if (isActual() && !signal.aborted) {
        setStatus('success');
      }
    } catch (error) {
      if (axios.isCancel(error)) return;

      if (!isActual() || signal.aborted) return;

      setError(getErrorMessage(error));
      setStatus('error');
    }
  }, []);

  return [fetching, status, error] as const;
};
