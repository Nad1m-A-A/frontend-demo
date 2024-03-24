import Link from "next/link";

export default function OrdersLayout({ children }) {
  return (
    <section className="max-w-5xl mx-auto py-5">
      <div className="flex justify-center gap-4">
        <Link
          href="/press/orders"
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
        >
          Orders
        </Link>
        <Link
          href="/press/orders/production"
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
        >
          Production
        </Link>
        <Link
          href="/press/shapes"
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
        >
          Shapes
        </Link>
      </div>
      {children}
    </section>
  );
}
