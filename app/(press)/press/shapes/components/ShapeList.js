import Link from "next/link";
function ShapeList({ shapes }) {
  return (
    <div id="shapes" className="flex justify-center flex-wrap gap-2">
      {shapes.map(({ name, _id }, index) => (
        <Link
          className="link no-underline"
          href={`/press/shapes/${_id}`}
          key={index}
        >
          {name}
        </Link>
      ))}
      {shapes.length === 0 && <div className="text-center">No shapes available</div>}
    </div>
  );
}

export default ShapeList;
