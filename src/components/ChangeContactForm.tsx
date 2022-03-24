import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../hooks/useActions';
import { ContactType } from '../types/contacts';
import { validateNumber } from '../utils/utils';

interface IChangeContactFormProps {
  contact: ContactType;
  setChangePost: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeContactForm: React.FC<IChangeContactFormProps> = ({
  contact,
  setChangePost,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { fetchContacts } = useActions();

  const changeContact = handleSubmit(async changes => {
    setChangePost(false);
    const result = await fetchContacts('put', changes, contact.id);
    result && fetchContacts('get');
  });

  return (
    <form className="contact__wrapper" onSubmit={changeContact}>
      <div className="contact__group">
        <input
          className={
            errors?.firstname
              ? 'contact__firstname error'
              : 'contact__firstname'
          }
          type="text"
          {...register('firstname', {
            required: true,
            value: contact.firstname,
            maxLength: 20,
          })}
        />
        <input
          className={
            errors?.lastname ? 'contact__lastname error' : 'contact__lastname'
          }
          type="text"
          {...register('lastname', {
            required: false,
            value: contact.lastname,
            maxLength: 20,
          })}
        />
      </div>
      <input
        className={errors?.number ? 'contact__number error' : 'contact__number'}
        type="text"
        {...register('number', {
          validate: {
            lessThanTen: value => validateNumber(value) === true,
          },
          required: true,
          value: contact.number,
          minLength: 11,
          maxLength: 20,
        })}
      />
      <input className="display__none" type="submit" />
    </form>
  );
};

export default ChangeContactForm;
