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
    <div className="flex">
      {Object.entries(demand[index]).map(([key, value], itemIndex) => (
        <div className="min-w-fit" key={itemIndex}>
          {value > 0 && (
            <span>
              {key === "weight"
                ? ""
                : key === "length"
                ? `${value}cm /`
                : `${value}ps`}
            </span>
          )}
          {key === "length" && value <= 0 && <h5>Done</h5>}
        </div>
      ))}
    </div>
  );
}

export default ProductionDemand;
