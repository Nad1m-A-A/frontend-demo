import DeleteOrder from "../components/DeleteOrder";
import Link from "next/link";
import OrderDemand from "./OrderDemand";

async function OrdersList({ orders }) {
  return (
    <div
      id="orders_list"
      className="flex flex-col gap-10"
    >
      {orders.reverse().map(({ _id, name, details, production }, index) => (
        <div
          key={index}
          id="order"
          className="card"
        >
          <h4>{name}</h4>
          <ul className="flex justify-between">
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
          <Link
            className="p-0 bg-transparent hover:bg-transparent"
            href={`http://localhost:3000/press/orders/${_id}`}
          >
            <button>Edit</button>
          </Link>
        </div>
      ))}
      {orders.length === 0 && <div>No orders available</div>}
    </div>
  );
}

export default OrdersList;
