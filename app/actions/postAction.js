"use server";
import { revalidatePath } from "next/cache";

export default async (endpoint, inputs, paths) => {
  try {
    const storedEntry = await fetch(`http://localhost:5000${endpoint}`, {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    paths.forEach(path => {
        revalidatePath(path);
    });
    const feedback = await storedEntry.json();
    return feedback;
  } catch (error) {
    return { message: error.message };
  }
};
