import { useState, useEffect } from 'react';
import requestClient from 'src/lib/request';
import qs from 'qs';
import { useRouter } from 'next/router';

const useGetProperties = (opts) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [properties, setProperties] = useState([]);
  const [metadata, setMetadata] = useState({});
  const router = useRouter();

  const queryObj = {
    pagination: {
      pageSize: opts?.pageSize || 10,
      page: opts?.page || 1,
    },
  };

  const query = qs.stringify(queryObj);

  const fetch = async (options = {}) => {
    setLoading(true);
    try {
      const { data: properties } = await requestClient.get(
        `/api/apartments?populate=*&${options}`,
      );

      const page = queryObj.pagination.page;
      const pageCount = properties.meta?.pagination?.pageCount;

      if (pageCount < page) {
        router.push('/pisos');
      }

      setProperties(properties.data);
      setMetadata(properties.meta);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(query);
  }, [query]);

  return { properties, metadata, loading, error, fetch };
};

export default useGetProperties;
