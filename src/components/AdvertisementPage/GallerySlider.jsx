

// "use client";
// import React from "react";

// const GallerySlider = ({ media }) => {
//   // نتوقع أن تكون media = ["https://...", "https://...", ...]
//   if (!media || media.length === 0) {
//     return <div>لا توجد صور لعرضها</div>;
//   }

//   return (
//     <div className="row mb-100">
//       <div className="col-lg-12">
//         <div className="poperty-img-group">
//           <div className="row g-3">
//             {media.map((imageUrl, index) => (
//               <div key={index} className="col-lg-3">
//                 <div className="single-img" style={{ textAlign: "center" }}>
//                   <img
//                     className="img-fluid"
//                     onClick={() => console.log("Opening image index:", index)}
//                     src={imageUrl}
//                     alt={`Image ${index}`}
//                     style={{
//                       cursor: "pointer",
//                       width: "323px",
//                       height: "246px",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       console.error("Image failed to load:", imageUrl);
//                       e.target.src = "/assets/img/default-image.png"; // صورة بديلة
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GallerySlider;



"use client";
import React from "react";

const GallerySlider = ({ media }) => {
  // نتوقع أن تكون media = ["https://...", "https://...", ...]
  if (!media || media.length === 0) {
    // لا نُرجِع شيئًا إطلاقًا إذا لم توجد صور
    return null;
  }

  return (
    <div className="row mb-100">
      <div className="col-lg-12">
        <div className="poperty-img-group">
          <div className="row g-3">
            {media.map((imageUrl, index) => (
              <div key={index} className="col-lg-3">
                <div className="single-img" style={{ textAlign: "center" }}>
                  <img
                    className="img-fluid"
                    onClick={() => console.log("Opening image index:", index)}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    style={{
                      cursor: "pointer",
                      width: "323px",
                      height: "246px",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      console.error("Image failed to load:", imageUrl);
                      e.target.src = "/assets/img/default-image.png"; // صورة بديلة
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
