import OrdersList from "./components/OrdersList";
import AddPressOrder from "./components/AddPressOrder";

async function OrdersPage() {
  const OrdersResponse = await fetch("http://localhost:5000/orders");
  const orders = await OrdersResponse.json();
  const shapesResponse = await fetch("http://localhost:5000/shapes");
  const shapes = await shapesResponse.json(); //! Maybe this could be turned into an action, that receives dynamic values;
  return (
    <div className="page">
      <h3>Orders</h3>
      <OrdersList orders={orders} />
      <AddPressOrder shapes={shapes} />
    </div>
  );
}

export default OrdersPage;
