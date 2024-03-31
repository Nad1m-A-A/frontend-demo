import DeleteOrder from "../components/DeleteOrder";
import Link from "next/link";
import OrderDemand from "./OrderDemand";

async function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="bg-blue-200 w-1/3 m-auto flex-col flex">
      {orders.map(({ _id, name, details, production }, index) => (
        <div key={index} id="order">
          <h4>{name}</h4>
          <ul className="flex justify-between">
            <div id="order_details">
              {Object.entries(details).map(([key, value], index) => (
                <li key={index}>
                  <div>
                    {key}: {value}
                  </div>
                </li>
              ))}
            </div>
            <div id="order_demand">
              <OrderDemand orderProduction={production} orderDetails={details}/>
            </div>
          </ul>
          <DeleteOrder orderId={_id} />
          <Link href={`http://localhost:3000/press/orders/${_id}`}>Edit</Link>
        </div>
      ))}
      {orders.length === 0 && <div>No orders available</div>}
    </div>
  );
}

export default OrdersList;
