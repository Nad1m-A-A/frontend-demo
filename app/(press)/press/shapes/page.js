import httpRequest from "@/app/actions/httpRequest";
import AddShape from "./components/AddShape";
import ShapeList from "./components/ShapeList";
const ENDPOINT = process.env.ENDPOINT;
async function ShapesPage() {
  const [shapes] = await httpRequest([`${ENDPOINT}shapes`]);
  return (
    <div className="page">
      <h2>Shapes</h2>
      <div>
        <ShapeList shapes={shapes} />
        <AddShape />
      </div>
    </div>
  );
}

export default ShapesPage;
