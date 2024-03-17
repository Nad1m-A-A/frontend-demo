import generate_keys_array from "@/app/utils/generate_keys_array";

function Orders({ orders }) {
  return (
    <div id="orders">
      {orders.map(({ name, details }, index) => {
        return (
          <ul key={index}>
            <h4>{name}</h4>
            {Object.entries(details).map(([key, value]) => (
              <li>{key}:{value}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export default Orders;
