import { ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
