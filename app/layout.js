import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link.js";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "K6 Jewelry",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pages = ["Press", "Chemicals", "Alloy"];

  if (typeof window !== "undefined") {
    if (!localStorage.getItem("k6")) {
      const router = useRouter();
      router.replace("http://localhost:3000/login");
    }
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
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
