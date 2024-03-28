"use server";
export default async function getData(endpoints) {
  try {
    const responses = await Promise.all(
      endpoints.map((endpoint) => fetch(endpoint))
    );

    return await Promise.all(responses.map((response) => response.json()));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
