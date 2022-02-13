import { useRouter } from 'next/router';
import _ from 'lodash';
import ContactForm from 'src/components/forms/ContactForm';
import SearchForm from 'src/components/forms/SearchForm';
import Menu from 'src/components/Menu';
import PropertyCard from 'src/components/PropertyCard';
import Banner from 'src/components/ui/Banner';
import Loading from 'src/components/ui/Loading';
import Pagination from 'src/components/ui/Pagination';
import useGetProperties from 'src/hooks/useGetProperties';

export default function Apartments() {
  const { query } = useRouter();
  const { properties, metadata, loading, fetch } = useGetProperties(query);

  return (
    <div className="flex flex-col items-center">
      <div className="2xl:w-3/4 mb-24">
        <div className="lg:mt-12 lg:mx-20 mt-6 mx-4">
          <Menu />
        </div>
        <SearchForm
          title="Encuentra aquí lo que buscas"
          className="my-24"
          search={fetch}
          initialValues={query}
          s
        />

        {loading ? (
          <Loading className="-ml-1 mr-3" />
        ) : (
          <>
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
          </>
        )}
        <Banner
          title="¿No te acaba de encajar lo que tenemos?"
          subtitle="Cuéntanos por qué y qué estás buscando exactamente. En cuanto tengamos algo disponible con esas características te lo notificaremos al instante."
          className="mb-12"
        />
        <ContactForm />
      </div>
    </div>
  );
}
