import { useState, useEffect, useMemo } from 'react';

interface FetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useFetchData<T>(
  url: string,
  body: { 
    locationCode: string;
    type: string;
    slug: string;
    packageCode: string;
    iccid: string;
  }
): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const memoizedBody = useMemo(() => body, [JSON.stringify(body)]);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component is unmounted

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'RT-AccessCode': '6d2321e298ff4139b0877847094186cd'
          },
          body: JSON.stringify(memoizedBody),
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        if (isMounted) {
          setData(jsonData);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'An error occurred');
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; 
    };
  }, [url, memoizedBody]); 

  return { data, error, loading };
}