import Link from "next/link";

export default function PressLayout({ children }) {
  const pages = [
    {
      name: "Orders",
      path: "/press/orders",
    },
    {
      name: "Production",
      path: "/press/orders/production",
    },
    {
      name: "Shapes",
      path: "/press/shapes",
    },
  ];
  return (
    <>
      <div className="nav">
        {pages.map((page, index) => (
          <Link key={index} href={page.path} className="link">
            {page.name}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
