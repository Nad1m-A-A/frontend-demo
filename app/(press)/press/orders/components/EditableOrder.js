import React, { useState } from "react";

function EditableOrder({name, details}) {
  const [editing, setEditing] = useState(false);
  const handleEditOrder = () => {
    setEditing(prev => !prev);
  };
  return (
    <div id="editable_order" className="mb-6 border-b pb-4">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold mb-2">{name}</h4>
        <button
          onClick={handleEditOrder}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Edit
        </button>
      </div>
      <ul>
        {Object.entries(details).map(([key, value]) => (
          <li key={key} className="flex gap-3 items-center">
            {!editing && (
              <div className="flex-1">
                {key}:{value}
              </div>
            )}
            {editing && (
              <form action={""} className="bg-blue-300">
                {Object.entries(details).map(([key, value], index) => (
                  <input placeholder="key" key={index} className="block" />
                ))}
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditableOrder;
