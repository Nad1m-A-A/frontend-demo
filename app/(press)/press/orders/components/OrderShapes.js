function OrderShapes({
  props: { availableShapes, selectedShapes, getOrderShape },
  setStep,
}) {
  return (
    <div id="order_shapes" className="max-w-md mx-auto">
      <h4 className="m-0 text-lg font-semibold">Choose Shapes</h4>
      {availableShapes.map((shape, index) => (
        <button
          key={index}
          onClick={getOrderShape}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2"
        >
          {shape.name}
        </button>
      ))}
      <button
        disabled={!selectedShapes.length}
        onClick={() => setStep(3)}
        className={`bg-blue-600 text-white px-4 py-2 rounded mt-4 ${
          !selectedShapes.length ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default OrderShapes;
