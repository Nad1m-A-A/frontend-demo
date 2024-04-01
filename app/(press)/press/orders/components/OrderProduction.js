import httpRequest from "@/app/actions/httpRequest";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import ProductionDemand from "./ProductionDemand";
import Button from "@/app/components/Button";
const ENDPOINT = process.env.ENDPOINT;
function OrderProduction({ order: { _id, name, details, production } }) {
  const productionStatus = Object.keys(details).map(
    (key) => production[key] >= details[key]
  );
  const allComplete = productionStatus.every((status) => status === true);
  return (
    <form
      className="card"
      action={async (formData) => {
        "use server";

        const inputs = filter_action_keys(
          filter_empty_inputs(capture_form_values(formData))
        );
        if (JSON.stringify(inputs) === "{}") return;

        const preservedProduction = {};
        Object.keys(production).map((key) => {
          preservedProduction[key] = inputs[key]
            ? inputs[key] + production[key]
            : production[key];
        });

        const [feedback] = await httpRequest(
          [`${ENDPOINT}orders/${_id}/production`],
          "PATCH",
          ["/press/orders", "/press/orders/production"],
          [preservedProduction]
        );
        console.log(feedback);
      }}
    >
      <h4>{name}</h4>
      {Object.entries(production).map(([key, value], index) => (
        <div className=" flex items-center justify-between gap-2" key={index}>
          <label className="w-2/3">
            {key}:
            <input
              className="w-14"
              type="number"
              name={key}
              placeholder={`${value} ${
                productionStatus[index] ? "(complete)" : ""
              }`}
            />
          </label>
          <ProductionDemand
            index={index}
            orderProduction={production}
            orderDetails={details}
          />
        </div>
      ))}
      <Button className="finish_button" text="Save" />
    </form>
  );
}

export default OrderProduction;
