function OrderShapes({
  props: { availableShapes, selectedShapes, getOrderShape },
  setStep,
}) {
  return (
    <div id="order_shapes">
      <h4>Choose Shapes</h4>
      <div className="flex gap-2 flex-wrap">
        {availableShapes.map((shape, index) => (
          <button key={index} onClick={getOrderShape} className="plain_button">
            {shape.name}
          </button>
        ))}
        <button
          disabled={!selectedShapes.length}
          onClick={() => setStep(3)}
          className={` main_button ${
            !selectedShapes.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderShapes;
