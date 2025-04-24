import Footer from "@/components/common/Footer";
import Home4Header from "@/components/header/Home4Header";
import AdvanceFiler from "@/components/uiModal/AdvanceFiler";
import LoginModal from "@/components/uiModal/LoginModal";
import SignUpModal from "@/components/uiModal/SignUpModal";


const layout = ({ children }) => {
  return (
    <>
      <AdvanceFiler />
      <Home4Header />
      <SignUpModal />
      <LoginModal />
      {children}
      <Footer />
    </>
  );
};

export default layout;
