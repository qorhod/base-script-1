


// Layout.jsx (أو .js حسب امتدادك)
"use client";
import React, { useState, useEffect, createContext } from "react";

import apiClient from "@/api/apiClient";

// هوك الدومين
import useDomain from "@/hooks/useDomain";

import ThemeRegistry from "./ThemeRegistry";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Home5Tobbar from "@/components/view/topbar/Home5Tobbar";
import BottomBar from "@/components/header/BottomBar";

export const DomainDataContext = createContext(null);

export default function Layout({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // استدعاء الهوك للحصول على الدومين (مثلاً "qorhod.sa")
  const domainName = useDomain();


  useEffect(() => {
    async function fetchUserData() {
      // إذا لم نحصل بعد على اسم الدومين، لا داعي لاستدعاء الـAPI
      if (!domainName) return;

      setLoading(true);
      try {
        // نمرّر الدومين إلى ميثود الـAPI كما تريد
        const response = await apiClient.getUserProfileByDomain(domainName);
        
        setUserData(response.data);  
      } catch (error) {
        console.error("Error fetching user data by domain:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [domainName]);

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  // جهّز البيانات التي تحتاجها للتوب بار أو غيره
  const logoUrl = userData?.user?.logoUrl || "";
  const companyName = userData?.user?.companyName || "";



  
  return (
 
    <DomainDataContext.Provider value={{ userData, setUserData }}>
      
      <ThemeRegistry>
        {/* توب بار */}
        <Home5Tobbar logoUrl={logoUrl} companyName={companyName} />
        
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundColor: "background.default",
              border: "1px solid #ccc",
              minHeight: "100vh",
            }}
          >
            {children}
            <BottomBar />
          </Box>
        </ThemeProvider>
      </ThemeRegistry>
    </DomainDataContext.Provider>

  );
}
