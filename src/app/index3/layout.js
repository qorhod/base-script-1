import Footer from "@/components/common/Footer";
import Home3Header from "@/components/header/Home3Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";


const layout = ({ children }) => {
  return (
    <>
      <LoginModal />
      <SignUpModal />
      <AdvanceFiler />
      <Home3Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
