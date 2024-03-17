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

function Form() {
  const formRef = useRef(null);
  const [feedback, setFeedback] = useState("");
  const createShapeHandler = async (formData) => {
    const feedback = await createShape(formData);
    console.log(feedback);
    setFeedback(feedback);
    if (feedback.success) formRef.current.reset();
  };

  return (
    <div>
      <span>{feedback.message}</span>
      <form
        ref={formRef}
        className="inline-flex flex-col"
        action={createShapeHandler}
      >
        {shapeKeys.map(({ key, type }, index) => {
          return (
            <input
              key={index}
              name={key}
              type={type}
              step="0.01"
              placeholder={key}
              required
            />
          );
        })}
        <Button/>
        <button type="reset">RESET</button>
      </form>
    </div>
  );
}

export default Form;
