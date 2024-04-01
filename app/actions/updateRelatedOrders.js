"use server";
import replace_object_key from "../utils/replace_object_key";
import httpRequest from "./httpRequest";
const ENDPOINT = process.env.ENDPOINT;

export default async function updateRelatedOrders(inputs, shapeName) {
  try {
    const [orders] = await httpRequest([`${ENDPOINT}orders`]);
    const relatedOrders = orders.filter(
      (order) => order.details[shapeName] !== undefined
    );

    relatedOrders.map(async (order) => {
      const updatedDetails = replace_object_key(
        order.details,
        shapeName,
        inputs.name
      );
      const updatedProduction = replace_object_key(
        order.production,
        shapeName,
        inputs.name
      );

      const [orderDetailsFeedback, orderProductionFeedback] = await httpRequest(
        [
          `${ENDPOINT}orders/${order._id}`,
          `${ENDPOINT}orders/${order._id}/production`,
        ],
        "PATCH",
        [
          "/press/orders",
          `/press/orders/${order._id}`,
          "/press/orders/production",
        ],
        [updatedDetails, updatedProduction]
      );

      console.log(orderDetailsFeedback);
      console.log(orderProductionFeedback);
    });
  } catch (error) {
    console.error({ message: error.message });
    throw error;
  }
}
