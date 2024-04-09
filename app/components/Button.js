"use client";
import { useFormStatus } from "react-dom";
function Button({ className, text}) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className={className}>
      {pending ? "Loading..." : text}
    </button>
  );
}

export default Button;
