export default replace_object_key = (object, oldKey, newKey) => {
  const { [oldKey]: _, ...otherProperties } = object;
  const newObject = {
    [newKey]: object[oldKey],
    ...otherProperties,
  };
  return newObject;
};
