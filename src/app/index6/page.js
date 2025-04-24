import React from 'react'
import Home6Banner from '@/components/view/Banner/Home6Banner'
import Home6InnerBanner from '@/components/view/Banner/Home6InnerBanner'
import Home6About6 from '@/components/view/about/Home6About6'
import Home6ApartmentType from '@/components/view/apartmentType/Home6ApartmentType'
import Home6Blog from '@/components/view/blog/Home6Blog'
import Home6HowitWork from '@/components/view/howItWork/Home6HowitWork'
import Home6RecentLaunchProduct from '@/components/view/recentProperty/Home6RecentLaunchProduct'
import Home6LatestProperties from '@/components/view/recommendedApartment/Home6LatestProperties'
import Home6TopRelated from '@/components/view/recommendedApartment/Home6TopRelated'
import Home6Team from '@/components/view/team/Home6Team'
import Home6Testimonial from '@/components/view/testimonial/Home6Testimonial'


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
      <Home6Banner />
      <Home6RecentLaunchProduct />
      <Home6ApartmentType />
      <Home6About6 />
      <Home6InnerBanner />
      <Home6LatestProperties />
      <Home6HowitWork />
      <Home6TopRelated />
      <Home6Team />
      <Home6Testimonial />
      <Home6Blog />
    </>
  )
}

export default Page
