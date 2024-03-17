function Add({toggleAdd}) {
  return (
    <div
    id="add_order"
    className="inline-flex items-center gap-2"
    onClick={() => toggleAdd((prev) => !prev)}
  >
    <h3>ADD ORDER</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  </div>
  )
}

export default Add