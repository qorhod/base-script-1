import Home2Header from "@/components/header/Home2Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <SignUpModal />
      <LoginModal />
      <AdvanceFiler />
      <Home2Header />
      {children}
    </>
  );
};

export default layout;
