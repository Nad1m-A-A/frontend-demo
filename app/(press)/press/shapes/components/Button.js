import { useFormStatus } from "react-dom";
function Button({className}) {
  const { pending } = useFormStatus();
  return <button className={className}>{pending ? "Loading" : "Add"}</button>;
}

export default Button;
