import httpRequest from "@/app/actions/httpRequest";
const ENDPOINT = process.env.ENDPOINT;
const CM_TO_M = 100;

const compute_group_demand = async (groupItems, totalLength, thickness) => {
  const [{ details: defaultAlloyDetails }] = await httpRequest([
    `${ENDPOINT}alloy`,
  ]);
  console.log(groupItems);
  const greatestWidth = groupItems.reduce((maxWidth, currentItem) => {
    return currentItem.width > maxWidth ? currentItem.width : maxWidth;
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
