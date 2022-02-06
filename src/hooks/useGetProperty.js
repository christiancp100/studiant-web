import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

const useGetProperty = (slug) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [property, setProperty] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/properties/${slug}`);
      setProperties(data.properties);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { property, loading, error, fetch };
};
