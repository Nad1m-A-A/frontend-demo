// import generate_keys_array from "../utils/generate_keys_array";

async function PressShapes() {
  try {
    const shapes = await getShapes();
    // const shapeKeys = generate_keys_array(shapes[0], [
    //   1,
    //   Object.keys(shapes[0]).length - 1,
    // ]);
    return (
      <div id="press_shapes">
        {shapes &&
          shapes.map((shape, index) => {
            return <div key={index}>{shape.name}</div>;
          })}
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}

async function getShapes() {
  const response = await fetch("http://localhost:3000/press/api");
  if (!response.ok) {
    throw new Error("Failed to fetch shapes");
  }
  return response.json();
}

export default PressShapes;
