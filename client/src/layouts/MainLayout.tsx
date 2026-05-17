import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
