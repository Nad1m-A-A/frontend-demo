import httpRequest from "@/app/actions/httpRequest";
import AddShape from "./components/AddShape";
import ShapeList from "./components/ShapeList";

async function ShapesPage() {
  const [shapes] = await httpRequest(["http://localhost:5000/shapes"]);

  return (
    <div className="page">
      <h3>Shapes</h3>
      <ShapeList shapes={shapes} />
      <AddShape />
    </div>
  );
}

export default ShapesPage;
