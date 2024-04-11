import httpRequest from "@/app/actions/httpRequest";
const ENDPOINT = process.env.ENDPOINT;
const CM_TO_M = 100;

const compute_group_demand = async (groupItems, thickness) => {
  const [{ details: defaultAlloyDetails }] = await httpRequest([
    `${ENDPOINT}alloy`,
  ]);

  const greatestWidth = groupItems.reduce((startingWidth, currentItem) => {
    return currentItem.width > startingWidth
      ? currentItem.width
      : startingWidth;
  }, 0);

  const totalLength = groupItems.reduce((startingLength, currentItem) => {
    return (startingLength += currentItem.length);
  }, 0);

  const alloyWeight =
    (greatestWidth / defaultAlloyDetails.width) * defaultAlloyDetails.weight;

  const gDemand = Number(
    (
      ((totalLength / CM_TO_M) * alloyWeight) /
      defaultAlloyDetails.thicklen[thickness]
    ).toFixed()
  );

  return { total: gDemand, width: greatestWidth };
};
export default compute_group_demand;
