import DeleteOrder from "./DeleteOrder";
import Link from "next/link";
import OrderDemand from "./OrderDemand";
async function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="list">
      {orders.reverse().map(({ _id, name, details, production }, index) => (
        <div key={index} id="order" className="card relative">
          <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
            <div className="live_bg"></div>
          </div>
          <h4 className="relative ">{name}</h4>
          <ul className="relative flex justify-between">
            <div id="order_details">
              {Object.entries(details).map(([key, value], index) => (
                <li key={index}>
                  <div>
                    {key}: <span className="font-semibold">{value}</span>
                  </div>
                </li>
              ))}
            </div>
            <div id="order_demand">
              <OrderDemand
                orderProduction={production}
                orderDetails={details}
              />
            </div>
          </ul>
          <DeleteOrder orderId={_id} />
          <Link className="w-fit" href={`/press/orders/${_id}`}>
            <button className="main_button">Edit</button>
          </Link>
        </div>
      ))}
      {orders.length === 0 && (
        <div className="text-center">No orders available</div>
      )}
    </div>
  );
}

export default OrdersList;
