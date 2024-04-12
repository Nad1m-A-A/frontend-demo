import Link from "next/link";
import OrderDemand from "./OrderDemand";
import Card from "@/app/components/Card";
import DeleteListItem from "@/app/components/DeleteListItem";
async function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="list">
      {orders.reverse().map(({ _id, name, details, production }, index) => (
        <Card key={index}>
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
          <DeleteListItem
            collection="orders"
            itemId={_id}
            paths={["/press/orders", "/press/orders/production"]}
          />
          <Link className="w-fit" href={`/press/orders/${_id}`}>
            <button className="main_button">Edit</button>
          </Link>
        </Card>
      ))}
      {orders.length === 0 && (
        <div className="text-center">No orders available</div>
      )}
    </div>
  );
}

export default OrdersList;
