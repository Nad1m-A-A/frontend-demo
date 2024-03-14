"use client";

import { useState } from "react";
import capture_form_values from "../utils/capture_form_values";

function AddPressOrder({ shapes }) {
  const [orderOptions, setOrderOptions] = useState(shapes);
  const [order, setOrder] = useState([]);
  const [step, setStep] = useState(1);
  const [addingOrder, setAddingOrder] = useState(false);
  const [orderName, setOrderName] = useState("");

  const addToOrder = (e) => {
    const shapeName = e.target.innerHTML;
    setOrder((prev) => [...prev, { name: shapeName }]);
    const remainingShapes = orderOptions.filter(
      (item) => item.name !== shapeName
    );
    setOrderOptions(remainingShapes);
  };

  const storeOrder = (e) => {
    e.preventDefault();
    const formValues = capture_form_values(e);
    const order = {
      name: orderName || undefined,
      details: formValues,
    };
    console.log(order);
  };

  const nameHandler = (e) => {
    e.preventDefault();
    const formValues = capture_form_values(e);
    setOrderName(formValues.name);
    setStep(2);
  }
  return (
    <div>
      <div
        id="add_order"
        className="inline-flex items-center gap-2"
        onClick={() => setAddingOrder((prev) => !prev)}
      >
        <h3>ADD ORDER</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </div>
      {addingOrder && (
        <div id="order_creator">
          {step === 1 && (
            <div id="order_name">
              <h4 className="m-0">choose name</h4>
              <form method="post" onSubmit={nameHandler}>
                  <label>
                    Order name
                    <input
                      className="block"
                      name="name"
                    />
                  </label>
                <button type="submit">Next</button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div id="order_options">
              <h4 className="m-0">Choose shapes</h4>
              {orderOptions.map((shape, index) => (
                <button key={index} onClick={addToOrder}>
                  {shape.name}
                </button>
              ))}
              <button disabled={!order.length} onClick={() => setStep(3)}>
                Next
              </button>
            </div>
          )}
          {step === 3 && (
            <div id="order_counts">
              <h4 className="m-0">add numbers</h4>
              <form method="post" onSubmit={storeOrder}>
                {order.map((item, index) => (
                  <label key={index}>
                    {item.name}
                    <input
                      className="block"
                      name={item.name}
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
          )}
        </div>
      )}
    </div>
  );
}

export default AddPressOrder;
