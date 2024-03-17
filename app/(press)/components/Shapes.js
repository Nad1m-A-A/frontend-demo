function Shapes({ shapes }) {
  return (
    <div id="shapes">
      {shapes.map((shape, index) => {
        return <div key={index}>{shape.name}</div>;
      })}
    </div>
  );
}
export default Shapes;
