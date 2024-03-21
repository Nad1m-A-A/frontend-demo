"use server";
import { revalidatePath } from "next/cache";

export default async (order) => {
  try {
    const sendOrder = await fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/press/orders");
    const feedback = await sendOrder.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
