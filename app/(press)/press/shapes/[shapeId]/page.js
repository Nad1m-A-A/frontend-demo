import ShapeEditor from "../components/ShapeEditor";
import ShapeDetails from "../components/ShapeDetails";

async function ShapePage({ params: {shapeId} }) {
  const response = await fetch(
    `http://localhost:5000/shapes/${shapeId}`
  );
  const { _id, __v, ...shape } = await response.json();
  return (
    <div id="shape" className="flex flex-col items-center">
      <ShapeEditor shape={shape} shapeId={shapeId} />
      <ShapeDetails shape={shape} />
    </div>
  );
}
export default ShapePage;
