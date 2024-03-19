import EditShape from "../components/EditShape";
import ShapeInfo from "../components/ShapeInfo";

export default async function Shape({ params: {shapeId} }) {
  //! params is value of this dynamic path (shapeId in this case), searchParams is data sent in the url from the parent page
  const response = await fetch(
    `http://localhost:5000/shapes/${shapeId}`
  );
  const { _id, __v, ...shape } = await response.json();
  return (
    <div id="shape">
      <EditShape shape={shape} shapeId={shapeId} />
      <ShapeInfo shape={shape} />
    </div>
  );
}
