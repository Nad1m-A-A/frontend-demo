import httpRequest from "@/app/actions/httpRequest";
import OrderEditor from "../components/OrderEditor";

async function OrderPage({ params }) {
  const [order] = await httpRequest([
    `http://localhost:5000/orders/${params.orderId}`
  ]);
  return (
    <div className="page">
      <h3>Edit Order</h3>
      <OrderEditor order={order} />
    </div>
  );
}

export default OrderPage;
