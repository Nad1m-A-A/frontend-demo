"use client";

import compute_group_demand from "@/app/utils/compute_group_demand";
import match_object_to_array_items from "@/app/utils/match_object_to_array_items";
import { useEffect, useState } from "react";

function GroupDemand({ demand, thickness }) {
  const [groupingOn, setGroupingOn] = useState(false);
  const [groupItems, setGroupItems] = useState([]);
  const [groupingTotal, setGroupingTotal] = useState(null);
  const [groupingWidth, setGroupingWidth] = useState(null);
  const [loading, setLoading] = useState(false);
  const TIME_BEFORE_COMPUTING = 3000;

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      await new Promise(
        (resolve) => (timeoutId = setTimeout(resolve, TIME_BEFORE_COMPUTING))
      );
      const { total, width } = await compute_group_demand(
        groupItems,
        thickness
      );
      setGroupingTotal(total);
      setGroupingWidth(width);
      setLoading(false);
    };
    if (groupItems.length > 1) {
      setLoading(true);
      fetchData();
    } else {
      setGroupingTotal(null);
      setGroupingWidth(null);
      setLoading(false);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [groupItems]);

  const groupHandler = (e) => {
    const newGroupingValues = e.target.value.split(",");
    const newGroupingItem = {
      weight: Number(newGroupingValues[0]),
      width: Number(newGroupingValues[1]),
      length: Number(newGroupingValues[2]),
    };

    const { isMatch, matchIndex } = match_object_to_array_items(
      groupItems,
      newGroupingItem
    );

    e.target.classList.toggle("plain_button");
    e.target.classList.toggle("fancy_button");

    if (isMatch) {
      const updatedGroup = [...groupItems];
      updatedGroup.splice(matchIndex, 1);
      setGroupItems(updatedGroup);
      return;
    }
    setGroupItems((prev) => [...prev, newGroupingItem]);
  };

  const toggleGrouping = () => {
    setGroupingOn((prev) => !prev);
    if (groupingOn) {
      setGroupItems([]);
      setGroupingTotal(null);
      setGroupingWidth(null);
    }
  };

  return (
    <>
      {demand.length > 1 && (
        <>
          <button className="my-4 main_button" onClick={toggleGrouping}>
            {groupingOn ? "Cancel" : "Group"}
          </button>

          {groupingOn && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap flex-col gap-2">
                {demand.map(({ weight, width, length }, index) => (
                  <button
                    value={[weight, width, length]}
                    onClick={groupHandler}
                    key={index}
                    className="plain_button"
                  >
                    {weight}/{width}
                  </button>
                ))}
              </div>
              {groupingTotal && groupItems.length > 1 && !loading && (
                <b className="flex flex-col gap-2 my-2 py-1 w-fit border-y border-black">
                  {groupingTotal}g/ {groupingWidth}mm
                </b>
              )}
              {loading && <b className="w-fit animate-spin text-2xl">/</b>}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default GroupDemand;
