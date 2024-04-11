function Loader() {
  return (
    <div className="flex justify-center items-center h-48">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="55"
        viewBox="0 -960 960 960"
        width="55"
        className="animate-spin loading_icon"
      >
        <path d="M212-239q-43-48-67.5-110T120-480q0-150 105-255t255-105v-80l200 150-200 150v-80q-91 0-155.5 64.5T260-480q0 46 17.5 86t47.5 70l-113 85ZM480-40 280-190l200-150v80q91 0 155.5-64.5T700-480q0-46-17.5-86T635-636l113-85q43 48 67.5 110T840-480q0 150-105 255T480-120v80Z" />
      </svg>
    </div>
  );
}

export default Loader;
