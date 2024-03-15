export async function GET(req) {
  const response = await fetch("http://localhost:5000/shapes");
  const data = await response.json();

  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();

  const response = await fetch("http://localhost:5000/shapes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return Response.json(data);
}
