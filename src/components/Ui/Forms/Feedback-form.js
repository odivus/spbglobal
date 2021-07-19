import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button/Button.js';
import { useGetFormById, useSetIsSubmit } from './hooks/forms-hooks';
import { handleOnSubmit } from './handlers/handlers';
import { name, email, site } from './regexp-patterns/regexp-patterns';
import isErrors from './utilities/is-errors';
import {
  errorMessagesName,
  errorMessagesEmail,
  errorMessagesSite,
  errorMessagesSector,
  errorMessagesPresentation,
  errorMessagesMetrics
} from './error-messages/error-messages';

import '../Forms/Forms.scss';

function FeedbackForm({ isSubmit, setIsSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const error = isErrors(errors);
  const formId = useGetFormById('feedbackForm');

  useSetIsSubmit(error, isSubmit, setIsSubmit);

  return (
    <form
      className='form feedbackForm'
      id='feedbackForm'
      onSubmit={handleSubmit(() => handleOnSubmit(formId, error, setIsSubmit))}
    >
      <div>
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
        <label>Сайт</label>
        <input
          className='text-input'
          {...register('site', {
            required: true,
            pattern: site
          })}
        />
        {
          errors?.site?.type === 'required' &&
          <div className='error'>{errorMessagesSite.required}</div>
        }
        {
          errors?.site?.type === 'pattern' &&
          <div className='error'>{errorMessagesSite.correct}</div>
        }
      </div>
      <div>
        <label>Сектор</label>
        <input
          className='text-input'
          {...register('sector', {
            required: true,
            minLength: 3,
            maxLength: 30,
          })}
        />
        {
          errors?.sector?.type === 'required' &&
          <div className='error'>{errorMessagesSector.required}</div>
        }
        {
          errors?.sector?.type === 'minLength' &&
          <div className='error'>{errorMessagesSector.correct}</div>
        }
        {
          errors?.sector?.type === 'maxLength' &&
          <div className='error'>{errorMessagesSector.correct}</div>
        }
        <label>Презентация (в&nbsp;формате&nbsp;pdf)</label>
        <input
          type='file'
          accept='.pdf'
          className='text-input file-input'
          {...register('presentation', {
            required: true,
          })}
        />
        {
          errors?.presentation?.type === 'required' &&
          <div className='error'>{errorMessagesPresentation.required}</div>
        }
        <label>Метрики (в&nbsp;формате&nbsp;pdf)</label>
        <input
          type='file'
          accept='.pdf'
          className='text-input file-input'
          {...register('metrics', {
            required: true,
          })}
        />
        {
          errors?.metrics?.type === 'required' &&
          <div className='error'>{errorMessagesMetrics.required}</div>
        }
      </div>
      <div className='h-centered'>
        <Button>Отправить</Button>
      </div>
    </form>
  );
}

export default FeedbackForm;
