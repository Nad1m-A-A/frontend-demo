"use client";
import deleteShape from "@/app/actions/deleteShape";
import { useRouter } from "next/navigation";

function DeleteShape({ shapeId }) {
  const router = useRouter();

  const deleteShapeHandler = async () => {
    const deleteConfirmation = window.confirm("Click (OK) to delete shape");
    if (!deleteConfirmation) return;
    const feedback = await deleteShape(shapeId);
    router.replace("/press/shapes");
  };
  return (
    <form id="delete_shape" action={deleteShapeHandler}>
      <button className="bg-red-600 border-0 shadow-xl text-white px-4 py-2 rounded">
        Delete Shape
      </button>
    </form>
  );
}

export default DeleteShape;
