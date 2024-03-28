"use client";
import deleteOrder from "@/app/actions/deleteOrder";

function DeleteOrder({ orderId }) {
  const deleteOrderHandler = async () => {
    const deleteConfirmation = window.confirm("Click (OK) to confirm.");
    if (!deleteConfirmation) return;
    const feedback = await deleteOrder(orderId);
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
