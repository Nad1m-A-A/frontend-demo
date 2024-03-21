function OrdersList({ orders }) {
  return (
    <div id="orders_list" className="">
      {orders.map(({ name, details }, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h4 className="text-lg font-semibold mb-2">{name}</h4>
          <ul>
            {Object.entries(details).map(([key, value]) => (
              <li key={key} className="flex gap-3 items-center">
                <div className="flex-1">
                  {key}: {value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrdersList;
