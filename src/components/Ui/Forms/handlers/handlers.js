export function handleOnSubmit(formId, error, setIsSubmit) {
  formId.reset();
  if (!error) setIsSubmit(true);
}