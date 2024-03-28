"use client";
import { useRouter } from "next/navigation";
async function PressPage() {
  const router = useRouter();
  router.push("/press/orders");
  return (
    <div>
      <h1>Press Page</h1>
    </div>
  );
}

export default PressPage;
