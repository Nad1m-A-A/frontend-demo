function OrderShapes({ props: { availableShapes, order, addToOrder}, setStep}) {
  return (
    <div id="order_shapes">
      <h4 className="m-0">Choose shapes</h4>
      {availableShapes.map((shape, index) => (
        <button key={index} onClick={addToOrder}>
          {shape.name}
        </button>
      ))}
      <button disabled={!order.length} onClick={() => setStep(3)}>
        Next
      </button>
    </div>
  );
}

export default OrderShapes;
