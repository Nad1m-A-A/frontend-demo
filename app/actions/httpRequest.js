"use server";
import { revalidatePath } from "next/cache";

export default async function httpRequest(
  endpoints,
  method = "GET",
  paths = [],
  bodies = []
) {
  try {
    const responses = await Promise.all(
      endpoints.map((endpoint, index) =>
        fetch(endpoint, {
          body: JSON.stringify(bodies[index]),
          method,
          headers: { "Content-Type": "application/json" },
        })
      )
    );

    paths.forEach((path) => {
      revalidatePath(path);
    });

    return await Promise.all(responses.map((response) => response.json()));
  } catch (error) {
    console.error("Error fetching data:", error);
    console.error({ message: error.message });
    throw error;
  }
}
