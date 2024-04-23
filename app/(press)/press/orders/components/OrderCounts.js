import Button from "@/app/components/Button";

function OrderCounts({
  props: {
    cancelOrderHandler,
    storeOrderHandler,
    setSelectedShapes,
    selectedShapes,
  },
}) {
  const handleDeleteShape = (index) => {
    const updatedShapes = [...selectedShapes];
    updatedShapes.splice(index, 1);
    setSelectedShapes(updatedShapes);
  };

  return (
    <div id="order_counts">
      <h4>Add Numbers</h4>
      <form className="flex flex-col gap-2" action={storeOrderHandler}>
        {selectedShapes.map((shape, index) => (
          <div key={index} className="flex items-center gap-2">
            <label>
              {shape.name}
              {": "}
              <input
                name={shape.name}
                type="number"
                min={0}
                defaultValue={10}
              />
            </label>
            {selectedShapes.length > 1 && (
              <svg
                onClick={() => handleDeleteShape(index)}
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="delete_icon"
              >
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            )}
          </div>
        ))}
        <Button className="finish_button" text="Done" />
      </form>
      <button
        onClick={() => cancelOrderHandler()}
        className="delete_button mt-2"
      >
        Cancel
      </button>
    </div>
  );
}

export default OrderCounts;
