import Link from "next/link";
async function PressPage() {
  return (
    <div>
      <h1 className="text-center">Press</h1>
      <Link href="/press/shapes">Shapes</Link>
      <Link href="/press/orders">Orders</Link>
    </div>
  );
}

export default PressPage;
