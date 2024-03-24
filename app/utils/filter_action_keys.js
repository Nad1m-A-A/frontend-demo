export default (inputs) => {
  return Object.fromEntries(
    Object.entries(inputs).filter(([key]) => !key.startsWith("$ACTION"))
  );
};
