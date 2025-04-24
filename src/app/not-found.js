// import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <>
//       <Header />
//       <div className="error-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="error-wrapper">
//                 <div className="error-content-area text-center">
//                   <h1>Opps, Page Not Found</h1>
//                   <p>
//                     Something went wrong, web page that is displayed to the user
//                     when the server cannot find the requested page.
//                   </p>
//                   <div className="error-img mb-50">
//                     <img
//                       className="img-fluid"
//                       src="/assets/img/inner-page/404.svg"
//                       alt=""
//                     />
//                   </div>
//                   <div className="error-btn">
//                     <Link legacyBehavior href="/">
//                       <a className="primary-btn3">Back To Home</a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }




import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-wrapper">
              <div className="error-content-area text-center">
                <h1>عذراً، الصفحة غير موجودة</h1>
                <p>
                  يبدو أنّ هناك خطأ ما. لم يتم العثور على الصفحة المطلوبة.
                </p>
                <div className="error-img mb-50">
                  <img
                    className="img-fluid"
                    src="/assets/img/inner-page/404.svg"
                    alt="404"
                  />
                </div>
                <div className="error-btn">
                  <Link legacyBehavior href="/">
                    <a className="primary-btn3">العودة إلى الصفحة الرئيسية</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
