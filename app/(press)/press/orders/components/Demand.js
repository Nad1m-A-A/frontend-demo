import compute_press_demand from "@/app/utils/compute_press_demand";
async function Demand({ orderProduction, orderDetails }) {
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
      {demand.map(({ weight }, index) => (
        <div key={index}>
          {weight <= 0 && <h5>order complete</h5>}
          {weight > 0 && `${weight}g /${shapes[index].width}mm`}
        </div>
      ))}
    </>
  );
}

export default Demand;
