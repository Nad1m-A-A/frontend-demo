export async function GET(req) {
    const response = await fetch("http://localhost:5000/shapes");
    const data = await response.json();
    return Response.json(data);
}