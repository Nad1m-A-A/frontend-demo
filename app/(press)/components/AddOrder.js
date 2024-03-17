import { useEffect, useState } from "react";
import capture_form_values from "../../utils/capture_form_values";
import Add from "./Add";
import OrderName from "./OrderName";
import OrderShapes from "./OrderShapes";
import OrderCounts from "./OrderCounts";
import useHttp from "../../utils/useHttp";

function AddPressOrder({ shapes }) {
  const [availableShapes, setAvailableShapes] = useState(shapes);
  const [selectedShapes, addSelectedShape] = useState([]);
  const [step, setStep] = useState(1);
  const [addingOrder, setAddingOrder] = useState(false);
  const [orderName, setOrderName] = useState("");
  const [{ url, payload }, setFetchInfo] = useState({ url: "", payload: {} });
  const [loading, data, error] = useHttp(url, "POST", payload);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const nameHandler = (e) => {
    e.preventDefault();
    const formValues = capture_form_values(e);
    setOrderName(formValues.name);
    setStep(2);
  };

  const addToOrder = (e) => {
    const shapeName = e.target.innerHTML;
    addSelectedShape((prev) => [...prev, { name: shapeName }]);
    const remainingShapes = availableShapes.filter(
      (item) => item.name !== shapeName
    );
    setAvailableShapes(remainingShapes);
  };

  const storeOrder = (e) => {
    e.preventDefault();
    const shapesQuantity = capture_form_values(e);
    const order = {
      name: orderName || undefined,
      details: shapesQuantity,
    };
    setFetchInfo((prev) => ({
      ...prev,
      url: "http://localhost:3000/press/api-orders",
      payload: order,
    }));
  };

  return (
    <>
      <Add toggleAdd={value => setAddingOrder(value)}/>
      {addingOrder && (
        <div id="order_creator">
          {step === 1 && <OrderName nameHandler={nameHandler} />}
          {step === 2 && (
            <OrderShapes
              props={{ availableShapes, selectedShapes, addToOrder}} setStep={setStep}
            />
          )}
          {step === 3 && <OrderCounts props={{ storeOrder, selectedShapes }} />}
        </div>
      )}
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
    </>
  );
}

export default AddPressOrder;
