"use client";
import { useState } from "react";
import capture_form_values from "@/app/utils/capture_form_values";
import httpRequest from "@/app/actions/httpRequest";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";

function AddPressOrder({ shapes }) {
  const [availableShapes, setAvailableShapes] = useState(shapes);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [orderName, setOrderName] = useState("");
  const [step, setStep] = useState(1);

  const getOrderName = (formValues) => {
    const inputs = capture_form_values(formValues);
    setOrderName(inputs.name);
    setStep(2);
  };

  const getOrderShape = (e) => {
    const shapeName = e.target.innerHTML;
    setSelectedShapes((prev) => [...prev, { name: shapeName }]);
    const remainingShapes = availableShapes.filter(
      (item) => item.name !== shapeName
    );
    setAvailableShapes(remainingShapes);
  };

  const storeOrderHandler = async (formValues) => {
    const inputValues = capture_form_values(formValues);
    const inputs = {
      name: orderName || undefined,
      details: inputValues,
      production: Object.fromEntries(
        Object.keys(inputValues).map((key) => [key, 0])
      ),
    };

    setAvailableShapes(shapes);
    setSelectedShapes([]);
    setOrderName("");

    const [feedback] = await httpRequest(
      ["http://localhost:5000/orders"],
      "POST",
      ["/press/orders", "/press/orders/production"],
      [inputs]
    );
    if (feedback.success) setStep(1);
    console.log(feedback);
  };

  return (
    <>
      {shapes.length !== 0 && (
        <div id="order_creator" className="self-start">
          <h3>New Order</h3>
          {step === 1 && <OrderName getOrderName={getOrderName} />}
          {step === 2 && (
            <OrderShapes
              props={{ availableShapes, selectedShapes, getOrderShape }}
              setStep={setStep}
            />
          )}
          {step === 3 && (
            <OrderCounts
              props={{ storeOrderHandler, setSelectedShapes, selectedShapes }}
            />
          )}
        </div>
      )}
    </>
  );
}

export default AddPressOrder;
