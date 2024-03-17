import Orders from "./components/Orders";

async function page() {
  const response = await fetch("http://localhost:5000/orders");
  const orders = await response.json();

  return (
    <div>
      <Orders orders={orders} />
    </div>
  );
}

export default page;