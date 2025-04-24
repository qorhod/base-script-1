import React from 'react';
import Link from 'next/link'; // مخصص لـ Next.js
import PropTypes from 'prop-types';

const LogoComponent = ({
  logoUrl = '/assets/img/logo1.png', // تأكد من استخدام المسار الصحيح
  altText = 'Company Logo',
  linkUrl = '/',
}) => {
  return (
    <Link href={linkUrl}>
      <img
        src={logoUrl}
        alt={altText}
        style={{
          width: 'auto',
          maxHeight: '80px', // التحكم في التصميم
        }}
        className="img-fluid"
      />
    </Link>
  );
};

// التحقق من الخصائص (Prop Types)
LogoComponent.propTypes = {
  logoUrl: PropTypes.string,
  altText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default LogoComponent;
