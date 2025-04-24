import React from 'react';

const PlanImages = ({ images, setOpenimg, startIndex = 5 }) => {
  if (!images || images.length === 0) return null;

  // الصورة الأولى ستعرض في العمود الكبير (col-lg-7)
  const firstImage = images[0];
  // بقية الصور ستعرض في العمود الأصغر على اليمين
  const otherImages = images.slice(1); 

  return (
    <div className="single-item mb-50">
      <div className="title mb-30">
        <h5>المخطط :</h5>
      </div>
      <div className="plan-img-group">
        <div className="row g-3">
          <div className="col-lg-7">
            <div className="single-plan">
              <img
                src={firstImage}
                onClick={() => setOpenimg({ openingState: true, openingIndex: startIndex })}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row g-3">
              {otherImages.map((imgSrc, idx) => (
                <div className="col-12" key={idx}>
                  <div className="single-plan">
                    <img
                      src={imgSrc}
                      onClick={() => setOpenimg({ openingState: true, openingIndex: startIndex + 1 + idx })}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanImages;
