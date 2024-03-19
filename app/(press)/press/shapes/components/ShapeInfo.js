function ShapeInfo({ shape }) {
  return (
    <ul>
      {Object.entries(shape).map(([key, value], index) => (
        <li className="flex gap-5" key={index}>
          <spam>{key}:</spam><span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShapeInfo;
