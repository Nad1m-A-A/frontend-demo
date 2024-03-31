import httpRequest from "@/app/actions/httpRequest";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
import filter_empty_inputs from "@/app/utils/filter_empty_inputs";
import ProductionDemand from "./ProductionDemand";
import Button from "@/app/components/Button";

function OrderProduction({ order: { _id, name, details, production } }) {
  const productionStatus = Object.keys(details).map(
    (key) => production[key] >= details[key]
  );
  const allComplete = productionStatus.every((status) => status === true);
  return (
    <>
      <form
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
            [`http://localhost:5000/orders/${_id}/production`],
            "PATCH",
            [
              "/press/orders",
              "/press/orders/production",
              `/press/orders/${_id}`,
            ],
            preservedProduction
          );
          console.log(feedback);
        }}
      >
        <h3>{name}</h3>
        {Object.entries(production).map(([key, value], index) => (
          <div className="flex gap-5" key={index}>
            <label>
              {key}:
              <input
                type="number"
                step="0.5"
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
        <Button text={"Save Changes"} />
      </form>
    </>
  );
}

export default OrderProduction;
