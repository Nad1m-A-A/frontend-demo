import { useFormStatus } from "react-dom";
function Button({className}) {
  const { pending } = useFormStatus();
  return <button className={className}>{pending ? "loading" : "Add"}</button>;
}

export default Button;
