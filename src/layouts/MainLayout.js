import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Header /> */}
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
