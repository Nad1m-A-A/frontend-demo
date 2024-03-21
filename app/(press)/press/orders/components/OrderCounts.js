function OrderCounts({ props: { storeOrderHandler, selectedShapes } }) {
  return (
    <div id="order_counts" className="max-w-md mx-auto">
      <h4 className="m-0 text-lg font-semibold">Add Numbers</h4>
      <form action={storeOrderHandler} className="mt-4">
        {selectedShapes.map((shape, index) => (
          <label key={index} className="block mb-4">
            {shape.name}
            <input
              className="block border border-gray-300 rounded px-3 py-2 mt-1"
              name={shape.name}
              type="number"
              min={10}
              defaultValue={10}
              step="10"
            />
          </label>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Done
        </button>
      </form>
    </div>
  );
}

export default OrderCounts;
