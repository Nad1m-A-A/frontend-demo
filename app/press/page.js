import AddShape from "../components/AddShape";
import generate_keys_array from "../utils/generate_keys_array";
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
      <div id="press_shapes">
        {shapes &&
          shapes.map((shape, index) => {
            return <div key={index}>{shape.name}</div>;
          })}
      </div>
      <AddShape shapeKeys={shapeKeys} />
    </div>
  );
}

export default PressPage;
