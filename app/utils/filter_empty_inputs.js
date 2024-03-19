export default (inputs) => {
  return Object.entries(inputs).reduce((acc, [key, value]) => {
    if (value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {});
};
