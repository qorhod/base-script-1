import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import apiClient from "../../../api/apiClient"; // استيراد API client

const CallViaWhatsApp = ({ domainName }) => {
  const [contactInfo, setContactInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { phoneNumber, whatsappNumber } = contactInfo || {}; // استخراج البيانات

  // جلب بيانات الاتصال من API
  useEffect(() => {
    const fetchContactInfo = async () => {
      setLoading(true);
      setError(null);

      if (!domainName) {
        setError("Domain name is required");
        setLoading(false);
        return;
      }

      try {
        const response = await apiClient.getSocialMedia(domainName); // استدعاء API
        setContactInfo({
          phoneNumber: response.data?.socialMedia?.phoneNumber,
          whatsappNumber: response.data?.socialMedia?.whatsappNumber,
        });
      } catch (err) {
        console.error("Error fetching contact info:", err);
        setError("Failed to load contact information.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, [domainName]);

  // عرض أثناء التحميل
  if (loading) {
    return <p>Loading contact information...</p>;
  }

  // عرض رسالة خطأ إن وُجدت
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'center',
      }}
    >
      {/* أيقونة الاتصال */}
      {phoneNumber && (
        <div style={{ textAlign: 'center' }}>
          <IconButton
            aria-label="Call directly"
            href={`tel:${phoneNumber}`}
            sx={{
              backgroundColor: '#efb93f',
              '&:hover': { backgroundColor: '#d6a436' },
              color: '#000',
            }}
          >
            <FaPhone style={{ fontSize: '1.5rem', color: '#000' }} />
          </IconButton>
          <p style={{ marginTop: '5px', fontSize: '12px', color: '#000' }}>
            {phoneNumber}
          </p>
        </div>
      )}

      {/* أيقونة الواتساب */}
      {whatsappNumber && (
        <div style={{ textAlign: 'center' }}>
          <IconButton
            aria-label="Call via WhatsApp"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            sx={{
              backgroundColor: '#efb93f',
              '&:hover': { backgroundColor: '#d6a436' },
              color: '#000',
            }}
          >
            <FaWhatsapp style={{ fontSize: '1.5rem', color: '#000' }} />
          </IconButton>
          <p style={{ marginTop: '5px', fontSize: '12px', color: '#000' }}>
            WhatsApp
          </p>
        </div>
      )}
    </div>
  );
};

export default CallViaWhatsApp;
