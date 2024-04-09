import capture_form_values from "@/app/utils/capture_form_values";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import filter_action_keys from "@/app/utils/filter_action_keys";
import httpRequest from "@/app/actions/httpRequest";
import updateRelatedOrders from "@/app/actions/updateRelatedOrders";
import DeleteShape from "./DeleteShape";
import Button from "@/app/components/Button";
const ENDPOINT = process.env.ENDPOINT;

function EditShape({ shape: shapeToSpread, shapeId }) {
  const { unit, ...shape } = shapeToSpread;
  return (
    <>
      <form
        className="form"
        id="shape_editor"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(
            filter_empty_inputs(capture_form_values(formData))
          );
          inputs.unit = shapeToSpread.unit;
          if (JSON.stringify(inputs) === "{}") return;
          const [feedback] = await httpRequest(
            [`${ENDPOINT}shapes/${shapeId}`],
            "PATCH",
            [
              "/press/shapes",
              `/press/shapes/${shapeId}`,
              "/press/orders",
              "/press/orders/production",
            ],
            [inputs]
          );
          if (inputs.name) updateRelatedOrders(inputs.name, shape.name);
          // console.log(feedback);
        }}
      >
        <h3>Edit Shape</h3>

        {Object.entries(shape).map(([key, value], index) => (
          <div className="flex items-center w-full gap-2" key={index}>
            <label>{key}:</label>
            {key === "type" ? (
              <select name="type" defaultValue={shape.type}>
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
            ) : (
              <input name={key} placeholder={value} key={key} />
            )}
          </div>
        ))}
        <Button className="finish_button" text="Save" />
        <DeleteShape shapeId={shapeId} />
      </form>
    </>
  );
}

export default EditShape;
