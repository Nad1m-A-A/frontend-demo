"use server";

import { revalidatePath } from "next/cache";

export default async function httpRequest(
  endpoints,
  method = "GET",
  paths = [],
  inputs = {}
) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (method !== "GET" && inputs) {
      options.body = JSON.stringify(inputs);
    }
    const responses = await Promise.all(
      endpoints.map((endpoint) => fetch(endpoint, options))
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
