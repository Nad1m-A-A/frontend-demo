import OrdersProductionList from "../components/OrdersProductionList";

async function ProductionPage() {
  const OrdersResponse = await fetch("http://localhost:5000/orders");
  const orders = await OrdersResponse.json();
  return (
    <div className="page">
      <h3>Production</h3>
      <OrdersProductionList orders={orders} />
    </div>
  );
}

export default ProductionPage;
