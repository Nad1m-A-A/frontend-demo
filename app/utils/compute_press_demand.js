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
  let totalWeight = 0;
  let totalLength = 0;
  let thickness;

  for (const key in orderProduction) {
    const shape = shapes.find((shape) => shape.name === key);
    if (shape) {
      const cmDemand = Number(
        (
          ((orderDetails[key] - orderProduction[key]) * shape.length) /
          MM_TO_CM
        ).toFixed()
      );
      const alloyValue = shape.width / defaultAlloyDetails.width;
      const alloyWeight = alloyValue * defaultAlloyDetails.weight;
      const gDemand = Number(
        (
          ((cmDemand / CM_TO_M) * alloyWeight) /
          defaultAlloyDetails.thicklen[shape.thickness]
        ).toFixed()
      );
      totalWeight += shape.type === "full" ? gDemand : gDemand * 2;
      thickness = shape.thickness;
      demand.push({
        length: shape.type === "full" ? cmDemand : cmDemand * 2,
        weight: shape.type === "full" ? gDemand : gDemand * 2,
        width: shape.width,
        pieces: orderDetails[key] - orderProduction[key],
      });
    }
  }
  return { totalWeight, thickness, demand };
};

export default compute_press_demand;
