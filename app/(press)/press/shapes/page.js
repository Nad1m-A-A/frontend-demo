import Form from "./components/Form";
import Shapes from "./components/Shapes";

async function ShapesPage() {
  const response = await fetch("http://localhost:5000/shapes");
  const shapes = await response.json();

  return (
    <div>
      <Shapes shapes={shapes} />
      <Form />
    </div>
  );
}

export default ShapesPage;
