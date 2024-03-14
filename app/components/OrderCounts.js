function OrderCounts({ props: { storeOrder, order } }) {
  return (
    <div id="order_counts">
      <h4 className="m-0">add numbers</h4>
      <form method="post" onSubmit={storeOrder}>
        {order.map((shape, index) => (
          <label key={index}>
            {shape.name}
            <input
              className="block"
              name={shape.name}
              type="number"
              min={10}
              defaultValue={10}
              step="10"
            />
          </label>
        ))}
        <button type="submit">Done</button>
      </form>
    </div>
  );
}

export default OrderCounts;
