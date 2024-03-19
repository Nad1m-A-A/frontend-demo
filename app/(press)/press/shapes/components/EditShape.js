"use client";
import { editShape } from "@/app/actions/editShape";
import { useRef, useState } from "react";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";

function EditShape({ shape, shapeId }) {
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
    <div>
      {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
      {editing && (
        <form
          id="edit_shape"
          action={editShapeHandler}
          ref={formRef}
          className="flex flex-col items-center"
        >
          {Object.entries(shape).map(([key, value], index) => (
            <label key={index}>
              {key}:
              <input
                name={key}
                placeholder={value}
                key={key}
              />
            </label>
          ))}
          <button>Save changes</button>
        </form>
      )}
    </div>
  );
}

export default EditShape;
