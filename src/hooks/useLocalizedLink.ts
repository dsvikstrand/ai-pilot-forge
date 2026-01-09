import { useLocation } from "react-router-dom";
import type { Language } from "@/i18n/translations";

const BASE_URL = "https://vdsai.se";

/**
 * Hook to get the current language from the URL path
 * /sv/* = Swedish, everything else = English
 */
export function useLanguageFromPath(): Language {
  const location = useLocation();
  return location.pathname.startsWith("/sv") ? "sv" : "en";
}

/**
 * Hook to generate localized paths
 */
export function useLocalizedLink() {
  const language = useLanguageFromPath();
  
  /**
   * Get a localized path based on current language
   * @param path - The base path (e.g., "/blog", "/contact")
   * @returns The localized path (e.g., "/sv/blog" if Swedish)
   */
  const getLocalizedPath = (path: string): string => {
    // Remove any existing language prefix
    const cleanPath = path.replace(/^\/(sv|en)/, "");
    const prefix = language === "sv" ? "/sv" : "/en";
    
    return cleanPath === "" || cleanPath === "/" ? prefix : `${prefix}${cleanPath}`;
  };
  
  /**
   * Get the equivalent path in the other language
   * @param currentPath - The current path
   * @returns The path in the alternate language
   */
  const getAlternateLanguagePath = (currentPath: string): string => {
    const isSwedish = currentPath.startsWith("/sv");
    const cleanPath = currentPath.replace(/^\/(sv|en)/, "") || "";
    
    if (isSwedish) {
      // Switch to English
      return cleanPath === "" ? "/en" : `/en${cleanPath}`;
    } else {
      // Switch to Swedish
      return cleanPath === "" ? "/sv" : `/sv${cleanPath}`;
    }
  };
  
  /**
   * Get canonical URL for a path
   */
  const getCanonicalUrl = (path: string): string => {
    return `${BASE_URL}${path}`;
  };
  
  /**
   * Get hreflang alternate URLs for SEO
   */
  const getHreflangUrls = (basePath: string): { en: string; sv: string; xDefault: string } => {
    // basePath should be the path without language prefix (e.g., "/blog/slug")
    const cleanPath = basePath.replace(/^\/(sv|en)/, "") || "";
    
    return {
      en: cleanPath === "" ? `${BASE_URL}/en` : `${BASE_URL}/en${cleanPath}`,
      sv: cleanPath === "" ? `${BASE_URL}/sv` : `${BASE_URL}/sv${cleanPath}`,
      xDefault: cleanPath === "" ? `${BASE_URL}/sv` : `${BASE_URL}/sv${cleanPath}`,
    };
  };
  
  return {
    language,
    getLocalizedPath,
    getAlternateLanguagePath,
    getCanonicalUrl,
    getHreflangUrls,
  };
}

/**
 * Utility function to get the base path without language prefix
 */
export function getBasePath(path: string): string {
  return path.replace(/^\/(sv|en)/, "") || "/";
}
