import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button/Button.js';
import { useGetFormById, useSetIsSubmit } from './hooks/forms-hooks';
import { handleOnSubmit } from './handlers/handlers';
import isErrors from './utilities/is-errors';
import { name, phone } from './regexp-patterns/regexp-patterns';
import { 
  errorMessagesName, 
  errorMessagesPhone
} from './error-messages/error-messages';

import '../Forms/Forms.scss';

function ConsultingForm({ isSubmit, setIsSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const error = isErrors(errors);
  const formId = useGetFormById('consultingForm');

  useSetIsSubmit(error, isSubmit, setIsSubmit);

  return (
    <form 
      className='form'
      onSubmit={handleSubmit(() => handleOnSubmit(formId, error, setIsSubmit))}
      id='consultingForm'
    >
      <label>Ваше имя</label>
      <input
        className='text-input'
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: name
        })}
      />
      {
        errors?.name?.type === 'required' && 
        <div className='error'>{errorMessagesName.required}</div>
      }
      {
        errors?.name?.type === 'maxLength' &&
        <div className='error'>{errorMessagesName.maxLength}</div>
      }
      {
        errors?.name?.type === 'pattern' &&
        <div className='error'>{errorMessagesName.pattern}</div>
      }
      <label>Телефон</label>
      <input
        className='text-input'
        {...register('phone', {
          required: true,
          maxLength: 20,
          minLength: 5,
          pattern: phone
        })}
      />
      {
        errors?.phone?.type === 'required' &&
        <div className='error'>{errorMessagesPhone.required}</div>
      }
      {
        errors?.phone?.type === 'maxLength' &&
        <div className='error'>{errorMessagesPhone.correct}</div>
      }
      {
        errors?.phone?.type === 'minLength' &&
        <div className='error'>{errorMessagesPhone.correct}</div>
      }
      {
        errors?.phone?.type === 'pattern' &&
        <div className='error'>{errorMessagesPhone.correct}</div>
      }
      <Button>Отправить</Button>
    </form>
  );
}

export default ConsultingForm;
