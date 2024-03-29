"use server";
import editOrder from "./editOrder";
import updateProduction from "./updateProduction";

export default async (inputs, shapeName) => {
  try {
    const orderResponse = await fetch("http://localhost:5000/orders");
    const orders = await orderResponse.json();
    const ordersDetails = orders.filter(
      (order) => order.details && order.details[shapeName] !== undefined
    );

    await Promise.all(
      ordersDetails.map(async (order) => {
        const { [shapeName]: _, ...filteredDetails } = order.details;
        const newDetails = {
          [inputs.name]: order.details[shapeName],
          ...filteredDetails,
        };
        const orderDetailsFeedback = await editOrder(newDetails, order._id);
        console.log(orderDetailsFeedback);

        const { [shapeName]: __, ...filteredProduction } = order.production;
        const newProduction = {
          [inputs.name]: order.production[shapeName],
          ...filteredProduction,
        };
        console.log(newProduction);
        const orderProductionFeedback = await updateProduction(
          newProduction,
          order._id
        );
        console.log(orderProductionFeedback);
      })
    );
  } catch (error) {
    console.error({ message: error.message });
    throw error;
  }
};
