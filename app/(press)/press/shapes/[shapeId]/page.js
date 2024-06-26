import httpRequest from "@/app/actions/httpRequest";
import EditShape from "../components/EditShape";
const ENDPOINT = process.env.ENDPOINT;

async function ShapePage({ params: { shapeId } }) {
  const [{ _id, __v, ...shape }] = await httpRequest([
    `${ENDPOINT}shapes/${shapeId}`,
  ]);
  return (
    <div id="shape" className="page">
      <EditShape shape={shape} shapeId={shapeId} />
    </div>
  );
}
export default ShapePage;
