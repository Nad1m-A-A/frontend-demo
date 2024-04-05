import httpRequest from "@/app/actions/httpRequest";
const ENDPOINT = process.env.ENDPOINT;
const MM_TO_CM = 10;
const CM_TO_M = 100;
const compute_press_demand = async (orderProduction, orderDetails) => {
  const [{ details: defaultAlloyDetails }, shapes] = await httpRequest([
    `${ENDPOINT}alloy`,
    `${ENDPOINT}shapes`,
  ]);
  const demand = [];

  for (const key in orderProduction) {
    const shape = shapes.find((shape) => shape.name === key);
    if (shape) {
      const cmDemand =
        ((orderDetails[key] - orderProduction[key]) * shape.length) / MM_TO_CM;
      const alloyValue = shape.width / defaultAlloyDetails.width;
      const alloyWeight = alloyValue * defaultAlloyDetails.weight;
      const gDemand =
        ((cmDemand / CM_TO_M) * alloyWeight) /
        defaultAlloyDetails.thicklen[shape.thickness];
        console.log(shape.thickness);
        console.log(defaultAlloyDetails.thicklen[shape.thickness]);
      demand.push({
        length: shape.type === "single" ? cmDemand : (cmDemand * 2).toFixed(),
        weight:
          shape.type === "single" ? gDemand.toFixed() : (gDemand * 2).toFixed(),
        pieces: orderDetails[key] - orderProduction[key],
        width: shape.width,
      });
    }
  }
  return demand;
};

export default compute_press_demand;
