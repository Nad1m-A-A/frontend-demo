"use client";
import { useState } from "react";

function AddShape({ shapeKeys }) {
  const [creatingShape, setCreatingShape] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const captureShapeValues = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const shapeValues = {};
    for (const [name, value] of formData.entries()) {
      shapeValues[name] = value;
    }
    return shapeValues;
  };
  const storeNewShape = async (shape) => {
    try {
      const response = await fetch("http://localhost:3000/press/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shape),
      });
      if (!response.ok) throw new Error(response.statusText);
      return await response.json();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const addShapeHandler = async (e) => {
    const shapeValues = captureShapeValues(e);
    const result = await storeNewShape(shapeValues);
    if (result.success) {
      setSuccessMessage(result.message);
      setErrorMessage("");
    }
    if (!result.success) {
      setSuccessMessage("");
      setErrorMessage(result.message);
    }
  };

  return (
    <div>
      <div
        id="add_shape"
        className="inline-flex items-center gap-2"
        onClick={() => setCreatingShape((prev) => !prev)}
      >
        <h3>ADD SHAPE</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </div>
      {creatingShape && (
        <div id="shape_creator" className="bg-gray-400">
          <form className="inline-flex flex-col" method="post" onSubmit={addShapeHandler}>
            {shapeKeys.map((shapeKey, index) => {
              return (
                <input
                  defaultValue={"1"}
                  key={index}
                  name={shapeKey}
                  placeholder={shapeKey}
                  required
                />
              );
            })}
            <button type="submit">ADD</button>
            <button type="reset">RESET</button>
          </form>
          {successMessage && <div>{successMessage}</div>}
          {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        </div>
      )}
    </div>
  );
}

export default AddShape;
