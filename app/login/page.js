"use client";
import { useRouter } from "next/navigation";
import capture_form_values from "../utils/capture_form_values";
import httpRequest from "../actions/httpRequest";
import { useState } from "react";
const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  if (localStorage.getItem("k6")) router.back();

  const handleLogin = async (formValues) => {
    setLoading(true);
    const password = capture_form_values(formValues);
    const [feedback] = await httpRequest(
      ["http://localhost:5000/pass-code/validate"],
      "POST",
      [],
      [password]
    );

    setLoading(false);
    if (!feedback.isValid) {
      setError("Wrong Password!");
      return;
    }
    localStorage.setItem("k6", JSON.stringify(feedback));
    router.replace("/");
  };

  return (
    <div className="page flex justify-center h-screen">
      <form className="flex flex-col gap-2" action={handleLogin}>
        <input name="password" placeholder="password" required type="text" />
        <button type="submit" className="w-full">
          Login
        </button>
      </form>
      <div className="text-red-600 text-center p-2">{error}</div>
      {loading && (
        <div className="text-blue-600 text-center p-2">Loading...</div>
      )}
    </div>
  );
};

export default Login;
