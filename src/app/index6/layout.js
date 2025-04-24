import Footer from "@/components/common/Footer";
import Home6Footer from "@/components/common/Home6Footer";
import Topbar from "@/components/common/Topbar";
import Home5Header from "@/components/header/Home5Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";
import Home6Topbar from "@/components/view/topbar/Home6Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <AdvanceFiler />
      <Home6Topbar />
      <Home5Header />
      {children}
      <Home6Footer />
    </>
  );
};

export default layout;
