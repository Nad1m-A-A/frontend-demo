export default (orderProduction, orderDetails, defaultAlloyDetails, shapes) => {
  const demand = [];

  for (const key in orderProduction) {
    const shape = shapes.find((shape) => shape.name === key);
    if (shape) {
      const cmDemand =
        (orderDetails[key] - orderProduction[key]) * shape.length /
        10;
      const alloyValue = shape.width / defaultAlloyDetails.width;
      const alloyWeight = alloyValue * defaultAlloyDetails.weight;
      const gDemand =
        (cmDemand * alloyWeight) /
        defaultAlloyDetails.thicklen[shape.thickness] /
        100;
      demand.push({
        length: shape.type === "single" ? cmDemand : cmDemand * 2,
        weight: gDemand,
        pieces: orderDetails[key] - orderProduction[key],
      });
    }
  }

  return demand;
};
