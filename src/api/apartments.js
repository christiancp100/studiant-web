import _ from 'lodash';
import qs from 'qs';
import requestClient from 'src/lib/request';

export const getApartments = async (key) => {
  const buildQuery = (v) => {
    if (!v) {
      return '';
    }

    const values = _.pickBy(v, (v) => v.length > 0 || _.isNumber(v));

    const obj = {
      pagination: {
        pageSize: v.pageSize || 10,
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

  const res = await requestClient.get(
    `/api/apartments?populate=*&${buildQuery(key?.queryKey[1])}`,
  );
  return res.data;
};
