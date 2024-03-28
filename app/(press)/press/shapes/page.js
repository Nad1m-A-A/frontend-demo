import AddShape from "./components/AddShape";
import ShapeList from "./components/ShapeList";

async function ShapesPage() {
  const response = await fetch("http://localhost:5000/shapes");
  const shapes = await response.json();

  return (
    <div className="page">
      <h3>Shapes</h3>
      <ShapeList shapes={shapes} />
      <AddShape />
    </div>
  );
}

export default ShapesPage;
