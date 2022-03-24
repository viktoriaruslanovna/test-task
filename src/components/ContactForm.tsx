import React from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../hooks/useActions';
import { validateNumber } from '../utils/utils';

interface IContactFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<IContactFormProps> = ({ setVisible }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { fetchContacts } = useActions();

  const createContact = handleSubmit(async contact => {
    reset();
    setVisible(false);
    const result = await fetchContacts('post', contact);
    result && fetchContacts('get');
  });

  return (
    <form className="form" onSubmit={createContact}>
      <div className="form__group">
        <label className="form__label">Имя</label>
        <input
          className={errors?.firstname ? 'form__input error' : 'form__input'}
          type="text"
          {...register('firstname', {
            required: true,
            maxLength: {
              value: 20,
              message: 'Максимальный предел достигнут',
            },
          })}
        />
        <div className="form__error"></div>
      </div>
      <div className="form__group">
        <label className="form__label">Фамилия</label>
        <input
          className={errors?.lastname ? 'form__input error' : 'form__input'}
          type="text"
          {...register('lastname', {
            required: false,
            maxLength: {
              value: 20,
              message: 'Максимальный предел достигнут',
            },
          })}
        />
        <div className="form__error"></div>
      </div>
      <div className="form__group">
        <label className="form__label">Телефон</label>
        <input
          className={errors?.number ? 'form__input error' : 'form__input'}
          type="text"
          {...register('number', {
            validate: {
              number: value => validateNumber(value) === true,
            },
            required: true,
            minLength: {
              value: 11,
              message: 'Неверный номер телефона',
            },
            maxLength: {
              value: 20,
              message: 'Максимальный предел достигнут',
            },
          })}
        />
        <div className="form__error"></div>
      </div>
      <button className="form__btn" type="submit">
        Создать конакт
      </button>
    </form>
  );
};

export default ContactForm;
