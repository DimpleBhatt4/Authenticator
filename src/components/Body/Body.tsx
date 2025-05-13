"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar/NavBar"; // adjust path as needed

export default function Body({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List of routes without NavBar
  const noNavRoutes = ["/login", "/signup"];

  const showNav = !noNavRoutes.includes(pathname);

  return (
    <body>
      {showNav && <NavBar />}
      {children}
    </body>
  );
}
