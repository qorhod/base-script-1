

// import React from 'react';

// // أنماط التنسيق (styles)
// const styles = {
//   featureWrap: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'start',
//   },
//   featureList: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     padding: 0,
//     margin: 0,
//     listStyle: 'none',
//     width: '100%',
//   },
//   featureItem: {
//     flex: '0 1 calc(25% - 20px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     boxSizing: 'border-box',
//   },
//   icon: {
//     marginBottom: '10px',
//   },
//   content: {
//     textAlign: 'center',
//   },
//   heading: {
//     margin: 0,
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   label: {
//     fontSize: '14px',
//     color: '#666',
//   },
// };

// // مكوّن عام لإظهار أي خاصية
// // يستقبل: icon, label, value
// // إن لم يكن value موجودًا أو فارغًا أو يساوي '0' => لا يعرض شيئًا
// const FeatureItem = ({ icon, label, value }) => {
//   // إذا كانت القيمة غير موجودة (null/undefined)
//   if (value == null) {
//     return null;
//   }
  
//   // نحول أي قيمة (رقم أو غيره) إلى سلسلة نصية لكي يعمل trim
//   const stringValue = String(value).trim();
  
//   // إن كانت السلسلة فارغة أو تساوي "0" => لا نعرض شيئًا
//   if (stringValue === '' || stringValue === '0') {
//     return null;
//   }

//   return (
//     <li style={styles.featureItem}>
//       <div style={styles.icon}>
//         <img src={icon} alt={label} />
//       </div>
//       <div style={styles.content}>
//         <h6 style={styles.heading}>{stringValue}</h6>
//         <span style={styles.label}>{label}</span>
//       </div>
//     </li>
//   );
// };

// /* 
//   مكوّنات فرعية (كل عنصر له أيقونة وعنوان محدد)
//   بإمكانك تكرار هذا النمط لكل خاصية ترغب فيها.
// */

// // 1) مساحة الأرض
// const LandSize = ({ value }) => (
//   <FeatureItem 
//     icon="/assets/img/inner-page/icon/size.svg"
//     label="مساحة الأرض"
//     value={`م ${value} `}
//     />
// );

// // 2) مسطح البناء
// const BuildingArea = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/compass.svg"
//     label="مسطح البناء"
//     value={`م ${value} `}
//     />
// );
// // ) عدد الأدوار 
// const FloorsCount = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/floors.svg"
//     label="  الأدوار "
//     value={value}
//   />
// );

// // 2) عدد الشوارع المحيطه 
// const SurroundingStreetsCount = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/streets.svg"
//     label="  الشوارع المحيطة "
//     value={value}
//   />
// );

// // 3) أبعاد الأرض
// const LandDimension = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/dimension.svg"
//     label="ابعاد الأرض"
//     value={value}
//   />
// );

// // 4) عرض الشارع
// const StreetWidth = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/street.svg"
//     label="عرض الشارع"
//     value={value}
//   />
// );

// // 5) عدد غرف النوم
// const Bedrooms = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/bed.svg"
//     label="غرفة نوم"
//     value={value}
//   />
// );

// // 6) غرفة غسيل
// const Laundry = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/laundry.svg"
//     label="غرفة غسيل"
//     value={value}
//   />
// );

// // 7) دورة المياه
// const Bathrooms = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/bath.svg"
//     label="دورة المياه"
//     value={value}
//   />
// );

// // 8) غرفة خادمة
// const MaidRoom = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/bed.svg"
//     label="غرفة خادمة"
//     value={value}
//   />
// );

// // 9) نادي صحي
// const Gym = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/gym.svg"
//     label="نادي صحي"
//     value={value}
//   />
// );

// // 10) قاعة سينما
// const Cinema = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/cinema.svg"
//     label="قاعة سينما"
//     value={value}
//   />
// );

// // 11) مسبح
// const Swimming = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/swimming.svg"
//     label="مسبح"
//     value={value}
//   />
// );

// // 12) كاميرات المراقبة
// const Cameras = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/cameras.svg"
//     label="كاميرات المراقبة"
//     value={value}
//   />
// );

// // 13) شرفة (بلكونة)
// const Balcony = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/balcony.svg"
//     label="شرفة (بلكونة)"
//     value={value}
//   />
// );

// // 14) المصعد
// const Elevator = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/elevator.svg"
//     label="المصعد"
//     value={value}
//   />
// );

// // 15) مستودع
// const Storage = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/storage.svg"
//     label="مستودع"
//     value={value}
//   />
// );

// // 16) عمر العقار
// const BuildYear = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/build-year.svg"
//     label="عمر العقار"
//     value={value}
//   />
// );

// // 17) المرآب
// const Garage = ({ value }) => (
//   <FeatureItem
//     icon="/assets/img/inner-page/icon/garage.svg"
//     label="المرآب"
//     value={value}
//   />
// );


// /**
//  * المكون الرئيسي الذي يضم جميع المكونات الفرعية.
//  * - يستقبل القيم لكل عنصر عن طريق الـ props (قابلة للتعديل حسب احتياجك).
//  * - إذا كانت القيمة فارغة أو 0 (بعد تحويلها لسلسلة)، فلن يظهر هذا العنصر.
//  */
// const PropertyDetails = ({
//   // مرر الـ props التي تريد استخدامها
//   landSize,
//   buildingArea,
//   landDimension,
//   streetWidth,
//   bedrooms,
//   laundry,
//   bathrooms,
//   maidRoom,
//   gym,
//   cinema,
//   swimming,
//   cameras,
//   balcony,
//   elevator,
//   storage,
//   buildYear,
//   garage,
//   floorsCount,
//   surroundingStreetsCount,

// }) => {
//   return (
//     <div style={styles.featureWrap}>
//       <ul style={styles.featureList}>
//         <LandSize value={landSize} />
//         <BuildingArea value={buildingArea} />
//         <LandDimension value={landDimension} />
//         <StreetWidth value={streetWidth} />
//         <Bedrooms value={bedrooms} />
//         <FloorsCount value={floorsCount} />
//         <SurroundingStreetsCount value={surroundingStreetsCount} />
//         <Laundry value={laundry} />
//         <Bathrooms value={bathrooms} />
//         <MaidRoom value={maidRoom} />
//         <Gym value={gym} />
//         <Cinema value={cinema} />
//         <Swimming value={swimming} />
//         <Cameras value={cameras} />
//         <Balcony value={balcony} />
//         <Elevator value={elevator} />
//         <Storage value={storage} />
//         <BuildYear value={buildYear} />
//         <Garage value={garage} />





        
//       </ul>
//     </div>
//   );
// };

// export default PropertyDetails;


import React from 'react';

// استيراد الأيقونات من مكتبة MUI
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StraightenIcon from '@mui/icons-material/Straighten';
import LayersIcon from '@mui/icons-material/Layers';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BathtubIcon from '@mui/icons-material/Bathtub';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TheatersIcon from '@mui/icons-material/Theaters';
import PoolIcon from '@mui/icons-material/Pool';
import VideocamIcon from '@mui/icons-material/Videocam';
import BalconyIcon from '@mui/icons-material/Balcony';
import ElevatorIcon from '@mui/icons-material/Elevator';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GarageIcon from '@mui/icons-material/Garage';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import EditRoadIcon from '@mui/icons-material/EditRoad';
const styles = {
  featureWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'start',
  },
  featureList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    width: '100%',
  },
  featureItem: {
    flex: '0 1 calc(25% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  icon: {
    marginBottom: '10px',
    fontSize: '40px',
    color: '#575757', // لون داكن للأيقونات
  },
  content: {
    textAlign: 'center',
  },
  heading: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
  label: {
    fontSize: '14px',
    color: '#666',
  },
};

