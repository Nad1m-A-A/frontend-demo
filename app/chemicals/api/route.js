export async function GET() {
  const response = await fetch("http://localhost:5000/chemicals");
  const data = await response.json();
  return Response.json(data);
}

