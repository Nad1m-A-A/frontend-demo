async function PressPage() {
  const getShapes = async () => {
    const response = await fetch("http://localhost:3000/press/api");
    return await response.json();
  };
  const shapes = await getShapes();
  return (
    <div>
      <h1>Press Page</h1>  
      {shapes && shapes.map((shape, index) => {
        return <div key={index}>{shape.name}</div>;
      })}
    </div>
  );
}

export default PressPage;
