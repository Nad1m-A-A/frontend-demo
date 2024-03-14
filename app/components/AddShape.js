"use client";
import { useEffect, useState } from "react";
import capture_form_values from "../utils/capture_form_values";
import useHttp from "../utils/useHttp";
function AddShape() {
  const shapeKeys = [
    { key: "name", type: "text" },
    { key: "type", type: "text" },
    { key: "unit", type: "text" },
    { key: "width", type: "number" },
    { key: "length", type: "number" },
    { key: "thickness", type: "number" },
  ];
  const [creatingShape, setCreatingShape] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchInfo, setFetchInfo] = useState({ url: "", values: {} });
  const [loading, data, error] = useHttp(
    fetchInfo.url,
    "POST",
    fetchInfo.values
  );

  useEffect(() => {
    if (!data) return;
    if (data.success) {
      setSuccessMessage(data.message);
      setErrorMessage("");
    }
    if (!data.success) {
      setSuccessMessage("");
      setErrorMessage(data.message);
    }
  }, [data]);

  const addShapeHandler = (e) => {
    const formValues = capture_form_values(e);
    setFetchInfo((prev) => ({
      ...prev,
      url: "http://localhost:3000/press/api",
      values: formValues,
    }));
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
          <form
            className="inline-flex flex-col"
            method="post"
            onSubmit={addShapeHandler}
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
