import OrdersList from "./components/OrdersList";
import AddPressOrder from "./components/AddPressOrder";
import httpRequest from "@/app/actions/httpRequest";
async function OrdersPage() {
  const [orders, shapes] = await httpRequest([
    "http://localhost:5000/orders",
    "http://localhost:5000/shapes",
  ]);

  return (
    <div className="page">
      <h2>Orders</h2>
      <div>
        <OrdersList orders={orders} />
        <AddPressOrder shapes={shapes} />
      </div>
    </div>
  );
}

export default OrdersPage;
