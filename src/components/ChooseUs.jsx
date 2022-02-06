import React from 'react';
import Banner from './ui/Banner';
import Card from './ui/Card';

const ChooseUs = () => {
  return (
    <>
      <Banner
        className="my-24"
        title="Por qué somos diferentes?"
        subtitle="Tenemos un objetivo en mente, conseguir mejorar los servicios que ofrecen 
        las inmobiliarias de Santiago de Compostela, anteponiendo las necesidades del estudiante y 
        mejorando su calidad de vida. Intentamos hacer lo que ninguna otra inmobiliaria santiaguesa hizo, 
        crear una comunidad para estudiantes, y ejercer presión para mejorar los precios en las viviendas y servicios."
      />
      <div className="grid grid-rows-1 lg:grid-flow-col gap-x-6">
        <Card
          className="mb-16"
          imgSrc="/img/save.svg"
          title="Paga menos, por más"
          text="Queremos que te emborraches un poco más, 
        así que vamos a hacer que ahorres en el precio de 
        tu alquiler utilizando algunos truquitos que 
        tenemos bajo la manga."
        />

        <Card
          className="mb-16"
          imgSrc="/img/save.svg"
          title="Paga menos, por más"
          text="Queremos que te emborraches un poco más, 
        así que vamos a hacer que ahorres en el precio de 
        tu alquiler utilizando algunos truquitos que 
        tenemos bajo la manga."
        />

        <Card
          className="mb-16"
          imgSrc="/img/save.svg"
          title="Paga menos, por más"
          text="Queremos que te emborraches un poco más, 
        así que vamos a hacer que ahorres en el precio de 
        tu alquiler utilizando algunos truquitos que 
        tenemos bajo la manga."
        />
      </div>
    </>
  )
};

export default ChooseUs;
