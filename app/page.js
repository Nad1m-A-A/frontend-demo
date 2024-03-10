const HomePage = () => {
  return (
    <div className="relative w-full">
      {/* Full width image */}
      <img
        src="/3.jpg" 
        alt="Full Width Image"
        className="w-full h-96 object-cover"
      />
      {/* Icon positioned at the bottom left */}
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-500 bg-opacity-50 flex items-center justify-center">
        {/* Replace the icon with your SVG or font icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;