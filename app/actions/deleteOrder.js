"use server";
import { revalidatePath } from "next/cache";

export default async (id) => {
  try {
    const deleteOrder = await fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/press/orders");
    revalidatePath("/press/orders/production");
    const feedback = await deleteOrder.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
