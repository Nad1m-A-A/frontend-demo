"use client";
export default function Shape({ params, searchParams }) {
  console.log(params);
  return (
    <div id="shape">
      {Object.entries(searchParams).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
      <button>Edit</button>
    </div>
  );
}
