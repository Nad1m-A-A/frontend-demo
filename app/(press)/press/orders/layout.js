import Link from "next/link";

export default function OrdersLayout({ children }) {
  return (
    <section>
      <Link href="/press/orders">Orders</Link>
      <Link href="/press/orders/production">Production</Link>
      {children}
    </section>
  );
}
