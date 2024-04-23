import compute_press_demand from "@/app/utils/compute_press_demand";
async function ProductionDemand({ orderProduction, orderDetails, index }) {
  const { demand } = await compute_press_demand(orderProduction, orderDetails);
  return (
    <div className="flex">
      {Object.entries(demand[index]).map(([key, value], itemIndex) => (
        <div className="min-w-fit" key={itemIndex}>
          {Object.entries(demand[index])[0][1] > 0 && ( //! 1-This refers to the value on the demand length of the current Item. 2-It was referred to in order to hide the width upon finishing the order. -3- The width does not change when updating the order, so the length was chosen.
            <span>
              {key === "weight"
                ? ""
                : key === "width"
                ? `${value} /`
                : key === "length"
                ? `${value} /`
                : `${value}`}
            </span>
          )}
          {key === "length" && value <= 0 && <h5>Done</h5>}
        </div>
      ))}
    </div>
  );
}

export default ProductionDemand;
