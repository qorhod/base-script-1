// خاص في توصل api الاعلان لعدت عناصر 

// "use client"; // حتى تتمكّن من استخدامه في بيئة الـclient (React hooks)

"use client";
import { createContext } from "react";

const AdsContext = createContext(null);

export default AdsContext;
