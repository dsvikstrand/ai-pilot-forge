import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const BASE_URL = "https://vds.se";
const DEFAULT_IMAGE = `${BASE_URL}/vds-og-image.jpg`;
const SITE_NAME = "VDS - Vikstrand Deep Solutions";

export function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}: SEOProps) {
  const { language } = useLanguage();
  const fullTitle = title === SITE_NAME ? title : `${title} | VDS`;
  const canonicalUrl = canonical || BASE_URL;

  return (
    <Helmet>
      {/* Basic meta tags */}
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

      {/* hreflang for language variants */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="sv" href={`${canonicalUrl}${canonicalUrl.includes("?") ? "&" : "?"}lang=sv`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
}
