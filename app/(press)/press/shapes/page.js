import httpRequest from "@/app/actions/httpRequest";
import AddShape from "./components/AddShape";
import ShapeList from "./components/ShapeList";

async function ShapesPage() {
  const [shapes] = await httpRequest(["http://localhost:5000/shapes"]);

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
