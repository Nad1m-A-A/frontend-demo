import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_from_values from "@/app/utils/filter_action_keys";

function OrderEditor({ order }) {
  return (
    <form
      id="order_editor"
      action={async (formData) => {
        "use server";
        const inputs = filter_from_values(capture_form_values(formData));
        const [feedback] = await httpRequest(
          [`http://localhost:5000/orders/${order._id}`],
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
      <label>
        name
        <input
          required
          name="name"
          defaultValue={order.name}
          placeholder={order.name}
        />
      </label>
      {Object.entries(order.details).map(([key, value], index) => (
        <div key={index}>
          <label>
            {key}
            <input
              required
              name={key}
              defaultValue={value}
              placeholder={value}
            />
          </label>
        </div>
      ))}
      <Button text="Save" />
    </form>
  );
}

export default OrderEditor;
