import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
