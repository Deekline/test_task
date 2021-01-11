import { useCallback, useEffect, useState } from 'react';
import { TApi, TNormalizeData } from '../entities/general';

export const useFetchData = () => {
  const [data, setData] = useState<TNormalizeData[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizeData = useCallback(
    (apiData: TApi): TNormalizeData[] => {
      return Object.keys(apiData as TApi).map(
        (key: string): TNormalizeData => ({
          label: key,
          value: apiData[key].field,
        }),
      );
    },
    [data],
  );

  useEffect(() => {
    setLoading(true);
    fetch('http://demo1030918.mockable.io/')
      .then((response): Promise<TApi> => response.json())
      .then(result => setData(normalizeData(result)))
      .catch(() => setError('Fetching Error'))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
