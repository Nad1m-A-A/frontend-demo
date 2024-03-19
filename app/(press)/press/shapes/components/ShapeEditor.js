"use client";
import { useRef, useState } from "react";
import editShape from "@/app/actions/editShape";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";

function ShapeEditor({ shape, shapeId }) {
  const formRef = useRef(null);
  const [editing, setEditing] = useState(false);

  const editShapeHandler = async (formData) => {
    const inputs = filter_empty_inputs(capture_form_values(formData));
    const feedback = await editShape(inputs, shapeId);
    console.log(feedback);
    if (feedback.success) {
      formRef.current.reset();
      setEditing(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!editing && (
        <button
          className="bg-blue-600 border-0 shadow-xl text-white px-4 py-2 rounded"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      )}

      {editing && (
        <form
          id="edit_shape"
          action={editShapeHandler}
          ref={formRef}
          className="flex flex-col"
        >
          {Object.entries(shape).map(([key, value], index) => (
            <div className="flex gap-3 pb-2 justify-between items-center">
              <label key={index}>{key}:</label>
              <input
                name={key}
                placeholder={value}
                key={key}
                className="border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
          ))}
          <div className="flex flex-col items-center gap-5">
            <button className="bg-green-600 border-0 shadow-xl text-white px-4 py-2 rounded">
              Save changes
            </button>
            {editing && (
              <button
                className="bg-red-600 border-0 shadow-xl text-white px-4 py-2 rounded mt-4"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default ShapeEditor;
