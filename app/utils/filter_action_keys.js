const filter_action_keys = (inputs) => {
  return Object.fromEntries(
    Object.entries(inputs).filter(([key]) => !key.startsWith("$ACTION"))
  );
};

export default filter_action_keys;
