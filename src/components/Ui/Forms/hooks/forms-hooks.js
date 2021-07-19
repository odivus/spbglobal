import { useState, useEffect } from 'react';

export function useGetFormById(id) {
  const [formId, setFormId] = useState(null);

  useEffect(() => {
    const formId = document.getElementById(id);
    setFormId(formId);
  }, [id]);

  return formId;
}

export function useSetIsSubmit(error, isSubmit, setIsSubmit) {
  useEffect(() => {
    if (error && isSubmit) setIsSubmit(false);
  }, [error, isSubmit, setIsSubmit]);
}