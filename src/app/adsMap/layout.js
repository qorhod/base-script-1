// /Users/abdulaziz/Desktop/RTL-Version-1/src/app/adsMap/layout.js

import React from "react";
import Footer from "@/components/common/Footer";
import BottomBar from "@/components/header/BottomBar";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";
import Home5Tobbar from "@/components/view/topbar/Home5Tobbar";

// يمكنك إضافة metadata على مستوى layout لو أردت:
// export const metadata = {
//   title: "خريطة الإعلانات",
//   description: "عرض صفحة الخريطة مع التجميع",
// };

const layout = ({ children }) => {
  return (
    <>
      {/* <SignUpModal />
      <LoginModal />
      <AdvanceFiler />
      <Home5Tobbar /> */}
      
      {/* هنا سيتم حقن محتوى الصفحة الفعلية (page.js) */}
      {children}
      <BottomBar />

      {/* <Footer /> */}
    </>
  );
};

export default layout;