const FeatureItem = ({ IconComponent, label, value }) => {
  if (value == null) return null;
  const stringValue = String(value).trim();
  if (stringValue === '' || stringValue === '0') return null;

  return (
    <li style={styles.featureItem}>
      <div style={styles.icon}>
        <IconComponent style={{ fontSize: 40, color: '#575757' }} />
      </div>
      <div style={styles.content}>
        <h6 style={styles.heading}>{stringValue}</h6>
        <span style={styles.label}>{label}</span>
      </div>
    </li>
  );
};

const PropertyDetails = ({
  landSize,
  buildingArea,
  landDimension,
  streetWidth,
  bedrooms,
  laundry,
  bathrooms,
  maidRoom,
  gym,
  cinema,
  swimming,
  cameras,
  balcony,
  elevator,
  storage,
  buildYear,
  garage,
  floorsCount,
  surroundingStreetsCount,
}) => {
  return (
    <div style={styles.featureWrap}>
      <ul style={styles.featureList}>
        <FeatureItem IconComponent={SquareFootIcon} label="مساحة الأرض" value={`م ${landSize}`} />
        <FeatureItem IconComponent={StraightenIcon} label="مسطح البناء" value={`م ${buildingArea}`} />
        <FeatureItem IconComponent={BorderAllIcon} label="ابعاد الأرض" value={landDimension} />
        <FeatureItem IconComponent={EditRoadIcon} label="عرض الشارع" value={streetWidth} />
        <FeatureItem IconComponent={HotelIcon} label="غرف نوم" value={bedrooms} />
        <FeatureItem IconComponent={LayersIcon} label="عدد الأدوار" value={floorsCount} />
        <FeatureItem IconComponent={AddRoadIcon} label="الشوارع المحيطة" value={surroundingStreetsCount} /> 
        <FeatureItem IconComponent={LocalLaundryServiceIcon} label="غرفة غسيل" value={laundry} />
        <FeatureItem IconComponent={BathtubIcon} label="دورة المياه" value={bathrooms} />
        <FeatureItem IconComponent={MeetingRoomIcon} label="غرفة خادمة" value={maidRoom} />
        <FeatureItem IconComponent={FitnessCenterIcon} label="نادي صحي" value={gym} />
        <FeatureItem IconComponent={TheatersIcon} label="قاعة سينما" value={cinema} />
        <FeatureItem IconComponent={PoolIcon} label="مسبح" value={swimming} />
        <FeatureItem IconComponent={VideocamIcon} label="كاميرات مراقبة" value={cameras} />
        <FeatureItem IconComponent={BalconyIcon} label="شرفة" value={balcony} />
        <FeatureItem IconComponent={ElevatorIcon} label="مصعد" value={elevator} />
        <FeatureItem IconComponent={InventoryIcon} label="مستودع" value={storage} />
        <FeatureItem IconComponent={CalendarTodayIcon} label="عمر العقار" value={buildYear} />
        <FeatureItem IconComponent={GarageIcon} label="مرآب" value={garage} />
      </ul>
    </div>
  );
};

export default PropertyDetails;
