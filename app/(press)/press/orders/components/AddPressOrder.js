"use client";
import { useState } from "react";
import capture_form_values from "@/app/utils/capture_form_values";
import httpRequest from "@/app/actions/httpRequest";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";
import match_string_to_array_items from "@/app/utils/match_string_to_array_items";
const ENDPOINT = process.env.ENDPOINT;

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
    const { isMatch, matchIndex } = match_string_to_array_items(
      selectedShapes,
      shapeName
    );
    e.target.classList.toggle("plain_button");
    e.target.classList.toggle("fancy_button");

    if (isMatch) {
      const updatedShapes = [...selectedShapes];
      updatedShapes.splice(matchIndex, 1);
      setSelectedShapes(updatedShapes);
      return;
    }
    setSelectedShapes((prev) => [...prev, { name: shapeName }]);
  };

  const storeOrderHandler = async (formValues) => {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${month}/${day}`;

    const inputValues = capture_form_values(formValues);
    const inputs = {
      name: orderName || formattedDate,
      details: inputValues,
      production: Object.fromEntries(
        Object.keys(inputValues).map((key) => [key, 0])
      ),
    };

    setAvailableShapes(shapes);
    setSelectedShapes([]);
    setOrderName("");

    const [feedback] = await httpRequest(
      [`${ENDPOINT}orders`],
      "POST",
      ["/press/orders", "/press/orders/production"],
      [inputs]
    );
    if (feedback.success) setStep(1);
    console.log(feedback);
  };

  const cancelOrderHandler = () => {
    setAvailableShapes(shapes);
    setSelectedShapes([]);
    setOrderName("");
    setStep(1);
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
              props={{
                cancelOrderHandler,
                storeOrderHandler,
                setSelectedShapes,
                selectedShapes,
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

export default AddPressOrder;
