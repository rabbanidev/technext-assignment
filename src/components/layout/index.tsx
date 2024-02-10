import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="py-12 min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
