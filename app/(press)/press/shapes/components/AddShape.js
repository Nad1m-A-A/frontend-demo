import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import DataList from "@/app/components/DataList";
const ENDPOINT = process.env.ENDPOINT;
function AddShape() {
  return (
    <div className="pt-10">
      <h3 className="text-center">Add Shape</h3>

      <form
        id="add_shape"
        className="form"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(capture_form_values(formData));
          inputs.unit = "mm";
          const [feedback] = await httpRequest(
            [`${ENDPOINT}shapes`],
            "POST",
            ["/press/shapes", "/press/orders"],
            [inputs]
          );
          console.log(feedback);
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="name"
          list="shapes-category"
          required
        />
        <DataList
          id="shapes-category"
          options={["Tiffany", "Van Cleef", "Prada", "Versace"]}
        />
        <select name="type" required>
          <option>full</option>
          <option>half</option>
        </select>
        <input
          name="width"
          type="number"
          placeholder="width"
          step="0.01"
          min={0}
          required
        />
        <input
          name="length"
          type="number"
          placeholder="length"
          step="0.01"
          min={0}
          required
        />
        <input
          name="thickness"
          list="thickness-list"
          type="number"
          placeholder="thickness"
          step="0.001"
          min={0}
          required
        />
        <DataList id="thickness-list" options={[0.6, 0.4, 0.25, 0.2]} />
        <input
          name="unit"
          placeholder="unit: mm"
          disabled
          className="bg-gray-200"
        />

        <Button text="Add" className="finish_button" />
        <button className="delete_button" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddShape;
