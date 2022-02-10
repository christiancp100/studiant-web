import { useState, useEffect } from 'react';
import _ from 'lodash';
import requestClient from 'src/lib/request';
import qs from 'qs';
import { useRouter } from 'next/router';

const useGetProperties = (opts) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [properties, setProperties] = useState([]);
  const [metadata, setMetadata] = useState({});
  const router = useRouter();

  const buildQuery = (v) => {
    const values = _.pickBy(v, (v) => v.length > 0 || _.isNumber(v));
    return qs.stringify({
      pagination: {
        pageSize: values?.pageSize || 10,
        page: values?.page || 1,
      },
      filters: {
        campus: {
          $eq: values.campus,
        },
        availableRoommates: {
          $gte: values.rooms,
        },
        price: {
          $lte: values.maxPrice,
        },
        availability: {
          $gte: values.availability,
        },
      },
    });
  };

  const fetch = async (options = {}) => {
    setLoading(true);
    try {
      const { data: properties } = await requestClient.get(
        `/api/apartments?populate=*&${buildQuery(options)}`,
      );
      console.log('properties', properties);
      const page = opts?.page || 1;
      const pageCount = properties.meta?.pagination?.pageCount;
      console.log('page', pageCount);

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
    fetch(opts);
  }, []);

  return { properties, metadata, loading, error, fetch };
};

export default useGetProperties;
