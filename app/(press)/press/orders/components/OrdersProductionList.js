import OrderProduction from "./OrderProduction";

function OrdersProductionList({ orders }) {
  return (
    <div className="list" id="orders_production_list">
      {orders.reverse().map((order, index) => (
        <OrderProduction order={order} key={index} />
      ))}
      {orders.length === 0 && <div className="text-center">No orders available</div>}
    </div>
  );
}

export default OrdersProductionList;
