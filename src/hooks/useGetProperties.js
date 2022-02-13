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

    const obj = {
      pagination: {
        pageSize: v.pageSize || 1,
        page: v.page || 1,
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
    };
    return qs.stringify(obj);
  };

  const fetch = async (options = {}) => {
    const { data: properties } = await requestClient.get(
      `/api/apartments?populate=*&${buildQuery(options)}`,
    );
    const page = opts?.page || 1;
    const pageCount = properties.meta?.pagination?.pageCount;

    if (pageCount < page) {
      router.push({ pathname: '/pisos', query: { page: 1 } });
    }
    setProperties(properties.data);
    setMetadata(properties.meta);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetch(opts);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { properties, metadata, loading, error, fetch };
};

export default useGetProperties;
