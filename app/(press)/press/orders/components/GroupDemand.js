"use client";

import compute_group_demand from "@/app/utils/compute_group_demand";
import { useEffect, useState } from "react";

function GroupDemand({ demand, totalLength, thickness }) {
  const [groupingOn, setGroupingOn] = useState(false);
  const [groupItems, setGroupItems] = useState([]);
  const [widths, setWidths] = useState([]);
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
        totalLength,
        thickness
      );
      setGroupingTotal(total);
      setGroupingWidth(width);
      setLoading(false);
    };
    if (groupItems.length > 1) {
      setLoading(true);
      fetchData();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [groupItems]);
  const groupHandler = (e) => {
    const newGroupItem = e.target.value.split(",");
    const weight = Number(newGroupItem[0]);
    const width = Number(newGroupItem[1]);
    if (widths.includes(width)) return;
    setWidths((prev) => [...prev, width]);
    setGroupItems((prev) => [...prev, { weight, width }]);
  };

  const toggleGrouping = () => {
    setGroupingOn((prev) => !prev);
    if (groupingOn) {
      setGroupItems([]);
      setWidths([]);
      setGroupingTotal(null);
      setGroupingWidth(null);
    }
  };

  return (
    <>
      <button className="my-4" onClick={toggleGrouping}>
        {groupingOn ? "Cancel" : "Group"}
      </button>

      {groupingOn && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap flex-col gap-2">
            {demand.map(({ weight, width }, index) => (
              <button
                value={[weight, width]}
                onClick={groupHandler}
                key={index}
                className="plain_button text-black"
              >
                {weight}/{width}
              </button>
            ))}
          </div>
          {groupingTotal && !loading && (
            <b className="flex flex-col gap-2 my-2 py-1 w-fit border-y border-black">
              {groupingTotal}/ {groupingWidth}
            </b>
          )}
          {loading && <b className="w-fit animate-spin text-2xl">/</b>}
        </div>
      )}
    </>
  );
}

export default GroupDemand;
