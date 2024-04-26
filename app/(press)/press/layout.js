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
      <h1 className="text-center">Press</h1>
      <div className="nav sticky top-0 z-30 bg-black bg-opacity-50">
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
