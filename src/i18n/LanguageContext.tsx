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
    if (location.pathname.startsWith("/en")) return "en";
    return "sv"; // Default to Swedish
  }, [location.pathname]);

  // Switch language by navigating to the equivalent path
  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const searchParams = location.search;
    
    // Get the path without the language prefix
    const pathWithoutLang = currentPath.replace(/^\/(sv|en)/, "") || "";
    
    if (lang === "sv") {
      navigate(`/sv${pathWithoutLang}${searchParams}`);
    } else {
      navigate(`/en${pathWithoutLang}${searchParams}`);
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
