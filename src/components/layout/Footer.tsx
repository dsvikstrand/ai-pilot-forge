import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import vdsLogo from "@/assets/vds-logo.jpg";

export function Footer() {
  const { language } = useLanguage();

  // Helper to get localized path
  const getLocalizedPath = (basePath: string): string => {
    if (language === "sv") {
      return basePath === "/" ? "/sv" : `/sv${basePath}`;
    }
    return basePath;
  };

  const footerLinks = {
    company: [
      { href: "/", label: t(translations.nav.home, language) },
      { href: "/services", label: t(translations.nav.services, language) },
      { href: "/custom-ai", label: t({ sv: "Skräddarsydd AI", en: "Custom AI" }, language) },
      { href: "/about", label: t(translations.nav.about, language) },
      { href: "/blog", label: t({ sv: "Blogg", en: "Blog" }, language) },
    ],
    legal: [
      { href: "/contact", label: t(translations.nav.contact, language) },
      { href: "/privacy", label: t(translations.footer.privacy, language) },
    ],
  };

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={getLocalizedPath("/")} className="flex items-center gap-3">
              <img 
                src={vdsLogo} 
                alt="VDS Logo" 
                className="h-10 w-10 rounded-md object-cover"
              />
              <span className="text-lg font-semibold text-foreground">
                Vikstrand Deep Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t(translations.footer.tagline, language)}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/V1kstrand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-vikstrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              {t(translations.footer.company, language)}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={getLocalizedPath(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              {t(translations.footer.legal, language)}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={getLocalizedPath(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vikstrand Deep Solutions. {t(translations.footer.copyright, language)}</p>
        </div>
      </div>
    </footer>
  );
}
