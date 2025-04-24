import React from 'react'
import Home4About from '@/components/about/Home4About'
import Home4PropertyByCity from '@/components/home/Home4PropertyByCity'
import Home4Banner from '@/components/view/Banner/Home4Banner'
import Home4InnerBanner from '@/components/view/Banner/Home4InnerBanner'
import Home4ApartmentType from '@/components/view/apartmentType/Home4ApartmentType'
import Home1Blog from '@/components/view/blog/Home1Blog'
import HOme4FeatureProperty from '@/components/view/featuredProperty/HOme4FeatureProperty'
import Home4RecentProperty from '@/components/view/recentProperty/Home4RecentProperty'
import Home4Team from '@/components/view/team/Home4Team'
import Home4Testimonial from '@/components/view/testimonial/Home4Testimonial'
import Home4WhyChoose from '@/components/view/whyChoose/Home4WhyChoose'
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
      <Home4Banner/>
      <Home4ApartmentType/>
      <Home4About/>
      <HOme4FeatureProperty/>
      <Home4RecentProperty/>
      <Home4WhyChoose/>
      <Home4PropertyByCity/>
      <Home4InnerBanner/>
      <Home4Team/>
      <Home4Testimonial/>
      <Home1Blog/>
    </>

  )
}

export default Page
