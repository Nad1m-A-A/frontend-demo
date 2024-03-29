import compute_press_demand from "@/app/utils/compute_press_demand";
async function ProductionDemand({ orderProduction, orderDetails, index }) {
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
      {Object.entries(demand[index]).map(([key, value]) => (
        <div key={index}>
          {key === "weight"
            ? ""
            : key === "length"
            ? `${value}cm`
            : `${value}ps`}
        </div>
      ))}
    </>
  );
}

export default ProductionDemand;
