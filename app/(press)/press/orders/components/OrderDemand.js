import compute_press_demand from "@/app/utils/compute_press_demand";
async function OrderDemand({ orderProduction, orderDetails }) {
  const demand = await compute_press_demand(orderProduction, orderDetails);
  return (
    <>
      {demand.map(({ weight, width }, index) => (
        <div key={index}>
          {weight <= 0 && <h5>order complete</h5>}
          {weight > 0 && `${weight}g /${width}mm`}
        </div>
      ))}
    </>
  );
}

export default OrderDemand;
