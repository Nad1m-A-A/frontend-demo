import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import DataList from "@/app/components/DataList";
const ENDPOINT = process.env.ENDPOINT;
function AddChemical() {
  return (
    <div className="pt-10">
      <h3 className="text-center">Add Chemical</h3>

      <form
        id="add_chemical"
        className="form"
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(capture_form_values(formData));
          const [feedback] = await httpRequest(
            [`${ENDPOINT}chemicals`],

            "POST",
            ["/chemicals"],
            [inputs]
          );
          console.log(feedback);
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="name"
          list="chemicals-category"
          required
        />
        <DataList
          id="chemicals-category"
          options={["Nitric", "Sulfuric", "Hydrochloric", "Hydrogen Peroxide"]}
        />
        <input
          name="count"
          type="number"
          placeholder="count"
          min={0}
        />
        <input
          name="threshold"
          type="number"
          placeholder="threshold"
          min={0}
        />

        <Button text="Add" className="finish_button" />
        <button className="delete_button" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddChemical;
