const match_object_to_array_items = (groupingItems, newGroupingItem) => {
  let isMatch = false;
  let matchIndex = -1;

  for (let i = 0; i < groupingItems.length; i++) {
    const item = groupingItems[i];
    let matchCount = 0;

    for (const [key, value] of Object.entries(newGroupingItem)) {
      if (item[key] === value) {
        matchCount++;
      }
    }

    if (matchCount === Object.keys(newGroupingItem).length) {
      isMatch = true;
      matchIndex = i;
      break;
    }
  }
  return { isMatch, matchIndex };
};
export default match_object_to_array_items;
