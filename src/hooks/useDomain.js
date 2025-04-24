// هك جلب رابط الموقع 



// src/hooks/useDomain.js
import { useState, useEffect } from "react";

export default function useDomain() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let currentDomain = window.location.hostname; 
      // لو تحب إزالة "www." لو موجودة:
      if (currentDomain.startsWith("www.")) {
        currentDomain = currentDomain.slice(4);
      }
      setDomain(currentDomain);
    }
  }, []);

  return domain;
}
