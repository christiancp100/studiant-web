import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ContactForm = () => {
  return (
    <div className="lg:w-1/2 w-4/5 mx-auto flex flex-col justify-center space-y-4">
      <div className="flex space-x-4 justify-between w-full">
        <Input className="border-none w-full" placeholder="Nombre" />
        <Input
          className="border-none w-full"
          placeholder="Número de teléfono"
          type="phone"
        />
      </div>
      <div className="flex justify-center w-full">
        <Input
          className="border-none w-full"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="flex justify-center w-full">
        <textarea
          rows={10}
          className="rounded-lg px-4 py-2 lg:py-2 shadow-md border-none w-full"
          placeholder="Cuéntanos lo que quieras..."
        />
      </div>
      <Button className="md:self-end bg-secondary">Enviar</Button>
    </div>
  );
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;
