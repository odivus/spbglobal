function isErrors(errors) {
  if (!errors) return false;
  return Object.keys(errors).length !== 0 ? true : false;
}

export default isErrors;