import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";
const ENDPOINT = process.env.ENDPOINT;
function OrderEditor({ order }) {
  return (
    <form
      id="order_editor"
      className="form"
      action={async (formData) => {
        "use server";
        const inputs = filter_action_keys(capture_form_values(formData));
        const [feedback] = await httpRequest(
          [`${ENDPOINT}orders/${order._id}`],
          "PATCH",
          [
            "/press/orders",
            `/press/orders/${order._id}`,
            "/press/orders/production",
          ],
          [inputs]
        );
        console.log(feedback);
      }}
    >
      <h3>Edit Order</h3>

      <label>
        name:
        <input
          required
          name="name"
          defaultValue={order.name}
          placeholder={order.name}
        />
      </label>
      {Object.entries(order.details).map(([key, value], index) => (
        <label key={index}>
          {key}:
          <input
            type="number"
            required
            name={key}
            defaultValue={value}
            placeholder={value}
          />
        </label>
      ))}
      <Button className="finish_button" text="Save" />
    </form>
  );
}

export default OrderEditor;
