import Link from "next/link";

function Shapes({shapes}) {
  return (
    <div id="shapes" className="flex max-w-5xl flex-wrap gap-4 m-auto">
      {shapes.map(({name, _id: id}, index) => {
        return <Link href={{
          pathname: `/press/shapes/${id}`,
          query: shapes[index]
        }} key={index}>{name}</Link>;
      })}
    </div>
  );
}

export default Shapes;
