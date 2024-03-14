async function PressShapes({ shapes }) {
  return (
    <div id="press_shapes">
      {shapes.map((shape, index) => {
        return <div key={index}>{shape.name}</div>;
      })}
    </div>
  );
}
export default PressShapes;
