export default (orderProduction, orderDetails, defaultAlloyDetails, shapes) => {
  const demand = [];

  for (const key in orderProduction) {
    const shape = shapes.find((shape) => shape.name === key);
    if (shape) {
      const cmDemand =
        (parseFloat(orderDetails[key] - orderProduction[key]) * shape.length) /
        10; //@ mm -> cm
      const alloyValue = shape.width / defaultAlloyDetails.width;
      const alloyWeight = alloyValue * defaultAlloyDetails.weight;
      const gDemand =
        (cmDemand * alloyWeight) /
        defaultAlloyDetails.thicklen[shape.thickness] /
        100;

      demand.push({
        length: cmDemand,
        weight: gDemand,
      });
    }
  }

  return demand;
};
