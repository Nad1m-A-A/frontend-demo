export async function POST(req, res) {
  const body = await req.json()
  const response = await fetch("http://localhost:5000/pass-code/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userInput: body.userInput,
    }),
  });
  const data = await response.json();
  return Response.json(data);
}
