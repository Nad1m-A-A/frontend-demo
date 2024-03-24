import updateProduction from "@/app/actions/updateProduction";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";

function OrdersProductionList({ orders }) {
  return (
    <div id="orders_production_list" className="">
      {orders.map(({ _id, name, production }, index) => (
        <form
          key={index}
          action={async (formData) => {
            "use server";
            const inputs = filter_action_keys(capture_form_values(formData));
            const feedback = await updateProduction(inputs, _id);
            console.log(feedback);
          }}
        >
          <h3>{name}</h3>
          {Object.entries(production).map(([key, value], index) => (
            <div key={index}>
              <label>
              {key}:<input required name={key} defaultValue={value} placeholder={value} />
              </label>
            </div>
          ))}
          <button>save changes</button>
        </form>
      ))}
      {orders.length === 0 && <div>No orders available</div>}
    </div>
  );
}

export default OrdersProductionList;
