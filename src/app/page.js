import Home1About from "@/components/about/Home1About";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";
import ApartmentTypes from "@/components/home/ApartmentTypes";
import Banner1 from "@/components/view/Banner/Banner1";
import Home1Blog from "@/components/view/blog/Home1Blog";
import Home1FeaturedProperty from "@/components/view/featuredProperty/Home1FeaturedProperty";
import Home1projectLocation from "@/components/view/projectLocation/Home1projectLocation";
import QuickLinkArea1 from "@/components/view/quickLink/QuickLinkArea1";
import Home1RecentProperty from "@/components/view/recentProperty/Home1RecentProperty";
import Home1RecommendedApartment from "@/components/view/recommendedApartment/Home1RecommendedApartment";
import Home1Team from "@/components/view/team/Home1Team";
import Home1Testimonial from "@/components/view/testimonial/Home1Testimonial";
import Home1WhyChoose from "@/components/view/whyChoose/Home1WhyChoose";

export const metadata = {
  title: "Neckle - Real Estate Next Template",
  description: "Global Description",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Banner1 />
      <QuickLinkArea1 />
      <Home1About />
      <ApartmentTypes />
      <Home1FeaturedProperty />
      <Home1RecentProperty />
      <Home1WhyChoose />
      <Home1projectLocation />
      <Home1RecommendedApartment />
      <Home1Team />
      <Home1Testimonial />
      <Home1Blog />
      <Footer />
    </>
  );
}
