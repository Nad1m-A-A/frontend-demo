import httpRequest from "@/app/actions/httpRequest";
import OrdersProductionList from "../components/OrdersProductionList";
const ENDPOINT = process.env.ENDPOINT;
async function ProductionPage() {
  const [orders] = await httpRequest([
    `${ENDPOINT}orders`,
  ]);
  return (
    <div className="page">
      <h2>Production</h2>
      <OrdersProductionList orders={orders} />
    </div>
  );
}

export default ProductionPage;
