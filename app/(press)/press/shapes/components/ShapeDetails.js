const ShapeDetails = ({ shape }) => {
  return (
    <ul className="list-none">
      {Object.entries(shape).map(([key, value], index) => (
        <li  key={index}>
          <div className="flex gap-5 py-3 justify-between">
          <span className="font-semibold ">{key}:</span>
          <span>{value}</span>
          </div>
      <div className="bg-gray-500 w-full h-px"></div>

        </li>
      ))}
    </ul>
  );
};

export default ShapeDetails;