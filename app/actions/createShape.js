"use server";
import { revalidatePath } from "next/cache";
import capture_form_values from "../utils/capture_form_values";

export const createShape = async (formData) => {
  try {
    const inputs = capture_form_values(formData);
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
    return {message: error.message}
  }
};
