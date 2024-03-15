import PressShapes from "../components/PressShapes";
import AddShape from "../components/AddShape";
import AddOrder from "../components/AddOrder";
import generate_keys_array from "../../utils/generate_keys_array";
async function PressPage() {
  const getShapes = async () => {
    const response = await fetch("http://localhost:3000/press/api");
    return await response.json();
  };
  const shapes = await getShapes();
  const shapeKeys = generate_keys_array(shapes[0], [
    1,
    Object.keys(shapes[0]).length - 1,
  ]);
  return (
    <div>
      <h1>Press Page</h1>
      <PressShapes shapes={shapes}/>
      <div className="flex gap-5">
        <AddShape shapeKeys={shapeKeys} />
        <AddOrder shapes={shapes} />
      </div>
    </div>
  );
}

export default PressPage;
