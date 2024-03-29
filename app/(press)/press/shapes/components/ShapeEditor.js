import editShape from "@/app/actions/editShape";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import filter_action_keys from "@/app/utils/filter_action_keys";
import DeleteShape from "../components/DeleteShape";
import Button from "@/app/components/Button";
function ShapeEditor({ shape, shapeId }) {
  return (
    <div>
      <form
        id="shape_editer"
        className="flex flex-col"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(
            filter_empty_inputs(capture_form_values(formData))
          );
          if (JSON.stringify(inputs) === "{}") return;
          const feedback = await editShape(inputs, shapeId, shape.name);
          console.log(feedback);
        }}
      >
        <h3>Edit Shape</h3>
        {Object.entries(shape).map(([key, value], index) => (
          <div
            key={index}
            className="flex gap-3 pb-2 justify-between items-center"
          >
            <label>{key}:</label>
            <input
              name={key}
              placeholder={value}
              key={key}
              className="border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
        ))}
        <Button
          className="bg-green-600 border-0 shadow-xl text-white px-4 py-2 rounded"
          text="Save Changes"
        />
      </form>
      <DeleteShape shapeId={shapeId} />
    </div>
  );
}

export default ShapeEditor;
