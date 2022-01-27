import React from 'react';
import Loop from '../icons/Loop';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const formOptions = {
  campus: [
    {
      title: "Campus Sur",
      value: "south"
    },
    {
      title: "Campus Norte",
      value: "north"
    }
  ],
}

const SearchForm = () => {
  return <div className="flex lg:flex-row flex-col lg:w-auto w-full  shadow-2xl rounded-2xl lg:p-12 p-6 justify-between lg:space-x-4 space-y-4">
    <span className='lg:hidden font-bold text-center text-xl'>Encuentra lo que buscas</span>
    <Select name="campus" placeholder="Campus" options={formOptions.campus} />
    <Input className="lg:w-36" placeholder="Habitaciones" name="rooms" type="number" max={10} min={0} />
    <Input placeholder="Disponibilidad" name="availability" type="date" />
    <Input placeholder="Precio Max." name="maxPrice" type="number" />
    <Button className="bg-secondary" Icon={Loop}>Buscar</Button>
  </div>;
};

export default SearchForm;
