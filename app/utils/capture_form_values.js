export default (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const inputValues = {};
  for (const [name, value] of formData.entries()) {
    inputValues[name] = value;
  }
  return inputValues;
};
