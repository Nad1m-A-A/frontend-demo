import httpRequest from "@/app/actions/httpRequest";
import compute_press_demand from "@/app/utils/compute_press_demand";
async function OrderDemand({ orderProduction, orderDetails }) {
  const ENDPOINT = process.env.ENDPOINT;
  const [alloy, shapes] = await httpRequest([
    `${ENDPOINT}alloy`,
    `${ENDPOINT}shapes`,
  ]);

  const demand = compute_press_demand(
    orderProduction,
    orderDetails,
    alloy.details,
    shapes
  );
  return (
    <>
      {demand.map(({ weight }, index) => (
        <div key={index}>
          {weight <= 0 && <h5>order complete</h5>}
          {weight > 0 && `${weight}g /${shapes[index].width}mm`}
        </div>
      ))}
    </>
  );
}

export default OrderDemand;
