"use server";
import { revalidatePath } from "next/cache";
import updateRelatedOrders from "./updateRelatedOrders";

export default async (inputs, id, shapeName) => {
  try {
    await updateRelatedOrders(inputs, shapeName);
    const sendShape = await fetch(`http://localhost:5000/shapes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/press/shapes");
    revalidatePath(`/press/shapes/${id}`);
    revalidatePath(`/press/orders`);
    revalidatePath(`/press/orders/production`);
    const feedback = await sendShape.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
