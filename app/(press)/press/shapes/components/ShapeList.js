import Link from "next/link";
function ShapeList({ shapes }) {
  return (
    <div id="shapes" className="flex max-w-5xl flex-wrap gap-4 m-auto">
      {shapes.map(({ name, _id: id }, index) => (
        <Link className="no-underline" href={`/press/shapes/${id}`} key={index}>
          <div className="bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded cursor-pointer">
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ShapeList;
