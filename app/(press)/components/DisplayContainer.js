"use client";
import Shapes from "./Shapes";
import AddShape from "./AddShape";
import AddOrder from "./AddOrder";
import { useState } from "react";
import Orders from "./Orders";
function DisplayContainer({ props: { shapes, shapeKeys, orders } }) {
  const [displayOption, setDisplayOption] = useState("orders");
  return (
    <section id="display_container" className="min-h-screen flex flex-col items-center gap-10">
      <div className="flex gap-5 justify-center bg-gray-400 w-full">
        <h3 onClick={(e) => setDisplayOption(e.target.innerHTML)}>orders</h3>
        <h3 onClick={(e) => setDisplayOption(e.target.innerHTML)}>shapes</h3>
      </div>
      {displayOption === "shapes" && (
        <>
          <Shapes shapes={shapes} />
          <AddShape shapeKeys={shapeKeys} />
        </>
      )}
      {displayOption === "orders" && (
        <>
          <AddOrder shapes={shapes} />
          <Orders orders={orders}/>
        </>
      )}
    </section>
  );
}

export default DisplayContainer;
