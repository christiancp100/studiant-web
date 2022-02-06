import requestClient from 'src/lib/request';

export default async function handler(req, res) {
  const { data: properties } = await requestClient.get(
    '/api/apartments?populate=*&pagination[pageSize]=1',
  );
  res.status(200).json(properties);
}
