"use server";
import replace_object_key from "../utils/replace_object_key";
import httpRequest from "./httpRequest";
export default async (inputs, shapeName) => {
  try {
    const [orders] = await httpRequest(["http://localhost:5000/orders"]);
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

        const [orderDetailsFeedback] = await httpRequest(
          [`http://localhost:5000/orders/${order._id}`],
          "PATCH",
          [
            "/press/orders",
            `/press/orders/${order._id}`,
            "/press/orders/production",
          ],
          updatedDetails
        );
        const [orderProductionFeedback] = await httpRequest(
          [`http://localhost:5000/orders/${order._id}/production`],
          "PATCH",
          [
            "/press/orders",
            `/press/orders/${order._id}`,
            "/press/orders/production",
          ],
          updatedProduction
        );

        console.log(orderDetailsFeedback);
        console.log(orderProductionFeedback);
      })
  } catch (error) {
    console.error({ message: error.message });
    throw error;
  }
};
