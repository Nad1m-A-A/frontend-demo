import { useFormStatus } from "react-dom";
function Button({className}) {
  const { pending } = useFormStatus();
  console.log(pending);
  return <button className={className}>{pending ? "Loading" : "Add"}</button>;
}

export default Button;
