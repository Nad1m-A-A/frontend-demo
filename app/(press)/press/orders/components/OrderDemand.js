import compute_press_demand from "@/app/utils/compute_press_demand";
import Link from "next/link";
import GroupDemand from "./GroupDemand";
async function OrderDemand({ orderProduction, orderDetails }) {
  const { totalWeight, totalLength, demand } = await compute_press_demand(
    orderProduction,
    orderDetails
  );
  return (
    <>
      <div>
        {demand.map(({ weight, width }, index) => (
          <div key={index}>
            {weight <= 0 && <h5>order complete</h5>}
            {weight > 0 && `${weight}g /${width}mm`}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 my-2 py-1 w-fit border-y border-black">
        <b>{totalWeight}g Total</b>
      </div>
        <GroupDemand demand={demand}/>
    </>
  );
}

export default OrderDemand;
