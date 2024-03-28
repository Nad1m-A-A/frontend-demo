export default (formData) => {
  const inputValues = {};
  for (const [name, value] of formData.entries()) {
    inputValues[name] =
      value.trim() === "" ? value : !isNaN(value) ? parseFloat(value) : value;
  }
  console.log(inputValues);
  return inputValues;
};
