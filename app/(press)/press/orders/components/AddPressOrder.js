"use client";
import { useState } from "react";
import capture_form_values from "@/app/utils/capture_form_values";
import storeOrder from "@/app/actions/storeOrder";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";

function AddPressOrder({ shapes }) {
  const [availableShapes, setAvailableShapes] = useState(shapes);
  const [selectedShapes, addSelectedShape] = useState([]);
  const [orderName, setOrderName] = useState("");
  const [step, setStep] = useState(1);

  const getOrderName = (formValues) => {
    const inputs = capture_form_values(formValues);
    setOrderName(inputs.name);
    setStep(2);
  };

  const getOrderShape = (e) => {
    const shapeName = e.target.innerHTML;
    addSelectedShape((prev) => [...prev, { name: shapeName }]);
    const remainingShapes = availableShapes.filter(
      (item) => item.name !== shapeName
    );
    setAvailableShapes(remainingShapes);
  };

  const storeOrderHandler = async (formValues) => {
    const inputs = capture_form_values(formValues);

    const order = {
      name: orderName || undefined,
      details: inputs,
      production: Object.fromEntries(
        Object.keys(inputs).map((key) => [key, "0"])
      ),
    };
    setAvailableShapes(shapes);
    addSelectedShape([]);
    setOrderName("");

    const feedback = await storeOrder(order);
    if (feedback.success) setStep(1);
    console.log(feedback);
  };

  return (
    <>
      <div id="order_creator" className="max-w-md mx-auto">
        <h3>New Order</h3>
        {step === 1 && <OrderName getOrderName={getOrderName} />}
        {step === 2 && (
          <OrderShapes
            props={{ availableShapes, selectedShapes, getOrderShape }}
            setStep={setStep}
          />
        )}
        {step === 3 && (
          <OrderCounts props={{ storeOrderHandler, selectedShapes }} />
        )}
      </div>
    </>
  );
}

export default AddPressOrder;
