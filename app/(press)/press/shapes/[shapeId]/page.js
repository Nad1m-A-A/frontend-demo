import ShapeEditor from "../components/ShapeEditor";

async function ShapePage({ params: {shapeId} }) {
  const response = await fetch(
    `http://localhost:5000/shapes/${shapeId}`
  );
  const { _id, __v, ...shape } = await response.json();
  return (
    <div id="shape" className="flex flex-col items-center">
      <ShapeEditor shape={shape} shapeId={shapeId} />
    </div>
  );
}
export default ShapePage;
