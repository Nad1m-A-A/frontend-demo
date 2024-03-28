import OrdersList from "./components/OrdersList";
import AddPressOrder from "./components/AddPressOrder";
import getData from "@/app/actions/getData";
async function OrdersPage() {
  const [orders, shapes] = await getData([
    "http://localhost:5000/orders",
    "http://localhost:5000/shapes",
  ]);

  return (
    <div className="page">
      <h3>Orders</h3>
      <OrdersList orders={orders} />
      <AddPressOrder shapes={shapes} />
    </div>
  );
}

export default OrdersPage;
