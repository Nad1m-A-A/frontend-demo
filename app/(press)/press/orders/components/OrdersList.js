import DeleteOrder from "../components/DeleteOrder";
import Link from "next/link";

function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="bg-blue-200 w-full flex-col flex">
      {orders.map(({ _id, name, details }, index) => (
        <div key={index} id="order">
          <h4>{name}</h4>
          <ul>
            {Object.entries(details).map(([key, value]) => (
              <li key={key}>
                <div>
                  {key}: {value}
                </div>
              </li>
            ))}
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
