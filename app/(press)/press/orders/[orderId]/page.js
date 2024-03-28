import OrderEditor from "../components/OrderEditor";

async function OrderPage({ params }) {
  const OrderResponse = await fetch(
    `http://localhost:5000/orders/${params.orderId}`
  );
  const order = await OrderResponse.json();
  console.log("order",order);
  return (
    <div className="page">
      <h3>Edit Order</h3>
      <OrderEditor order={order} />
    </div>
  );
}

export default OrderPage;
