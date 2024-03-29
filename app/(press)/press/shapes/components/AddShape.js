import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import createShape from "@/app/actions/createShape";
import Button from "../../../../components/Button";

const shapeKeys = [
  { key: "name", type: "text" },
  { key: "type", type: "text" },
  { key: "unit", type: "text" },
  { key: "width", type: "number" },
  { key: "length", type: "number" },
  { key: "thickness", type: "number" },
];

function AddShape() {
  return (
    <div className="flex flex-col items-center mb-8">
      <h3>Add Shape</h3>
      <form
        id="add_shape"
        className="flex flex-col items-center"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(capture_form_values(formData));
          const feedback = await createShape(inputs);
          console.log(feedback);
        }}
      >
        {shapeKeys.map(({ key, type }, index) => (
          <input
            key={index}
            name={key}
            type={type}
            step="0.01"
            placeholder={key}
            required
            className="mb-2 px-4 py-2 border border-gray-300 rounded"
          />
        ))}
        <Button
          className="bg-blue-600 text-white shadow-xl px-4 py-2 rounded border-0"
          text="Add"
        />
        <button
          type="reset"
          className="bg-green-600 text-white shadow-xl px-4 py-2 rounded border-0"
        >
          RESET
        </button>
      </form>
    </div>
  );
}

export default AddShape;
