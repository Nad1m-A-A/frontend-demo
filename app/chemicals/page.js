async function ChemicalsPage() {
    const getChemicals = async () => {
      const response = await fetch("http://localhost:3000/chemicals/api");
      return await response.json();
    };
    const chemicals = await getChemicals();
    return (
      <div className="page">
        <h1>Chemicals Page</h1>  
        {chemicals && chemicals.map((chemical, index) => {
          return <div key={index}>{chemical.name}</div>;
        })}
      </div>
    );
  }
  
  export default ChemicalsPage;
  