import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";
import React from "react";
export const metadata = {
  title: 'Neckle - Property Map',
  openGraph: {
    title: 'next js',
    description: 'Neckle - Real Estate nextjs Template',
  },
}
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
