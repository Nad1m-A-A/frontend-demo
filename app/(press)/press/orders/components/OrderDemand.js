import compute_press_demand from "@/app/utils/compute_press_demand";
import GroupDemand from "./GroupDemand";
async function OrderDemand({ orderProduction, orderDetails }) {
  const { totalWeight, totalLength, thickness, demand } = await compute_press_demand(
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
        <b  className="flex flex-col gap-2 my-2 py-1 w-fit border-y border-black">{totalWeight}g Total</b>
        <GroupDemand demand={demand} totalLength={totalLength} thickness={thickness}/>
    </>
  );
}

export default OrderDemand;
