import OrdersList from "./components/OrdersList";
import AddPressOrder from "./components/AddPressOrder";
import EditableOrdersList from "./components/EditableOrdersList";

async function page() {
  const OrdersResponse = await fetch("http://localhost:5000/orders");
  const orders = await OrdersResponse.json();
  const shapesResponse = await fetch("http://localhost:5000/shapes");
  const shapes = await shapesResponse.json(); //! Maybe this could be turned into an action, that receives dynamic values;

  return (
    <div>
      <AddPressOrder shapes={shapes} />
      <div className="flex justify-center gap-60">
        <OrdersList orders={orders} />
        <EditableOrdersList orders={orders} />
      </div>
    </div>
  );
}

export default page;
