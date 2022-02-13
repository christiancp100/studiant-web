import React from 'react';
import _ from 'lodash';
import Button from '../ui/Button';
import Loop from '../icons/Loop';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';

const formOptions = {
  campus: [
    {
      title: 'Campus Sur',
      value: 'south',
    },
    {
      title: 'Campus Norte',
      value: 'north',
    },
  ],
};

const SearchForm = ({ className, title, search, initialValues }) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const queryParams = _.pickBy(
          values,
          (v) => v.length > 0 || _.isNumber(v),
        );
        if (!search) {
          router.push({ pathname: '/pisos', query: queryParams });
        }
        search(values);
        setSubmitting(false);
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => (
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col w-full xl:w-4/5  shadow-2xl rounded-2xl lg:p-12 p-6 mx-auto ${className}`}
        >
          {title && (
            <span className=" font-bold text-center text-xl">{title}</span>
          )}
          <div className="flex mx-auto lg:flex-row flex-col justify-between lg:space-x-4 space-y-4">
            <span className="lg:hidden font-bold text-center text-xl">
              Encuentra lo que buscas
            </span>
            <Select
              selected={router.query.campus}
              placeholder={'Campus'}
              onChange={handleChange}
              name="campus"
              options={formOptions.campus}
            />
            <Field
              as={Input}
              className="w-1/2"
              placeholder="Habitaciones"
              name="rooms"
              type="number"
              max={10}
              min={0}
            />
            <Field
              as={Input}
              className="w-full"
              placeholder="Disponibilidad"
              name="availability"
              type="date"
            />
            <Field
              as={Input}
              placeholder="Precio Max."
              name="maxPrice"
              type="number"
              className="w-3/4"
            />
            <Button
              loading={isSubmitting}
              type="submit"
              className="bg-secondary"
              Icon={Loop}
            >
              Buscar
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

SearchForm.defaultProps = {
  initialValues: {
    campus: '',
    availability: '',
    rooms: '',
    maxPrice: '',
  },
};

SearchForm.displayName = 'SearchForm';

export default SearchForm;
