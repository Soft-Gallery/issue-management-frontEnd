import { useCallback, useState } from 'react';
import AuthError from '../remotes/AuthError';
import type { ErrorResponse } from '../types/errorResponse';

const useFetch = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const data = await fetcher();
      setData(data);
    } catch (error) {
      if (error instanceof AuthError) {
        console.log('인증 오류');
        return;
      }
      setError(error as ErrorResponse);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher]);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
