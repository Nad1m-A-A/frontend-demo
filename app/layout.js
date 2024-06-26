// "use client";
// import { useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link.js";
import Image from "next/image";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  const pages = ["Press", "Chemicals", "Alloy"];
  // const router = useRouter();
  // const pathname = usePathname();
  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     if (!localStorage.getItem("k6")) {
  //       router.replace("/login");
  //     }
  //   }
  // }, [router]);
  // const isLogin = pathname === "/login";

  return (
    <html lang="en">
      <body className={manrope.className}>
        <Image
          priority
          width={2200}
          height={1800}
          src="/3.jpg"
          alt="Jewelry Width Image"
          className="w-full h-96 object-cover"
        />
        <div className="nav">
          {pages.map((page, index) => {
            return (
              <Link
                className="link"
                key={index}
                href={`/${page.toLocaleLowerCase()}`}
              >
                {page}
              </Link>
            );
          })}
        </div>

        {children}
      </body>
    </html>
  );
}
