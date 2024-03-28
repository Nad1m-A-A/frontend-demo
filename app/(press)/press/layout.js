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
    <section className="max-w-5xl mx-auto py-5">
      <div className="flex justify-center gap-4">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.path}
            className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
          >
            {page.name}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
}
