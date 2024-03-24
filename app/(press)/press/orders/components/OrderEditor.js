import editOrder from "@/app/actions/editOrder";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_from_values from "@/app/utils/filter_from_values";

function OrderEditor({ order }) {
  return (
    <form
      id="order_editor"
      action={async (formData) => {
        "use server";
        const inputs = filter_from_values(capture_form_values(formData));
        const feedback = await editOrder(inputs, order._id);
        console.log(feedback);
      }}
    >
      <label>
        name
        <input name="name" defaultValue={order.name} placeholder={order.name} />
      </label>
      {Object.entries(order.details).map(([key, value], index) => (
        <div key={index}>
          <label>
            {key}
            <input name={key} defaultValue={value} placeholder={value} />
          </label>
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  );
}

export default OrderEditor;
