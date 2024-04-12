import AddChemical from "./components/AddChemical";
import ChemicalsList from "./components/ChemicalsList";
function ChemicalsPage() {


  return (
    <div className="page">
      <h2>Chemicals Page</h2>
      <ChemicalsList/>
      <AddChemical/>
    </div>
  );
}

export default ChemicalsPage;
