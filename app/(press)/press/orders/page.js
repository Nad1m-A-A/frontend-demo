import OrdersList from "./components/OrdersList";
import AddPressOrder from "./components/AddPressOrder";
import httpRequest from "@/app/actions/httpRequest";
async function OrdersPage() {
  const ENDPOINT = process.env.ENDPOINT;
  const [orders, shapes] = await httpRequest([
    `${ENDPOINT}orders`,
    `${ENDPOINT}shapes`,
  ]);

  return (
    <div className="page">
      <h2>Orders</h2>
      <OrdersList orders={orders} />
      <AddPressOrder shapes={shapes} />
    </div>
  );
}

export default OrdersPage;
