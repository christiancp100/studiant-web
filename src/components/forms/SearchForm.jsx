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

const SearchForm = ({ className, title }) => {
  return <div className={`flex flex-col w-full xl:w-4/5  shadow-2xl rounded-2xl lg:p-12 p-6 mx-auto ${className}`}>
    {title && <span className=' font-bold text-center text-xl'>{title}</span>}
    <div className="flex mx-auto lg:flex-row flex-col justify-between lg:space-x-4 space-y-4">
      <span className='lg:hidden font-bold text-center text-xl'>Encuentra lo que buscas</span>
      <Select name="campus" placeholder="Campus" options={formOptions.campus} />
      <Input className="lg:w-full" placeholder="Habitaciones" name="rooms" type="number" max={10} min={0} />
      <Input className="w-full" placeholder="Disponibilidad" name="availability" type="date" />
      <Input placeholder="Precio Max." name="maxPrice" type="number" />
      <Button className="bg-secondary" Icon={Loop}>Buscar</Button>
    </div>
  </div>;
};

export default SearchForm;
