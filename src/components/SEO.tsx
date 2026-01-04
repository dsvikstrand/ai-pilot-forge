import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { getBasePath } from "@/hooks/useLocalizedLink";

interface SEOProps {
  titleEn: string;
  titleSv: string;
  descriptionEn: string;
  descriptionSv: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const BASE_URL = "https://vds.se";
const DEFAULT_IMAGE = `${BASE_URL}/vds-og-image.jpg`;
const SITE_NAME = "VDS - Vikstrand Deep Solutions";

export function SEO({
  titleEn,
  titleSv,
  descriptionEn,
  descriptionSv,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}: SEOProps) {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Get the base path without language prefix for hreflang
  const basePath = getBasePath(location.pathname);
  
  // Current language content
  const title = language === "sv" ? titleSv : titleEn;
  const description = language === "sv" ? descriptionSv : descriptionEn;
  const fullTitle = title === SITE_NAME ? title : `${title} | VDS`;
  
  // Generate canonical URL based on current language
  const canonicalUrl = language === "sv"
    ? (basePath === "/" ? `${BASE_URL}/sv` : `${BASE_URL}/sv${basePath}`)
    : `${BASE_URL}${basePath}`;
  
  // Generate hreflang URLs
  const enUrl = `${BASE_URL}${basePath}`;
  const svUrl = basePath === "/" ? `${BASE_URL}/sv` : `${BASE_URL}/sv${basePath}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={language === "sv" ? "sv_SE" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* hreflang for language variants - proper path-based URLs */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="sv" href={svUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Helmet>
  );
}
