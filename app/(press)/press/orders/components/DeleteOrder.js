"use client";
import httpRequest from "@/app/actions/httpRequest";
const ENDPOINT = process.env.ENDPOINT;
function DeleteOrder({ orderId }) {
  const deleteOrderHandler = async () => {
    const deleteConfirmation = window.confirm("Click (OK) to confirm.");
    if (!deleteConfirmation) return;
    const [feedback] = await httpRequest(
      [`${ENDPOINT}orders/${orderId}`],
      "DELETE",
      ["/press/orders", "/press/orders/production"]
    );
    console.log(feedback);
  };
  return (
    <form id="delete_shape" action={deleteOrderHandler}>
      <button className="delete_button">Delete Order</button>
    </form>
  );
}

export default DeleteOrder;
