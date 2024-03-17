import { useFormStatus } from "react-dom";
function Button() {
  const { pending } = useFormStatus();
  return <button>{pending ? "loading" : "Add"}</button>;
}

export default Button;
