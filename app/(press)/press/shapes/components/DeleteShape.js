"use client";
import httpRequest from "@/app/actions/httpRequest";
import { useRouter } from "next/navigation";
const ENDPOINT = process.env.ENDPOINT;

function DeleteShape({ shapeId }) {
  const router = useRouter();

  const deleteShapeHandler = async (e) => {
    e.preventDefault();
    const deleteConfirmation = window.confirm("Click (OK) to delete shape");
    if (!deleteConfirmation) return;
    const [feedback] = await httpRequest(
      [`${ENDPOINT}shapes/${shapeId}`],
      "DELETE",
      ["/press/shapes", "/press/orders"]
    );
    console.log(feedback);
    router.replace("/press/shapes");
  };
  return (
    <button className="delete_button" onClick={(e) => deleteShapeHandler(e)}>
      Delete
    </button>
  );
}

export default DeleteShape;
