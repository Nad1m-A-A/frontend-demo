import Link from "next/link.js";
import PageLink from "./components/PageLink.js";
const HomePage = () => {
  const pages = ["Press", "Chemicals", "Alloy"];
  return (
    <div className="relative w-full">
      {pages.map((page, index) => {
        return (
          <Link key={index} href={`/${page.toLocaleLowerCase()}`}>
            <PageLink pageTitle={page} />
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
