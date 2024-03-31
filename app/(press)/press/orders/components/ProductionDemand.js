import httpRequest from "@/app/actions/httpRequest";
import compute_press_demand from "@/app/utils/compute_press_demand";
async function ProductionDemand({ orderProduction, orderDetails, index }) {
  const [alloy, shapes] = await httpRequest([
    "http://localhost:5000/alloy",
    "http://localhost:5000/shapes",
  ]);

  const demand = compute_press_demand(
    orderProduction,
    orderDetails,
    alloy.details,
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
