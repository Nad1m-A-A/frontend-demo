"use client";

import { useState } from "react";

function GroupDemand({ demand }) {
  const [groupOn, setGroupOn] = useState(false);
  console.log(demand);
  return (
    <>
      <button className="my-4" onClick={() => setGroupOn((prev) => !prev)}>
        {groupOn ? "Cancel" : "Group"}
      </button>

      {groupOn && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap flex-col gap-2">
            {demand.map(({ weight, width }, index) => (
              <button key={index} className="plain_button text-black">
                {weight}/{width}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GroupDemand;
