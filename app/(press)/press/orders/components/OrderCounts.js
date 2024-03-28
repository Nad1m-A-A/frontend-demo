function OrderCounts({
  props: { storeOrderHandler, setSelectedShapes, selectedShapes },
}) {
  const handleDeleteShape = (index) => {
    setSelectedShapes(selectedShapes.splice(index, 1));
  };

  return (
    <div id="order_counts" className="max-w-md mx-auto">
      <h4 className="m-0 text-lg font-semibold">Add Numbers</h4>
      <form action={storeOrderHandler} className="mt-4">
        {selectedShapes.map((shape, index) => (
          <label key={index} className="block mb-4">
            {shape.name}
            {": "}
            <input
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              name={shape.name}
              type="number"
              min={10}
              defaultValue={10}
              step="10"
            />
            {selectedShapes.length > 1 && (
              <svg
                onClick={() => handleDeleteShape(index)}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
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
