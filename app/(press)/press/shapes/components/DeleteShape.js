"use client";
import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

function DeleteShape({ shapeId }) {
  const router = useRouter();

  const deleteShapeHandler = async () => {
    const deleteConfirmation = window.confirm("Click (OK) to delete shape");
    if (!deleteConfirmation) return;
    const [feedback] = await httpRequest(
      [`https://k6-navy.vercel.app/shapes/${shapeId}`],
      "DELETE",
      ["/press/shapes", "/press/orders"]
    );
    console.log(feedback);
    router.replace("/press/shapes");
  };
  return (
      <button className="delete_button" onClick={deleteShapeHandler}>
        Delete
      </button>
  );
}

export default DeleteShape;
