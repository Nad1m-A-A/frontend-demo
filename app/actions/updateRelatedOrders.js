"use server";
import replace_object_key from "../utils/replace_object_key";
import editOrder from "./editOrder";
import updateProduction from "./updateProduction";
export default async (inputs, shapeName) => {
  try {
    const orderResponse = await fetch("http://localhost:5000/orders");
    const orders = await orderResponse.json();
    const relatedOrders = orders.filter(
      (order) => order.details[shapeName] !== undefined
    );

    await Promise.all(
      relatedOrders.map(async (order) => {
        const newDetails = replace_object_key(
          order.details,
          shapeName,
          inputs.name
        );
        const newProduction = replace_object_key(
          order.production,
          shapeName,
          inputs.name
        );

        const orderDetailsFeedback = await editOrder(newDetails, order._id);
        const orderProductionFeedback = await updateProduction(
          newProduction,
          order._id
        );

        console.log(orderDetailsFeedback);
        console.log(orderProductionFeedback);
      })
    );
  } catch (error) {
    console.error({ message: error.message });
    throw error;
  }
};
