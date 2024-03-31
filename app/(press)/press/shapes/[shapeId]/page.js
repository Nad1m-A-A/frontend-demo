import httpRequest from "@/app/actions/httpRequest";
import ShapeEditor from "../components/ShapeEditor";

async function ShapePage({ params: { shapeId } }) {
  const shapeResponse = await fetch(`http://localhost:5000/shapes/${shapeId}`);
  const [{ _id, __v, ...shape }] = await httpRequest([
    `http://localhost:5000/shapes/${shapeId}`,
  ]);
  return (
    <div id="shape" className="page flex flex-col items-center">
      <ShapeEditor shape={shape} shapeId={shapeId} />
    </div>
  );
}
export default ShapePage;
