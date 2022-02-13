import React from 'react';
import useGetProperties from 'src/hooks/useGetProperties';
import RightArrow from './icons/RightArrow';
import PropertyCard from './PropertyCard';
import Banner from './ui/Banner';
import ImageCard from './ui/ImageCard';

const FeaturedProperties = () => {
  const { properties, loading } = useGetProperties({ pageSize: 5 });
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Banner
        className="my-24"
        title="¡Mira qué mansiones!"
        subtitle="Inspeccionamos previamente todos los pisos antes de captarlos
       y mostrarlos en nuestro catálogo. Algunos que son potencialmente buenos,
       pero que no llegan a pasar el filtro, buscamos reformarlos un poco para sacarles el máximo partido. Juzga tu..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 mb-24 gap-6">
        {properties &&
          properties.map((property) => (
            <PropertyCard
              id={property.id}
              key={property.id}
              property={property.attributes}
            />
          ))}
        <ImageCard
          img={'/img/house.svg'}
          content={
            <span className="flex justify-center items-center">
              Ver Todo <RightArrow />
            </span>
          }
        />
      </div>
    </div>
  );
};

export default FeaturedProperties;
