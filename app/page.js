import PageLink from "./components/PageLink.js";
const HomePage = () => {
  const data = ["Press", "Chemicals", "Alloy"];
  return (
    <div className="relative w-full">
      <img
        src="/3.jpg"
        alt="Full Width Image"
        className="w-full h-96 object-cover"
      />
      {data.map((item, index) => {
        return <PageLink pageTitle={item} key={index} />;
      })}
    </div>
  );
};

export default HomePage;
