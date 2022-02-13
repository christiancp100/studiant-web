import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getApartments } from 'src/api/apartments';
import ContactForm from 'src/components/forms/ContactForm';
import SearchForm from 'src/components/forms/SearchForm';
import Menu from 'src/components/Menu';
import PropertyCard from 'src/components/PropertyCard';
import Banner from 'src/components/ui/Banner';
import Pagination from 'src/components/ui/Pagination';
import SafeRequest from 'src/components/ui/SafeRequest';

export default function Apartments() {
  const router = useRouter();
  const query = router.query;
  const { data, status } = useQuery(['apartments', query], getApartments);

  const metadata = data?.meta;

  const properties = data?.data;

  useEffect(() => {
    if (metadata?.pagination?.page > metadata?.pagination?.pageCount) {
      router.push(router.pathname);
    }
  });

  return (
    <SafeRequest status={status}>
      <div className="flex flex-col items-center">
        <div className="2xl:w-3/4 mb-24">
          <div className="lg:mt-12 lg:mx-20 mt-6 mx-4">
            <Menu />
          </div>
          <SearchForm
            title="Encuentra aquí lo que buscas"
            className="my-24"
            search={fetch}
          />

          <div className="grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-4 md:mx-0 mb-24 gap-6">
            {properties &&
              properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  property={property.attributes}
                />
              ))}
          </div>
          <Pagination className="mb-24" pagination={metadata?.pagination} />

          <Banner
            title="¿No te acaba de encajar lo que tenemos?"
            subtitle="Cuéntanos por qué y qué estás buscando exactamente. En cuanto tengamos algo disponible con esas características te lo notificaremos al instante."
            className="mb-12"
          />
          <ContactForm />
        </div>
      </div>
    </SafeRequest>
  );
}
