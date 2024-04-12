const match_string_to_array_items = (selectedShapes, newShapeName) => {
  let isMatch = false;
  let matchIndex = -1;

  for (let i = 0; i < selectedShapes.length; i++) {
    const item = selectedShapes[i];
    if (item.name === newShapeName) {
      isMatch = true;
      matchIndex = i;
    }
  }
  return { isMatch, matchIndex };
};
export default match_string_to_array_items;
