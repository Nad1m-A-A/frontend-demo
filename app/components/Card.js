import Flicker from "./Flicker";

function Card({ children }) {
  return (
    <div className="card">
      <Flicker />
      {children}
    </div>
  );
}

export default Card;
