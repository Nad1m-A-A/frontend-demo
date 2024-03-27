async function AlloyPage() {
  const alloyResponse = await fetch("http://localhost:5000/alloy");
  const { name, details } = await alloyResponse.json();
  return (
    <div className="page">
      <div id="alloy">
        <h3>{name}</h3>
        <ul>
          <li>width: {details.width}mm</li>
          <li>weight: {details.weight}g</li>
          <h5>Thickness/Length</h5>
          {Object.entries(details.thicklen).map(([key, value], index) => (
            <li key={index}>
              {key}mm: {value}m
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlloyPage;
