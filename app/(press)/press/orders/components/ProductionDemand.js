import compute_press_demand from "@/app/utils/compute_press_demand";
async function ProductionDemand({ orderProduction, orderDetails }) {
  const alloyResponse = await fetch("http://localhost:5000/alloy");
  const { details: defaultAlloyDetails } = await alloyResponse.json();
  const shapesResponse = await fetch("http://localhost:5000/shapes");
  const shapes = await shapesResponse.json();

  const demand = compute_press_demand(
    orderProduction,
    orderDetails,
    defaultAlloyDetails,
    shapes
  );
  return (
    <>
      {demand.map(({ length, weight }, index) => (
        <div key={index}>
          {length > 0 &&
            `${length}cm /${Object.keys(orderDetails).map(
              (key) => orderDetails[key] - orderProduction[key]
            )}ps`}
        </div>
      ))}
    </>
  );
}

export default ProductionDemand;
