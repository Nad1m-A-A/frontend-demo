import Link from "next/link";
function ShapeList({ shapes }) {
  return (
    <div id="shapes" className="flex max-w-5xl flex-wrap gap-4 m-auto">
      {shapes.map(({ name, _id: id }, index) => (
        <Link
          className="no-underline bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer"
          href={`/press/shapes/${id}`}
          key={index}
        >
          {name}
        </Link>
      ))}
      {shapes.length === 0 && <div>No shapes available</div>}
    </div>
  );
}

export default ShapeList;
