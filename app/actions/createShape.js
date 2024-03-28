"use server";
import { revalidatePath } from "next/cache";

export default async (inputs) => {
  try {
    const sendShape = await fetch("http://localhost:5000/shapes", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/press/shapes");
    const feedback = await sendShape.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
