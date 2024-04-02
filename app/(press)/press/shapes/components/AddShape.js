import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
const ENDPOINT = process.env.ENDPOINT;
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
    <form
      id="add_shape"
      className="form"
      action={async (formData) => {
        "use server";
        const inputs = filter_action_keys(capture_form_values(formData));
        const [feedback] = await httpRequest(
          [`${ENDPOINT}shapes`],
          "POST",
          ["/press/shapes", "/press/orders"],
          [inputs]
        );
        console.log(feedback);
      }}
    >
      <h3>Add Shape</h3>

      {shapeKeys.map(({ key, type }, index) => (
        <input
          key={index}
          name={key}
          type={type}
          step="0.01"
          placeholder={key}
          required
        />
      ))}
      <Button text="Add" />
      <button type="reset" className="bg-gray-500">
        Reset
      </button>
    </form>
  );
}

export default AddShape;
