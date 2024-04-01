import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_from_values from "@/app/utils/filter_action_keys";

function OrderEditor({ order }) {
  return (
    <form
      id="order_editor"
      className="flex flex-col gap-2 w-fit m-auto"
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
            step={10}
            required
            name={key}
            defaultValue={value}
            placeholder={value}
          />
        </label>
      ))}
      <div className="flex gap-2 flex-col items-end">
        <Button className="finish_button" text="Save" />
      </div>
    </form>
  );
}

export default OrderEditor;
