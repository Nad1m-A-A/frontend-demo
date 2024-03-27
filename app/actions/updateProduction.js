"use server";
import { revalidatePath } from "next/cache";

export default async (inputs, id) => {
  try {
    const updateProduction = await fetch(
      `http://localhost:5000/orders/${id}/production`,
      {
        method: "PATCH",
        body: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidatePath("/press/orders");
    revalidatePath("/press/orders/production");
    revalidatePath(`/press/orders/${id}`);
    const feedback = await updateProduction.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
