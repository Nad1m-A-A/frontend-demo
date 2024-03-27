import OrderProduction from "./OrderProduction";

function OrdersProductionList({ orders }) {
  return (
    <div id="orders_production_list" className="">
      {orders.map((order, index) => (
        <OrderProduction order={order} key={index} />
      ))}
      {orders.length === 0 && <div>No orders available</div>}
    </div>
  );
}

export default OrdersProductionList;
