import OrderProduction from "./OrderProduction";

function OrdersProductionList({ orders }) {
  return (
    <div className="w-full flex flex-col gap-10" id="orders_production_list">
      {orders.reverse().map((order, index) => (
        <OrderProduction order={order} key={index} />
      ))}
      {orders.length === 0 && <div>No orders available</div>}
    </div>
  );
}

export default OrdersProductionList;
