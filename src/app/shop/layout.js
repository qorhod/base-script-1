

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/common/Topbar'

import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: "Neckle - Shop",
  openGraph: {
    title: "next js",
    description: "Neckle - Real Estate nextjs Template",
  },
};
const layout = ({children}) => {
  return (
    <>
    <ToastContainer />
    <Topbar/>
    <Header/>
     {children}
    <Footer/> 
    </>
  )
}

export default layout
