import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button/Button.js';
import { useGetFormById, useSetIsSubmit } from './hooks/forms-hooks';
import { handleOnSubmit } from './handlers/handlers';
import { email } from './regexp-patterns/regexp-patterns';
import { errorMessagesEmail } from './error-messages/error-messages';
import isErrors from './utilities/is-errors';

import '../Forms/Forms.scss';

function SubscribeForm({ isSubmit, setIsSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const error = isErrors(errors);
  const formId = useGetFormById('subscribeForm');

  useSetIsSubmit(error, isSubmit, setIsSubmit);

  return (
    <form
      className='form'
      onSubmit={handleSubmit(() => handleOnSubmit(formId, error, setIsSubmit))} 
      id='subscribeForm'
    >
      <label>Email</label>
      <input
        className='text-input'
        {...register('email', {
          required: true,
          pattern: email
        })}
      />
      {
        errors?.email?.type === 'required' &&
        <div className='error'>{errorMessagesEmail.required}</div>
      }
      {
        errors?.email?.type === 'pattern' &&
        <div className='error'>{errorMessagesEmail.correct}</div>
      }
      <Button>Отправить</Button>
    </form>
  );
}

export default SubscribeForm;
