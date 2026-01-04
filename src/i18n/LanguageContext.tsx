import { createContext, useContext, ReactNode, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Derive language from URL path
  const language: Language = useMemo(() => {
    return location.pathname.startsWith("/sv") ? "sv" : "en";
  }, [location.pathname]);

  // Switch language by navigating to the equivalent path
  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const searchParams = location.search;
    
    if (lang === "sv") {
      // Add /sv prefix if not already present
      if (!currentPath.startsWith("/sv")) {
        const newPath = currentPath === "/" ? "/sv" : `/sv${currentPath}`;
        navigate(newPath + searchParams);
      }
    } else {
      // Remove /sv prefix for English
      if (currentPath.startsWith("/sv")) {
        const newPath = currentPath.replace(/^\/sv/, "") || "/";
        navigate(newPath + searchParams);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
