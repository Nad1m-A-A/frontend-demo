import httpRequest from "@/app/actions/httpRequest";
import OrderEditor from "../components/OrderEditor";
const ENDPOINT = process.env.ENDPOINT;
async function OrderPage({ params }) {
  const [order] = await httpRequest([
    `${ENDPOINT}orders/${params.orderId}`
  ]);
  return (
    <div className="page">
      <OrderEditor order={order} />
    </div>
  );
}

export default OrderPage;
