import deleteOrder from "@/app/actions/deleteOrder";
import Link from "next/link";

function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="bg-blue-200 w-full flex-col flex">
      {orders.map(({ _id, name, details }, index) => (
        <div key={index}>
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
          <form
            action={ async () => {
              "use server";
              const feedback = await deleteOrder(_id);
              console.log(feedback);
            }}
          >
            <button type="submit">Delete</button>
          </form>
          <Link href={`http://localhost:3000/press/orders/${_id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default OrdersList;
