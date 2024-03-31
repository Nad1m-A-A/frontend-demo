import httpRequest from "@/app/actions/httpRequest";
import OrdersProductionList from "../components/OrdersProductionList";

async function ProductionPage() {
  const [orders] = await httpRequest([
    "http://localhost:5000/orders",
  ]);
  return (
    <div className="page">
      <h3>Production</h3>
      <OrdersProductionList orders={orders} />
    </div>
  );
}

export default ProductionPage;
