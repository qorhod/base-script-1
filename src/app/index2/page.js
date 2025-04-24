import React from "react";
import Footer from "@/components/common/Footer";
import DreamPropertySearch from "@/components/home/DreamPropertySearch";
import Banner2 from "@/components/view/Banner/Banner2";
import Home2About from "@/components/view/about/Home2About";
import Home1Blog from "@/components/view/blog/Home1Blog";
import Home2FeaturedProperty from "@/components/view/featuredProperty/Home2FeaturedProperty";
import Home2HowItWork from "@/components/view/howItWork/Home2HowItWork";
import Home2RecentProperty from "@/components/view/recentProperty/Home2RecentProperty";
import Home2rcenetPropertyTab from "@/components/view/recentProperty/Home2rcenetPropertyTab";
import Home2RecomendadeApertment from "@/components/view/recommendedApartment/Home2RecomendadeApertment";
import Home2Testimonial from "@/components/view/testimonial/Home2Testimonial";
import Home2WhyChoose from "@/components/view/whyChoose/Home2WhyChoose";

export const metadata = {
  title: "Neckle - Real Estate Next Template",
  description: "Global Description",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Page = () => {
  return (
    <>
      <Banner2 />
      <Home2About />
      <DreamPropertySearch />
      <Home2RecentProperty />
      <Home2WhyChoose />
      <Home2FeaturedProperty />
      <Home2HowItWork />
      <Home2rcenetPropertyTab />
      <Home2RecomendadeApertment />
      <Home2Testimonial />
      <Home1Blog />
      <Footer />
    </>
  );
};

export default Page;
