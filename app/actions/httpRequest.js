"use server";

import { revalidatePath, revalidateTag } from "next/cache";
const ENDPOINT = process.env.ENDPOINT;

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
          next: { revalidate: 5 },
        })
      )
    );

    // revalidateTag('orders')
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
