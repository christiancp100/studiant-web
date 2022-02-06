import { properties } from 'src/pages/utils/mock/properties';

export default function handler(req, res) {
  const slug = req.query?.slug;
  const property = properties.find((prop) => prop.slug === slug);
  if (property !== undefined) {
    return res.status(200).json({ property });
  }
  return res.status(404).json();
}
