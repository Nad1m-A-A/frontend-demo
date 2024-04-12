"use client";
import { useFormStatus } from "react-dom";
import Flicker from "./Flicker";
function Button({ className, text}) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className={className}>
      {pending ? "Loading..." : text}
      <Flicker/>
    </button>
  );
}

export default Button;
