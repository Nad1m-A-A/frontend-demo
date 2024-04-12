import httpRequest from "@/app/actions/httpRequest";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import DeleteListItem from "@/app/components/DeleteListItem";
import capture_form_values from "@/app/utils/capture_form_values";
import filter_action_keys from "@/app/utils/filter_action_keys";

async function ChemicalsList() {
  const ENDPOINT = process.env.ENDPOINT;
  const [chemicals] = await httpRequest([`${ENDPOINT}chemicals`]);
  return (
    <div className="list">
      {chemicals.map(({ _id, name, count, threshold }, index) => (
        <Card key={index}>
          <form
            className="form"
            action={async (formData) => {
              "use server";
              const inputs = filter_action_keys(capture_form_values(formData));
              console.log(inputs);
              const [feedback] = await httpRequest(
                [`${ENDPOINT}chemicals/${_id}`],
                "PATCH",
                ["/chemicals"],
                [inputs]
              );
              console.log(feedback);
            }}
          >
            <label>
              name:
              <input
                name="name"
                placeholder={name}
                defaultValue={name}
                required
              />
            </label>
            <label>
              count:
              <input
                className={
                  count <= threshold
                    ? "bg-red-600  placeholder-white text-white"
                    : ""
                }
                name="count"
                placeholder={count}
                defaultValue={count}
                type="number"
                min={0}
                required
              />
            </label>
            <label>
              threshold:
              <input
                name="threshold"
                placeholder={threshold}
                defaultValue={threshold}
                type="number"
                min={0}
                required
              />
            </label>
            <Button className="finish_button" text="Save" />
            <DeleteListItem
              collection="chemicals"
              itemId={_id}
              paths={["/chemicals"]}
            />
          </form>
        </Card>
      ))}
    </div>
  );
}

export default ChemicalsList;
