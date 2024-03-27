export default (formData) => {
  const inputValues = {};
  for (const [name, value] of formData.entries()) {
    inputValues[name] = isNaN(value) ? value : parseFloat(value);
  }
  return inputValues;
};
