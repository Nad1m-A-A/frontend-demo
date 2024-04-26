import httpRequest from "@/app/actions/httpRequest";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import ProductionDemand from "./ProductionDemand";
import Button from "@/app/components/Button";
const ENDPOINT = process.env.ENDPOINT;
function OrderProduction({ order: { _id, name, details, production } }) {
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
      <div className="flex justify-between">
        <h4>{name}</h4>
        <div className="flex">
          <b className="px-1">L /</b>
          <b className="px-1">W /</b>
          <b className="px-1">C</b>
        </div>
      </div>
      {Object.entries(production).map(([key, value], index) => (
        <div className=" flex items-center justify-between" key={index}>
          <label className="w-1/2">
            {key}:
            <input
            step="0.5"
              className="w-14"
              type="number"
              name={key}
              placeholder={value}
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
