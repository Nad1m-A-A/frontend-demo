"use client";
import httpRequest from "@/app/actions/httpRequest";
const ENDPOINT = process.env.ENDPOINT;
function DeleteListItem({ collection, itemId, paths }) {
  const deleteItemHandler = async (e) => {
    e.preventDefault();
    const deleteConfirmation = window.confirm("Click (OK) to confirm.");
    if (!deleteConfirmation) return;
    const [feedback] = await httpRequest(
      [`${ENDPOINT}${collection}/${itemId}`],
      "DELETE",
      paths
    );
    console.log(feedback);
  };
  return (
    <button onClick={(e) => deleteItemHandler(e)} className="delete_button">
      Delete
    </button>
  );
}

export default DeleteListItem;
