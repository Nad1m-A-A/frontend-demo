import capture_form_values from "@/app/utils/capture_form_values";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import filter_action_keys from "@/app/utils/filter_action_keys";
import httpRequest from "@/app/actions/httpRequest";
import updateRelatedOrders from "@/app/actions/updateRelatedOrders";
import DeleteShape from "../components/DeleteShape";
import Button from "@/app/components/Button";
const ENDPOINT = process.env.ENDPOINT;

function ShapeEditor({ shape, shapeId }) {
  return (
    <div className="max-w-fit flex flex-col items-end gap-2">
      <form
        className="flex flex-col gap-2 w-fit"
        id="shape_editor"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(
            filter_empty_inputs(capture_form_values(formData))
          );
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
          updateRelatedOrders(inputs, shape.name);
          console.log(feedback);
        }}
      >
        {Object.entries(shape).map(([key, value], index) => (
          <label key={index}>
            {key}:
            <input name={key} placeholder={value} key={key} />
          </label>
        ))}
        <div className="flex gap-2 flex-col items-end">
          <Button className="finish_button" text="Save" />
        </div>
      </form>
      <DeleteShape shapeId={shapeId} />
    </div>
  );
}

export default ShapeEditor;
