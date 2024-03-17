import generate_keys_array from "../../utils/generate_keys_array";
import DisplayContainer from "../components/DisplayContainer";
async function PressPage() {
  const getShapes = async () => {
    const response = await fetch("http://localhost:3000/press/api-shapes");
    return await response.json();
  };
  const getOrders = async () => {
    const response = await fetch("http://localhost:3000/press/api-orders", {next:{revalidate: 5}});
    return await response.json();
  };
  const shapes = await getShapes();
  const orders = await getOrders();

  const shapeKeys = generate_keys_array(shapes[0], [
    1,
    Object.keys(shapes[0]).length - 1,
  ]);

  return (
    <div>
      <h1>Press Page</h1>
      <DisplayContainer props={{ shapes, shapeKeys, orders }} />
    </div>
  );
}

export default PressPage;
