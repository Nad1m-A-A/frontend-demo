"use client";
import httpRequest from "@/app/actions/httpRequest";

function DeleteOrder({ orderId }) {
  const deleteOrderHandler = async () => {
    const deleteConfirmation = window.confirm("Click (OK) to confirm.");
    if (!deleteConfirmation) return;
    const [feedback] = await httpRequest(
      [`http://localhost:5000/orders/${orderId}`],
      "DELETE",
      ["/press/orders", "/press/orders/production"]
    );
    console.log(feedback);
  };
  return (
    <form id="delete_shape" action={deleteOrderHandler}>
      <button className="bg-red-600 border-0 shadow-xl text-white px-4 py-2 rounded">
        Delete Order
      </button>
    </form>
  );
}

export default DeleteOrder;
