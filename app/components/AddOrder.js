"use client";

import { useState } from "react";
import capture_form_values from "../utils/capture_form_values";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";

function AddPressOrder({ shapes }) {
  const [availableShapes, setAvailableShapes] = useState(shapes);
  const [order, setOrder] = useState([]);
  const [step, setStep] = useState(1);
  const [addingOrder, setAddingOrder] = useState(false);
  const [orderName, setOrderName] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    const formValues = capture_form_values(e);
    setOrderName(formValues.name);
    setStep(2);
  };

  const addToOrder = (e) => {
    const shapeName = e.target.innerHTML;
    setOrder((prev) => [...prev, { name: shapeName }]);
    const remainingShapes = availableShapes.filter(
      (item) => item.name !== shapeName
    );
    setAvailableShapes(remainingShapes);
  };

  const stepHandler = (step) => {
    setStep(step);
  };

  const storeOrder = (e) => {
    e.preventDefault();
    const formValues = capture_form_values(e);
    const order = {
      name: orderName || undefined,
      details: formValues,
    };
  };

  return (
    <>
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
          {step === 1 && <OrderName nameHandler={nameHandler} />}
          {step === 2 && (
            <OrderShapes
              props={{ availableShapes, order, addToOrder, stepHandler }}
            />
          )}
          {step === 3 && <OrderCounts props={{ storeOrder, order }} />}
        </div>
      )}
    </>
  );
}

export default AddPressOrder;
