export default (formData) => {
  const inputValues = {};
  for (const [name, value] of formData.entries()) {
    inputValues[name] = value;
  }
  return inputValues;
};
