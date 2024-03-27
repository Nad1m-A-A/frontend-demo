async function Demand({ orderProduction, orderDetails }) {
  const alloyResponse = await fetch("http://localhost:5000/alloy");
  const { details: defaultAlloyDetails } = await alloyResponse.json();
  const shapesResponse = await fetch("http://localhost:5000/shapes");
  const shapes = await shapesResponse.json();

  const demand = [];

  for (const key in orderProduction) {
    const shape = shapes.find((shape) => shape.name === key);
    if (shape) {
      const mDemand =
        (parseFloat(orderDetails[key] - orderProduction[key]) * shape.length) /
        1000; //@ 1000 is: m -> cm
      const alloyValue = shape.width / defaultAlloyDetails.width;
      const alloyWeight = alloyValue * defaultAlloyDetails.weight;
      const gDemand =
        (mDemand * alloyWeight) / defaultAlloyDetails.thicklen[shape.thickness];

      demand.push({
        length: mDemand,
        weight: gDemand,
      });
    }
  }
  return (
    <>
      {demand.map(({ length, weight }, index) => (
        <li key={index}>
          {length === 0 && <h5>order complete</h5>}
          {length !== 0 && `${weight}g /{shapes[index].width}mm /{length}m`}
        </li>
      ))}
    </>
  );
}

export default Demand;
