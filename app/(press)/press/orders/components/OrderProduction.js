import updateProduction from "@/app/actions/updateProduction";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
function OrderProduction({ order: { _id, name, details, production } }) {
  const productionStatus = Object.keys(details).map(
    (key) => parseInt(production[key]) >= parseInt(details[key])
  );
  const allComplete = productionStatus.every((status) => status === true);
  return (
    <>
      <form
        action={async (formData) => {
          "use server";
          const inputs = filter_action_keys(capture_form_values(formData));
          const preservedProduction = {};
          Object.keys(production).map((key) => {
            preservedProduction[key] = inputs[key]
              ? inputs[key] + production[key]
              : production[key];
          });
          console.log(preservedProduction);
          const feedback = await updateProduction(preservedProduction, _id);
          console.log(feedback);
        }}
      >
        <h3>{name} asdf</h3>
        {Object.entries(production).map(([key, value], index) => (
          <div key={index}>
            <label>
              {key}:
              <input
                type="number"
                name={key}
                placeholder={`${value} ${
                  productionStatus[index] ? "(complete)" : ""
                }`}
              />
            </label>
          </div>
        ))}
        <button>save changes</button>
      </form>
    </>
  );
}

export default OrderProduction;
