function DataList({ id, options }) {
  return (
    <datalist id={id}>
      {options.map((option, index) => (
        <option key={index} value={option}/>
      ))}
    </datalist>
  );
}

export default DataList;
