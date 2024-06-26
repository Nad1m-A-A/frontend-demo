const capture_from_values = (formData) => {
  const inputValues = {};
  for (const [name, value] of formData.entries()) {
    inputValues[name] =
      value.trim() === "" ? value : !isNaN(value) ? parseFloat(value) : value;
  }
  return inputValues;
};

export default capture_from_values;
