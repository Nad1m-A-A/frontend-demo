function OrderCounts({
  props: { storeOrderHandler, setSelectedShapes, selectedShapes },
}) {
  const handleDeleteItem = (index) => {
    // Create a copy of selectedShapes array
    const updatedShapes = [...selectedShapes];
    updatedShapes.splice(index, 1);
    setSelectedShapes(updatedShapes);
  };

  return (
    <div id="order_counts" className="max-w-md mx-auto">
      <h4 className="m-0 text-lg font-semibold">Add Numbers</h4>
      <form action={storeOrderHandler} className="mt-4">
        {selectedShapes.map((shape, index) => (
          <label key={index} className="block mb-4">
            {shape.name}
            <input
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              name={shape.name}
              type="number"
              min={10}
              defaultValue={10}
              step="10"
            />
            {selectedShapes.length > 1 && (
              <span
                className="bg-red-500"
                onClick={() => handleDeleteItem(index)}
              >
                delete this item
              </span>
            )}
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
