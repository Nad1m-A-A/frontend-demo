"use client";
import { createShape } from "@/app/actions/createShape";
import { useState, useRef } from "react";
import Button from "./Button";

const shapeKeys = [
  { key: "name", type: "text" },
  { key: "type", type: "text" },
  { key: "unit", type: "text" },
  { key: "width", type: "number" },
  { key: "length", type: "number" },
  { key: "thickness", type: "number" },
];

function AddShape() {
  const formRef = useRef(null);
  const [feedback, setFeedback] = useState("");
  const createShapeHandler = async (formData) => {
    const feedback = await createShape(formData);
    console.log(feedback);
    setFeedback(feedback);
    if (feedback.success) formRef.current.reset();
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <span className="text-red-500 mb-2">{feedback.message}</span>
      <form
        id="add_shape"
        ref={formRef}
        className="flex flex-col items-center"
        onSubmit={createShapeHandler}
      >
        {shapeKeys.map(({ key, type }, index) => (
          <input
            key={index}
            name={key}
            type={type}
            step="0.01"
            placeholder={key}
            required
            className="mb-2 px-4 py-2 border border-gray-300 rounded"
          />
        ))}
        <Button className="bg-blue-600 border-0 text-white shadow-xl px-4 py-2 rounded mb-4" />
        <button
          type="reset"
          className="bg-green-600 text-white shadow-xl px-4 py-2 rounded border-0"
        >
          RESET
        </button>
      </form>
    </div>
  );
}

export default AddShape;
