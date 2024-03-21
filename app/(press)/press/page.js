import Link from "next/link";
async function PressPage() {
  return (
    <div>
      <h1 className="text-center">Press</h1>
      <div className="flex max-w-5xl flex-wrap gap-4 m-auto justify-center py-5">
        <Link
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
          href="/press/shapes"
        >
          Shapes
        </Link>
        <Link
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
          href="/press/orders"
        >
          Orders
        </Link>
      </div>
    </div>
  );
}

export default PressPage;
