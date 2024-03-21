"use client";
import { useEffect, useState } from "react";
import capture_form_values from "@/app/utils/capture_form_values";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";
import useHttp from "@/app/utils/useHttp";
import storeOrder from "@/app/actions/storeOrder";

function AddPressOrder({ shapes }) {
  const [availableShapes, setAvailableShapes] = useState(shapes);
  const [selectedShapes, addSelectedShape] = useState([]);
  const [orderName, setOrderName] = useState("");
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getOrderName = (formValues) => {
    const inputs = capture_form_values(formValues);
    console.log(inputs);
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
    };
    console.log(order);
    const feedback = await storeOrder(order);
    if (feedback.success) setStep(1);
    console.log(feedback);
  };

  return (
    <>
      <div id="order_creator" className="max-w-md mx-auto">
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
      {successMessage && (
        <div className="bg-green-200 text-green-800 py-2 px-4 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-200 text-red-800 py-2 px-4 rounded">
          {errorMessage}
        </div>
      )}
    </>
  );
}

export default AddPressOrder;
